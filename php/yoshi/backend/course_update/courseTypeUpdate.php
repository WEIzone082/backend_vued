<?php

	include('../basic/mySqlConnect.php');

	//---------------------------------------------------
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body, true);
    
    // 建立SQL
    $sql = "UPDATE course_type SET 
            COURSE_TYPE_NAME = ?, 
            COURSE_INFO = ?, 
            COURSE_PRICE_INFO = ?, 
            COURSE_CLASSES_INFO = ?, 
            COURSE_PARTY_INFO = ?, 
            IN_IMG_1 = ?, 
            IN_IMG_2 = ?, 
            STUDENT_IMG_1 = ?,
            STUDENT_IMG_2 = ?, 
            STUDENT_IMG_3 = ?, 
            STUDENT_IMG_4 = ?, 
            STUDENT_IMG_5 = ?, 
            STUDENT_IMG_6 = ?, 
            STUDENT_NAME_1 = ?, 
            STUDENT_NAME_2 = ?, 
            STUDENT_NAME_3 = ?, 
            STUDENT_NAME_4 = ?, 
            STUDENT_NAME_5 = ?, 
            STUDENT_NAME_6 = ?
            WHERE COURSE_TYPE_ID = ?";

    // 執行
    $statemant = mySqlConnect()->prepare($sql);

    // 依序填入每個?的值
    $statemant->bindValue(1, $data['formData']['COURSE_TYPE_NAME']);
    $statemant->bindValue(2, $data['formData']['COURSE_INFO']);
    $statemant->bindValue(3, $data['formData']['COURSE_PRICE_INFO']);
    $statemant->bindValue(4, $data['formData']['COURSE_CLASSES_INFO']);
    $statemant->bindValue(5, $data['formData']['COURSE_PARTY_INFO']);

    // 講師作品圖
    $statemant->bindValue(6, $data['formData']['IN_IMG_1']);
	isset($data['formData']['IN_IMG_2']) ? $statemant->bindValue(7, $data['formData']['IN_IMG_2']) : $statemant->bindValue(7, '');
    
    // 學生作品圖
    $statemant->bindValue(8, $data['formData']['STUDENT_IMG_1']);
	isset($data['formData']['STUDENT_IMG_2']) ? $statemant->bindValue(9, $data['formData']['STUDENT_IMG_2']) : $statemant->bindValue(9, '');
	isset($data['formData']['STUDENT_IMG_3']) ? $statemant->bindValue(10, $data['formData']['STUDENT_IMG_3']) : $statemant->bindValue(10, '');
	isset($data['formData']['STUDENT_IMG_4']) ? $statemant->bindValue(11, $data['formData']['STUDENT_IMG_4']) : $statemant->bindValue(11, '');
	isset($data['formData']['STUDENT_IMG_5']) ? $statemant->bindValue(12, $data['formData']['STUDENT_IMG_5']) : $statemant->bindValue(12, '');
	isset($data['formData']['STUDENT_IMG_6']) ? $statemant->bindValue(13, $data['formData']['STUDENT_IMG_6']) : $statemant->bindValue(13, '');
    
    // 學員名
    $statemant->bindValue(14, $data['formData']['STUDENT_NAME_1']);
	isset($data['formData']['STUDENT_NAME_2']) ? $statemant->bindValue(15, $data['formData']['STUDENT_NAME_2']) : $statemant->bindValue(15, '');
	isset($data['formData']['STUDENT_NAME_3']) ? $statemant->bindValue(16, $data['formData']['STUDENT_NAME_3']) : $statemant->bindValue(16, '');
	isset($data['formData']['STUDENT_NAME_4']) ? $statemant->bindValue(17, $data['formData']['STUDENT_NAME_4']) : $statemant->bindValue(17, '');
	isset($data['formData']['STUDENT_NAME_5']) ? $statemant->bindValue(18, $data['formData']['STUDENT_NAME_5']) : $statemant->bindValue(18, '');
	isset($data['formData']['STUDENT_NAME_6']) ? $statemant->bindValue(19, $data['formData']['STUDENT_NAME_6']) : $statemant->bindValue(19, '');
    
    // id
    $statemant->bindValue(20, $data['cid']);
    
    $statemant->execute();

?>