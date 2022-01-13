<?php

	include('../basic/mySqlConnect.php');

	//---------------------------------------------------
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body, true);

    // 建立SQL
    $sql = "INSERT INTO 
            course(
            COURSE_TIME, 
            COURSE_PARTY, 
            COURSE_PRICE, 
            COURSE_CLASSES, 
            COURSE_START_DATE, 
            COURSE_END_DATE, 
            STATUS_TYPE, 
            COURSE_TYPE_ID
            ) 
            VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?)";

    // 執行
    $statemant = mySqlConnect()->prepare($sql);

    // 依序填入每個?的值
    $statemant->bindValue(1, $data['createFormValue']['COURSE_TIME']);
    $statemant->bindValue(2, $data['createFormValue']['COURSE_PARTY']);
    $statemant->bindValue(3, $data['createFormValue']['COURSE_PRICE']);
    $statemant->bindValue(4, $data['createFormValue']['COURSE_CLASSES']);
    $statemant->bindValue(5, $data['createFormValue']['COURSE_START_DATE']);
    $statemant->bindValue(6, $data['createFormValue']['COURSE_END_DATE']);
    $statemant->bindValue(7, $data['createFormValue']['STATUS_TYPE']);
    $statemant->bindValue(8, $data['COURSE_TYPE_ID']);

    
    $statemant->execute();

?>