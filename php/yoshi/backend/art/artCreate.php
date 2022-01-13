<?php

	include('../basic/mySqlConnect.php');

	//---------------------------------------------------
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body, true);

    echo json_encode($data);
    // 建立SQL
    $sql = "INSERT INTO arts(NAME, LENTH, WIDTH, HEIGHT, MATERIAL, INFO, STATUS_TYPE, IN_IMG_1, IN_IMG_2, IN_IMG_3, IN_IMG_4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // 執行
    $statemant = mySqlConnect()->prepare($sql);

    // 依序填入每個?的值
    $statemant->bindValue(1, $data['NAME']);
    $statemant->bindValue(2, $data['LENTH']);
    $statemant->bindValue(3, $data['WIDTH']);
    $statemant->bindValue(4, $data['HEIGHT']);
    $statemant->bindValue(5, $data['MATERIAL']);
    $statemant->bindValue(6, $data['INFO']);
    $statemant->bindValue(7, $data['STATUS_TYPE']);
    $statemant->bindValue(8, $data['IN_IMG_1']);

    // 判斷是否有 2~4張圖 若有則填入 沒有則為空值
	isset($data['IN_IMG_2']) ? $statemant->bindValue(9, $data['IN_IMG_2']) : $statemant->bindValue(9, '');
	isset($data['IN_IMG_3']) ? $statemant->bindValue(10, $data['IN_IMG_3']) : $statemant->bindValue(10, '');
	isset($data['IN_IMG_4']) ? $statemant->bindValue(11, $data['IN_IMG_4']) : $statemant->bindValue(11, '');
    
    $statemant->execute();

?>