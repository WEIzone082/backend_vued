<?php
  
  // 兩個檔案都會看到這些Header 
  // 詳細作用我也不知道
  // 反正加了就能用了
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS, post, get');
  header("Access-Control-Max-Age", "3600");
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  header("Access-Control-Allow-Credentials", "true");

  //MySQL相關資訊
  $db_host = "127.0.0.1";
  $db_user = "root";
  $db_pass = "bithmuth602";
  $db_select = "tfd104g03";

  //建立資料庫連線物件
  $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

  //建立PDO物件，並放入指定的相關資料
  $pdo = new PDO($dsn, $db_user, $db_pass);

?>

