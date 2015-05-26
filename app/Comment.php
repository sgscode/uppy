<?php

namespace UppyApp;

class Comment{
    public $commentId;
    public $fileId;
    public $path;
    public $message;
    public $authorId;
    public $date;
    
//    public static function constructFromPdoResult($result)
//    {
//        $comment = new self();
//        $comment->commentId = $result['comment_id'];
//        $comment->fileId = $result['comment_file_id'];
//        $comment->path = $result['comment_path'];
//        $comment->authorId = $result['comment_author_id'];
//        $comment->message = $result['comment_message'];
//        $comment->date = $result['comment_date'];
//        return $comment;
//    }
    public function getCommentLevel(){
        $path  =  explode('.', $this->path);
        return \count($path);
    }
    
    
}