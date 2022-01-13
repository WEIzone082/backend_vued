<?php

	include('../basic/mySqlConnect.php');

	//---------------------------------------------------
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body, true);

    // echo json_encode($data);

    // ARTS_ID, NAME, LENTH, WIDTH, HEIGHT, MATERIAL, INFO, STATUS_TYPE, IN_IMG_1, IN_IMG_2, IN_IMG_3, IN_IMG_4
    // 建立SQL
    $sql = "UPDATE WORKS SET  
            WORKS_NAME = ?, 
            WORKS_PRICE = ?, 
            WORKS_INFO = ?, 
            STATUS_TYPE = ?, 
            WORKS_MATERIAL = ?, 
            WORKS_HEIGHT = ?, 
            WORKS_RADIUS = ?, 
            WORKS_STOCK = ?,
            IN_IMG_1 = ?,
            IN_IMG_2 = ?,
            IN_IMG_3 = ?,
            IN_IMG_4 = ?,
            WORKS_TYPE_ID = ?
            WHERE WORKS_ID = ?";

    // 執行
    $statemant = mySqlConnect()->prepare($sql);

    // 依序填入每個?的值
    $statemant->bindValue(1, $data['WORKS_NAME']);
    $statemant->bindValue(2, $data['WORKS_PRICE']);
    $statemant->bindValue(3, $data['WORKS_INFO']);
    $statemant->bindValue(4, $data['STATUS_TYPE']);
    $statemant->bindValue(5, $data['WORKS_MATERIAL']);
    $statemant->bindValue(6, $data['WORKS_HEIGHT']);
    $statemant->bindValue(7, $data['WORKS_RADIUS']);
    $statemant->bindValue(8, $data['WORKS_STOCK']);
    $statemant->bindValue(9, $data['IN_IMG_1']);
    $statemant->bindValue(10, $data['IN_IMG_2']);
    $statemant->bindValue(11, $data['IN_IMG_3']);
    $statemant->bindValue(12, $data['IN_IMG_4']);
    $statemant->bindValue(13, $data['WORKS_TYPE_ID']);

    // id
    $statemant->bindValue(14, $data['WORKS_ID']);
    
    $statemant->execute();

?>