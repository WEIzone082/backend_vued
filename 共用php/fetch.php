<?php

//---------------------------------------------------

//這兩行是讓你可以去抓axios裡面傳進來的資料
$request_body = file_get_contents('php://input');
$got = json_decode($request_body, true);

// 以下開始藉由傳進來的資料 去判斷要執行甚麼動作
if($got['action'] == 'fetchall'){
    
    $data = array();
    
    $sql = "SELECT * FROM member ";
    
    $statement = $pdo->prepare($sql); 
    $statement->execute();
    
    //這行就是轉換傳回值讓Vue可以看懂 應該吧
    while($row = $statement->fetch(PDO::FETCH_ASSOC)){
        $data[] = $row;
    }
    
    echo json_encode($data);
}


   

?>