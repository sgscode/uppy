<?php
$p = "003.056.189";
$p = explode (".", $p);
//echo $p[count($p)-1];
$r = "001.023.123";
$r = explode (".", $r);
echo sprintf('%03u', min($r)+1);
//echo date("Y-m-d H:i:s");
//$arr = array(
//    array(
//        'id' => '1',
//        'name' => 'Имя раздела 1',
//        'parentid' => '0'
//    ),
//    array(
//        'id' => '2',
//        'name' => 'Имя раздела 2',
//        'parentid' => '0'
//    ),
//    array(
//        'id' => '3',
//        'name' => 'Имя раздела 3',
//        'parentid' => '1'
//    ),
//    array(
//        'id' => '4',
//        'name' => 'Имя раздела 4',
//        'parentid' => '2'
//    ),
//    array(
//        'id' => '5',
//        'name' => 'Имя раздела 5',
//        'parentid' => '4'
//    ),
//    array(
//        'id' => '6',
//        'name' => 'Имя раздела 6',
//        'parentid' => '2'
//    ),
//);
//
//function build_tree($arr, $pid, $t)
//{
//    $t .='|___';
//    foreach ($arr as $a) {
//        if ($a['parentid'] == $pid) {
//            echo $t . $a['name'] . '</br>';
//            build_tree($arr, $a['id'], $t);
//        } else {
//            continue;
//        }
//    }
//}
//
//build_tree($arr, 2, $t);