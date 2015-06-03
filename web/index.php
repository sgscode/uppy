<?php

require __DIR__ . '../../vendor/autoload.php';
require __DIR__ . '../../config.php';

$app = new \Slim\Slim(array(
    'view' => new \Slim\Views\Twig(),
    'templates.path' => __DIR__ . '../../views',
        ));

$app->container->singleton('DBH', function () use($config) {
    $DBH = new PDO("mysql:host=" . $config['dbHost'] . ";dbname=" . $config['dbName'] .
            ";charset=utf8", $config['dbUser'], $config['dbPass']);
    $DBH->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    return $DBH;
});
$app->container->singleton('sphinxDBH', function () use($config) {
    $sphinxDBH = new PDO('mysql:host=localhost;port=9306');
    $sphinxDBH->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    return $sphinxDBH;
});

$app->container->singleton('sphinxSearch', function() use ($app) {
    return new \UppyApp\SphinxSearch($app->sphinxDBH);
});

$app->container->singleton('fileMapper', function() use ($app) {
    return new \UppyApp\FileMapper($app->DBH);
});

$app->container->singleton('commentMapper', function() use ($app) {
    return new \UppyApp\CommentMapper($app->DBH);
});

//Главная страница сайта
$app->get('/', function () use ($app) {
    $mainPage = "";
    $app->render('main.html.twig', array(
        'hostName' => $mainPage)
    );
});

//Список последних файлов
$app->get('/main(/:page)', function ($page = 1) use ($app, $config) {
    $url = '/filehost/web/main';
    $recordsPerPage = $config['filesPerPage'];
    $startRecord = ($page - 1) * $recordsPerPage;
    $countRecords = $app->fileMapper->getCountFiles($config['countLastFiles']);
    $files = $app->fileMapper->getLastFiles($startRecord, $recordsPerPage);
    $pages = new \UppyApp\PageNavigator($recordsPerPage, $countRecords, $url);
    $app->render('list.html.twig', array(
        'files' => $files,
        'countPage' => $pages->getPageLink(),
        'startRecord' => $startRecord,
        'recordsPerPage' => $recordsPerPage
            )
    );
});

//Страница загрузки файла с сервера
$app->get('/:fileKey(/:page)', function ($fileKey, $page = 1) use ($app, $config) {
    $url = '/filehost/web/' . $fileKey;
    $fileId = $app->fileMapper->getFileIdByKey($fileKey);
    $countRecords = $app->commentMapper->getCountComments($fileId);
    $recordsPerPage = $config['commentsPerPage'];
    $startRecord = ($page - 1) * $recordsPerPage;
    $comments = $app->commentMapper->getFileComments($fileId, $startRecord, $recordsPerPage);
    $file = $app->fileMapper->getFileByKey($fileKey);
    $pages = new \UppyApp\PageNavigator($recordsPerPage, $countRecords, $url);

    if (file_exists($config['uploadFolder'] . $fileKey)) {
        $app->render('downloadFile.html.twig', array(
            'fileInfo' => $file->getFileMediaInfoAsArray(),
            'file' => $file,
            'comments' => $comments,
            'pageLinks' => $pages->getPageLink(),
            'startRecord' => $startRecord,
            'recordsPerPage' => $recordsPerPage,
            'page' => $page
                )
        );
    } else {
        $app->render('fileNotFound.html.twig', array(
            'file' => $file)
        );
    }
});


//Получение файла с сервера
$app->get('/download/file/:fileKey', function ($fileKey) use ($app, $config) {
    $file = $app->fileMapper->getFileByKey($fileKey);

    $fileName = $file->getFileName();
    if (file_exists($config['uploadFolder'] . $fileKey)) {
        header("X-SendFile: " . $config['uploadPath'] . $fileKey);
        header("Content-Type: application/octet-stream");
        header("Content-Disposition: attachment; filename= " . $fileName);
        exit;
    } else {

        $app->render('fileNotFound.html.twig', array(
            'file' => $file)
        );
    }
});

//Загрузка файла на сервер
$app->post('/', function () use ($app, $config) {
    $message = "";
    if (isset($_FILES['userfile'])) {
        $file = \UppyApp\File::setPropertiesFromPost($_FILES['userfile']);
        $uploader = new UppyApp\Uploader($config['uploadFolder']);
        try {
            $uploader->checkUploadErrors($file);
            $uploader->saveFile($file);
        } catch (Exception $e) {
            $message = $e->getMessage();
        }
    }
    if ($app->request->isAjax()) {
        if (empty($message)) {
            $app->response->setBody('Файл ' . $file->getFileName() . ' успешно загружен,  <a href="/filehost/web/' . $file->getFileKey() . '">ссылка на файл</a>');
        } else {
            $app->response->setBody($message);
        }
    } else {
        if (empty($message)) {
            $app->redirect('http://localhost/filehost/web/' . $file->getFileKey());
        } else {
            $app->render('main.html.twig', array(
                'message' => $message
                    )
            );
        }
    }
});


//Отправка комментария
$app->post('/:fileKey(/:page)', function ($key, $page = 1) use ($app) {
    if ($app->request->post('comment') <> '') {
        $newComment = new \UppyApp\Comment;
        $newComment->message = $app->request->post('comment');
        $newComment->date = date("Y-m-d H:i:s");
        $newComment->fileId = $app->fileMapper->getFileIdByKey($key);
        $parentId = $app->request->post('parentComment');
        if ($parentId) {
            $parentComm = $app->commentMapper->getParentPath($parentId);
            $maxPath = $app->commentMapper->getMaxPathId($newComment->fileId);
            $newComment->path = $parentComm . "." . sprintf('%03u', $maxPath + 1);
        } else {
            if ($app->commentMapper->getCountComments($newComment->fileId)) {
                $maxPath = $app->commentMapper->getMaxPathId($newComment->fileId);
                $newComment->path = sprintf('%03u', $maxPath + 1);
            } else {
                $newComment->path = '001';
            }
        }
        $app->commentMapper->saveComment($newComment);
    }
    $app->response->redirect("/filehost/web/$key/$page");
});


//Поиск файла
$app->get('/foundfiles/olol(/:page)', function ($page = 1) use ($app, $config) {
    $search = trim($app->request->get('userSearch'));
    if ($search) {
        $url = '/filehost/web/foundfiles/olol';
        $recordsPerPage = $config['filesPerPage'];
        $startRecord = ($page - 1) * $recordsPerPage;
        $countRecords = $app->sphinxSearch->getFilesCount($search);
//    var_dump($countRecords);
//    $app->stop();
        if ($countRecords) {
            $idArray = $app->sphinxSearch->getFilesId($search, $startRecord, $recordsPerPage);

            $files = $app->fileMapper->getFilesByIdArray($idArray);
        }
//        var_dump($idArray);
//    $app->stop();
        $pages = new \UppyApp\PageNavigator($recordsPerPage, $countRecords, $url, $_SERVER['QUERY_STRING']);
        $app->render('list.html.twig', array(
            'files' => $files,
            'countPage' => $pages->getPageLink(),
            'startRecord' => $startRecord,
            'recordsPerPage' => $recordsPerPage
                )
        );
    }
    else {
        $app->render('main.html.twig', array(
                'message' => 'пустой запрос'
                    )
            );
    }
});
$app->run();
