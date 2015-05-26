<?php

namespace UppyApp;

class PageNavigator
{

    protected $recordPerPage = "";
    protected $countRecord = "";
    protected $url="";

    public function __construct($recordPerPage, $countRecord, $url)
    {
        $this->recordPerPage = $recordPerPage;
        $this->countRecord = $countRecord;
        $this->url = $url;
    }

    public function getPageLink()
    {
        $pageArray = array();
        $pageCount = ceil($this->countRecord / $this->recordPerPage);

        for ($pageNumber = 0; $pageNumber < $pageCount; $pageNumber++) {
            $currentPage = $pageNumber + 1;
            $pageArray[$currentPage] = $this->url . '/' . $currentPage;
        }

        return $pageArray;
    }

}
