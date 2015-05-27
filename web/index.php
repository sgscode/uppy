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
    $url = 'http://localhost/filehost/web/main';
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
    $url = 'http://localhost/filehost/web/' . $fileKey;
    $fileId = $app->fileMapper->getFileIdByKey($fileKey);
    $countRecords = $app->commentMapper->getCountComments($fileId);
    $recordsPerPage = $config['commentsPerPage'];
    $startRecord = ($page - 1) * $recordsPerPage;
    $comments = $app->commentMapper->getFileComments($fileId, $startRecord, $recordsPerPage);
    $file = $app->fileMapper->getFileByKey($fileKey);
    $pages = new \UppyApp\PageNavigator($recordsPerPage, $countRecords, $url);
    
    if (file_exists($config['uploadFolder'] . $fileKey)) {
        $app->render('downloadFile.html.twig', array(
            'fileInfo'=>$file->getFileMediaInfoAsArray(),
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
    $message = 'Ошибка!!! Размер файла должен быть не более 10 мегабайт';
    if (isset($_FILES['userfile'])) {
        $file = \UppyApp\File::setPropertiesFromPost($_FILES['userfile']);
        $file->generateFileKey();
        $message = 'success';
        $uploader = new UppyApp\Uploader($config['uploadFolder']);
        try {
            $uploader->checkUploadErrors($file);
            $uploader->saveFile($file);
        } catch (Exception $e) {
            $message = $e->getMessage();
        }
    }
    $app->render('main.html.twig', array(
        'message' => $message
            )
    );
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

$app->run();
