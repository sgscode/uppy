<?php

namespace UppyApp;

class FileAnylazer
{

    private $getId3;

    public function __construct()
    {
        $this->getId3 = new \getID3;
    }

    public function analyzeFile($filePath)
    {
        $id3FileInfo = $this->getId3->analyze($filePath);

        $targetProp = array('filesize' => '',
            'fileformat' => '',
            'video' => array(
                'frame_rate' => '',
                'dataformat' => '',
                'resolution_x' => '',
                'resolution_y' => ''
            ),
            'audio' => array(
                'dataformat' => '',
                'channels' => '',
                'bitrate' => '',
                'sample_rate' => ''
        ));

        return $this->checkProperties($targetProp, $id3FileInfo);
        
    }

    private function checkProperties($targetProp, $id3FileInfo)
    {
        $fileInfo = array();
        foreach ($targetProp as $property => $value) {
            if (is_array($targetProp[$property])) {
                foreach ($targetProp[$property] as $key => $value) {
                    if (isset($id3FileInfo[$property][$key])) {
                        $fileInfo[$property][$key] = $id3FileInfo[$property][$key];
                    }
                }
            } else {
                if (isset($id3FileInfo[$property])) {
                    $fileInfo[$property] = $id3FileInfo[$property];
                }
            }
        }

        return $fileInfo;
    }

}
