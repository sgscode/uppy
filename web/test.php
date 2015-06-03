
<?php


//
//error_reporting(-1);
//$pdo = new PDO('mysql:host=localhost;port=9306');
//$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//$st = $pdo->prepare("INSERT INTO testrtt (id, filename) VALUES (?, ?)");
//$st->execute(array(166, 'redhead.jpg'));
//
////
////
//

// номер порта берется из конфига сфикса а не наугад
$pdo = new PDO('mysql:host=localhost;port=9306');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//$pdo->SetMatchMode ( SPH_MATCH_ANY );
// Ищем слово «курс» в индексе новостей
// мануал: http://sphinxsearch.com/docs/manual-2.2.1.html#sphinxql-select
$stmt = $pdo->query("SELECT count(*) FROM files, filesrt WHERE MATCH('*redh*')");
$results = $stmt->fetchAll(\PDO::FETCH_COLUMN);
$ids = implode(',' , $results);
var_dump($results);





//$p = "003.056.189";
//$p = explode (".", $p);
////echo $p[count($p)-1];
//$r = "001.023.123";
//$r = explode (".", $r);
//echo sprintf('%03u', min($r)+1);
//
//
//
//
//
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