<?php

namespace UppyApp;

class PageNavigator
{

    protected $recordPerPage = "";
    protected $countRecord = "";
    protected $url="";
    protected $queryString="";

    public function __construct($recordPerPage, $countRecord, $url, $queryString="")
    {
        $this->recordPerPage = (int)$recordPerPage;
        $this->countRecord = (int)$countRecord;
        $this->url = $url;
        if($queryString){
            $this->queryString = '?' . $queryString;
        }
    }

    public function getPageLink()
    {
        $pageArray = array();
        $pageCount = ceil($this->countRecord / $this->recordPerPage);

        for ($pageNumber = 0; $pageNumber < $pageCount; $pageNumber++) {
            $currentPage = $pageNumber + 1;
            $pageArray[$currentPage] = $this->url . '/' . $currentPage . $this->queryString;
        }
// var_dump($pageCount);
//        die();
        return $pageArray;
        
    }

}
