<?php

namespace UppyApp;

class CommentMapper
{

    protected $DBH;

    public function __construct(\PDO $DBH)
    {
        $this->DBH = $DBH;
    }

    public function saveComment(\UppyApp\Comment $comment)
    {
        $STH = $this->DBH->prepare("INSERT INTO COMMENTS (comment_file_id, comment_path, comment_message,
                                                     comment_author_id, comment_date) 
                                             VALUES (:comment_file_id, :comment_path, :comment_message,
                                                     :comment_author_id, :comment_date)");
        $STH->bindValue(':comment_file_id', $comment->fileId);
        $STH->bindValue(':comment_path', $comment->path);
        $STH->bindValue(':comment_message', $comment->message);
        $STH->bindValue(':comment_author_id', $comment->authorId);
        $STH->bindValue(':comment_date', $comment->date);
        $STH->execute();
    }

    public function getFileComments($fileId, $startRecord=0, $recordsPerPage=10)
    {
        $STH = $this->DBH->prepare("select comment_id as commentId, 
                                           comment_file_id as fileId, 
                                           comment_path as path, 
                                           comment_message as message,
                                           comment_author_id as authorId,
                                           comment_date as date
                                       from comments where comment_file_id = :comment_file_id order by comment_path
                                       limit :startRecord, :recordsPerPage");
        $STH->bindValue(':comment_file_id', $fileId);
        $STH->bindValue(":startRecord", (int) $startRecord, \PDO::PARAM_INT);
        $STH->bindValue(":recordsPerPage", (int) $recordsPerPage, \PDO::PARAM_INT);
        $STH->execute();
        return $STH->fetchAll(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, "UppyApp\Comment");
    }

    public function getParentPath($commentId)
    {
        $STH = $this->DBH->prepare("SELECT comment_path FROM comments where comment_id = :commentId");
        $STH->bindValue(":commentId", $commentId);
        $STH->execute();
        return $STH->fetchColumn();
    }

    public function getMaxPathId($fileId)
    {
        $STH = $this->DBH->prepare("select comment_path from comments where comment_id = 
                                       (select max(comment_id) from comments  
                                       where comment_file_id = :fileId group by comment_file_id)");
        $STH->bindValue(":fileId", $fileId);
        $STH->execute();
        $pathArray = explode('.', $STH->fetchColumn());
        $maxPathId = sprintf('%03u', max($pathArray));
        return $maxPathId;
    }

    public function getCountComments($fileId)
    {
        $STH = $this->DBH->prepare("select count(*) from comments where comment_file_id = :fileId");
        $STH->bindValue(":fileId", $fileId);
        $STH->execute();
        return $STH->fetchColumn();
    }
    
    

}
