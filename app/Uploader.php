<?php

namespace UppyApp;



class Uploader
{

    private $uploadFolder = "";

    public function __construct($uploadFolder)
    {
        $this->uploadFolder = $uploadFolder;
    }

    public function checkUploadErrors(File $userfile)
    {
        switch ($userfile->getFileError()) {
            case UPLOAD_ERR_OK:
                return FALSE;
            case UPLOAD_ERR_NO_FILE:
                throw new \UppyApp\FileException("Вы не выбрали фаил для загрузки");
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                throw new \UppyApp\FileException("Слишком большой фаил");
            case UPLOAD_ERR_PARTIAL:
                throw new \UppyApp\FileException("Фаил не загрузился до конца, попробуйте ещё раз");
            case UPLOAD_ERR_CANT_WRITE:
            case UPLOAD_ERR_NO_TMP_DIR:
                throw new \UppyApp\FileException("Проблемы на сервере, попробуйте позже");
            default:
                throw new \App\FileException("Неизвестная ошибка");
        }
    }

    public function saveFile(File $file)
    {
        $uploadfile = $this->uploadFolder . $file->getFileKey();
        if (move_uploaded_file($file->getFileTempName(), $uploadfile)) {
            $fileAnalyzer = new \UppyApp\FileAnylazer();
            $fileInfo = $fileAnalyzer->analyzeFile($uploadfile);
            $file->setFileMediaInfo($fileInfo);
            $app = \Slim\Slim::getInstance();
            $app->fileMapper->saveFile($file);
            if ($file->isImage()) {
                $this->createThumb($file->getFileKey());
            }
        } else {
            throw new \UppyApp\FileException("Проблемы на сервере, попробуйте позже");
        }
    }

    public function deleteFile()
    {
        
    }

    public function createThumb($fileKey)
    {
        list($width, $height) = getimagesize('C:\xampp\htdocs\filehost\web\files/' . $fileKey);
        $imageManager = new \Intervention\Image\ImageManager(array('driver'=>'gd'));
        $image = $imageManager->make('C:\xampp\htdocs\filehost\web\files\\' . $fileKey);
        if ($width >= $height) {
            $image->resize(250, null, function ($constraint) {
                $constraint->aspectRatio();
            });
        } else {
            $image->resize(null, 250, function ($constraint) {
                $constraint->aspectRatio();
            });
        }
        $image->save('C:\xampp\htdocs\filehost\web\files\thumb\\' . $fileKey);
    }

}
