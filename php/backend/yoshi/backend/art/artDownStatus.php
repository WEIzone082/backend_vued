<?php

	include('../basic/mySqlConnect.php');

	//---------------------------------------------------
	$request_body = file_get_contents('php://input');
	$deleteArr = json_decode($request_body, true);

	foreach($deleteArr as $i => $trId){
		//建立SQL
		$sql = "UPDATE arts SET STATUS_TYPE = '2' WHERE ARTS_ID = $trId;";
		//執行
		mySqlConnect()->exec($sql);
	}



?>