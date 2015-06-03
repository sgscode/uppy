<?php

namespace UppyApp;

class SphinxSearch
{

    protected $sphinxDBH;

    public function __construct(\PDO $sphinxDBH)
    {
        $this->sphinxDBH = $sphinxDBH;
    }

    public function getFilesId($userSearch, $startRecord, $countPerPage)
    {
        $search = '*' . $userSearch . '*';
        $STH = $this->sphinxDBH->prepare("SELECT id FROM files, filesrt WHERE MATCH(:search) ORDER BY id DESC LIMIT :startRecord, :countPerPage");
        $STH->bindValue('search', $search);
        $STH->bindValue('startRecord', (int)$startRecord, \PDO::PARAM_INT);
        $STH->bindValue('countPerPage', (int)$countPerPage, \PDO::PARAM_INT);
        $STH->execute();
        return $STH->fetchAll(\PDO::FETCH_COLUMN);
    }

    public function getFilesCount($userSearch)
    {
        $search = '*' . $userSearch . '*';
        $STH = $this->sphinxDBH->prepare("SELECT count(*) FROM files, filesrt WHERE MATCH(:search)");
        $STH->bindValue('search', $search);
        $STH->execute();
        return $STH->fetchColumn();
    }

    public function updateRtIndex(File $file)
    {
        $STH = $this->sphinxDBH->prepare("INSERT INTO filesrt (id, filename) VALUES (?, ?)");
        return $STH->execute(array($file->getId(), $file->getFileName()));
    }

}
