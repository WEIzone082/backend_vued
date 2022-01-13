<?php

    // mysql連線
    include('../basic/mySqlConnect.php');

    //建立SQL語法
    // $sql = "SELECT * FROM WORKS ORDER BY WORKS_ID DESC";
    $sql = "SELECT * FROM works w
    join works_type yt
    on w.WORKS_TYPE_ID = yt.WORKS_TYPE_ID
    order by w.WORKS_ID desc";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // -> 和JS中的.相同 ( $pdo.query($sql) )
    $statement = mySqlConnect()->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    echo json_encode($data);

?>