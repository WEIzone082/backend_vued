<?php

//參見connection

include("./connection.php");

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
}elseif($got['action'] == 'toggle'){

    $target = $got['ToDo'] === 'ban'? 1:0;
    $sql = "UPDATE MEMBER SET STATUS = ".$target." WHERE MEMBER_ID = ".$got['MemberID'];
    $statement = $pdo->prepare($sql); 
    $statement->execute();

}elseif ($got['action'] === 'getOrders') {

    $sql = "SELECT ORDER_ID,ORDER_DATETIME,ORDER_ITEMS,ORDER_PRICE_TOTAL,BUYER,PAYMENT_METHOD,DELIVER_METHOD,ORDER_STATUS_ID,REMARKS FROM ORDER_INFO";
    $statement = $pdo->prepare($sql); 
    $statement->execute();
    while($row = $statement->fetch(PDO::FETCH_ASSOC)){
        $data[] = $row;
    }
    echo json_encode($data);
}elseif ($got['action'] === 'getOrder') {
    $sql = "SELECT * FROM ORDER_INFO WHERE ORDER_ID = ".$got['orderID'];
    $statement = $pdo->prepare($sql); 
    $statement->execute();
    $data = $statement->fetch(PDO::FETCH_ASSOC);
    // while($row = $statement->fetch(PDO::FETCH_ASSOC)){
    //     $data[] = $row;
    // }
    echo json_encode($data);
}elseif ($got['action']== 'getDetail') {
    $sql = "
        SELECT order_detail.*, url.*
        FROM order_detail
        INNER JOIN (
        SELECT WORKS_ID,WORKS_IN_IMG_1,WORKS_RADIUS,WORKS_NAME FROM works GROUP BY WORKS_ID
        ) AS url
        WHERE order_detail.PRODUCT_ID = url.WORKS_ID AND ORDER_ID = 
    ".$got['orderID'];
    $statement = $pdo->prepare($sql); 
    $statement->execute();
    while($row = $statement->fetch(PDO::FETCH_ASSOC)){
        $data[] = $row;
    }
    echo json_encode($data);
}


   

?>