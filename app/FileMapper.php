<?php

namespace UppyApp;

class FileMapper
{

    protected $DBH;

    public function __construct(\PDO $DBH)
    {
        $this->DBH = $DBH;
    }

    protected function bindFields(\PDOStatement $statment, File $file)
    {
        $statment->bindValue(':fileName', $file->getFileName());
        $statment->bindValue(':fileType', $file->getFileType());
        $statment->bindValue(':fileSize', $file->getFileSize());
        $statment->bindValue(':fileMediaInfo', $file->getFileMediaInfo());
        $statment->bindValue(':fileKey', $file->getFileKey());
    }

    public function saveFile(File $file)
    {
        $STH = $this->DBH->prepare("INSERT INTO FILES (fileName, fileType, fileSize,
                                                      fileKey, fileMediaInfo) 
                                             VALUES (:fileName, :fileType, :fileSize, 
                                                      :fileKey, :fileMediaInfo)");
        $this->bindFields($STH, $file);
        $STH->execute();
    }

    public function getLastFiles($startRecord = 0, $countPerPage = 10)
    {
        $STH = $this->DBH->prepare("SELECT fileName, fileType, fileSize, fileKey
                                   FROM files ORDER BY fileUploadDate DESC LIMIT :startRecord, :countPerPage");
        $STH->bindValue(":startRecord", (int) $startRecord, \PDO::PARAM_INT);
        $STH->bindValue(":countPerPage", (int) $countPerPage, \PDO::PARAM_INT);
        $STH->execute();
        return $STH->fetchAll(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, "UppyApp\File");
    }

    public function getFileByKey($fileKey)
    {
        $STH = $this->DBH->prepare("SELECT fileName, fileType, fileSize, fileKey, fileMediaInfo
                                    FROM files WHERE fileKey=:fileKey");
        $STH->bindValue(":fileKey", $fileKey);
        $STH->execute();
        $STH->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, "UppyApp\File");
        return $STH->fetch();
    }
    
    public function getCountFiles($limit){
         $STH = $this->DBH->prepare("SELECT count(*) FROM (select 1 from files  limit 0, :limit) as tbl");
         $STH->bindValue(":limit", (int) $limit, \PDO::PARAM_INT);
         $STH->execute();
         return $STH->fetchColumn();
    }
    
    public function getFileIdByKey($key){
         $STH = $this->DBH->prepare("SELECT id FROM files where fileKey = :fileKey");
         $STH->bindValue(":fileKey", $key);
         $STH->execute();
         return $STH->fetchColumn();
    }

}
