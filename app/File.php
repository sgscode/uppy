<?php

namespace UppyApp;

class File
{

    const FILE_KEY_LENGTH = 32;

    protected $id;
    protected $fileName;
    protected $fileType;
    protected $fileSize;
    protected $fileUploadDate;
    protected $fileKey;
    protected $fileMediaInfo = "";
    protected $fileError;
    protected $fileTempName;

    private function __construct()
    {
        
    }

    public static function setPropertiesFromPost(array $postArray)
    {
        $instance = new self();
        $instance->fileName = $postArray['name'];
        $instance->fileType = $postArray['type'];
        $instance->fileSize = $postArray['size'];
        $instance->fileError = $postArray['error'];
        $instance->fileTempName = $postArray['tmp_name'];
        return $instance;
    }

//
//    public static function setPropertiesFromPdo(array $pdoArray)
//    {
//        $instance = new self();
//        $instance->fileName = $pdoArray['fileName'];
//        $instance->fileType = $pdoArray['fileType'];
//        $instance->fileSize = $pdoArray['fileSize'];
//        $instance->fileKey = $pdoArray['fileKey'];
//        $instance->fileTag = $pdoArray['fileTag'];
//        $instance->fileUploadDate = $pdoArray['fileUploadDate'];
//        return $instance;
//    }

    public function generateFileKey()
    {
        $string = "qwertyuiopasdfghjklzxcvbnm1234567890";
        $strLen = mb_strlen($string);
        $newString = "";

        for ($i = 0; $i < self::FILE_KEY_LENGTH; $i++) {
            $newString .= mb_substr($string, mt_rand(0, $strLen - 1), 1);
        }

        $this->fileKey = $newString;
    }

    public function isImage()
    {
        $path = 'C:\xampp\htdocs\filehost\web\files/' . $this->getFileKey();
        if (getimagesize($path)) {
            return true;
        } else {
            return false;
        }
    }

    function getFileName()
    {
        return $this->fileName;
    }

    function getFileType()
    {
        return $this->fileType;
    }

    function getFileSize()
    {
        return $this->fileSize;
    }

    function getUploadDate()
    {
        return $this->uploadDate;
    }

    function getFileKey()
    {
        return $this->fileKey;
    }

    function setFileName($fileName)
    {
        $this->fileName = $fileName;
    }

    function setFileType($fileType)
    {
        $this->fileType = $fileType;
    }

    function setFileSize($fileSize)
    {
        $this->fileSize = $fileSize;
    }

    function setUploadDate($uploadDate)
    {
        $this->uploadDate = $uploadDate;
    }

    function setFileKey($fileKey)
    {
        $this->fileKey = $fileKey;
    }

    function getFileTag()
    {
        return $this->fileMediaInfo;
    }

    function setFileTag($fileTag)
    {
        $this->fileMediaInfo = $fileTag;
    }

    function getFileUploadDate()
    {
        return $this->fileUploadDate;
    }

    function getFileError()
    {
        return $this->fileError;
    }

    function getFileTempName()
    {
        return $this->fileTempName;
    }

    function setFileUploadDate($fileUploadDate)
    {
        $this->fileUploadDate = $fileUploadDate;
    }

    function setFileError($fileError)
    {
        $this->fileError = $fileError;
    }

    function setFileTempName($fileTempName)
    {
        $this->fileTempName = $fileTempName;
    }

    function getFileMediaInfo()
    {
        return $this->fileMediaInfo;
    }

    public function getFileMediaInfoAsArray()
    {
        $fileInfo = json_decode($this->fileMediaInfo, true);
        if ($fileInfo) {
            return $fileInfo;
        } else {
            $baseInfo = array();
            $baseInfo['filesize'] = $this->getFileSize();
            $baseInfo['filetype'] = $this->getFileType();
            return $baseInfo;
        }
    }

    function setFileMediaInfo(array $fileMediaInfo)
    {
        $fileInfo = json_encode($fileMediaInfo);
        if ($fileInfo) {
            $this->fileMediaInfo = $fileInfo;
        }
    }

}
