<?php

    // mysql連線
    include('../basic/mySqlConnect.php');

    $request_body = file_get_contents('php://input');
	$cid = json_decode($request_body, true);

    //建立SQL語法
    $sql = "SELECT * FROM course WHERE COURSE_TYPE_ID = $cid ORDER BY COURSE_TYPE_ID DESC";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // -> 和JS中的.相同 ( $pdo.query($sql) )
    $statement = mySqlConnect()->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    echo json_encode($data);

?>