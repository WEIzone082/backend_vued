<?php

	include('../basic/mySqlConnect.php');

	//---------------------------------------------------
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body, true);

    // echo json_encode($data);

    // 建立SQL
    $sql = "UPDATE course SET 
            COURSE_TIME = ?, 
            COURSE_PARTY = ?, 
            COURSE_PRICE = ?, 
            COURSE_CLASSES = ?, 
            COURSE_START_DATE = ?, 
            COURSE_END_DATE = ?, 
            STATUS_TYPE = ?, 
            COURSE_TYPE_ID = ?
            WHERE COURSE_ID = ?";

    // 執行
    $statemant = mySqlConnect()->prepare($sql);

    // 依序填入每個?的值
    $statemant->bindValue(1, $data['COURSE_TIME']);
    $statemant->bindValue(2, $data['COURSE_PARTY']);
    $statemant->bindValue(3, $data['COURSE_PRICE']);
    $statemant->bindValue(4, $data['COURSE_CLASSES']);
    $statemant->bindValue(5, $data['COURSE_START_DATE']);
    $statemant->bindValue(6, $data['COURSE_END_DATE']);
    $statemant->bindValue(7, $data['STATUS_TYPE']);
    $statemant->bindValue(8, $data['COURSE_TYPE_ID']);

    // id
    $statemant->bindValue(9, $data['COURSE_ID']);
    
    $statemant->execute();

?>