<?php
    //Web根目錄真實路徑, ex: C:/XAMPP/htdocs
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    $filesArr = [];
    
    // 將傳來的檔案存入陣列中
    for ($i=0; $i < 4; $i++) { 
        if(isset($_FILES["imgData$i"])){
            array_push($filesArr, $_FILES["imgData$i"]);
        }
    }

    // echo json_encode($filesArr);
    for ($i=0; $i < count($filesArr); $i++) { 
        // Server上的暫存檔路徑含檔名
        $filePath_Temp = $filesArr[$i]['tmp_name'];

        // 檔案最終存放位置
        $filePath = $ServerRoot."/backend/yoshi/backend/fileUpload/".$filesArr[$i]['name'];

        // 錯誤代碼
        $error_arr = $filesArr[$i]["error"];

        //判斷是否上傳成功
        if($error_arr === 0){
            // echo json_encode($filePath_Temp);
            // echo json_encode($filePath);
            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);
        }
    }

    echo "上傳成功";

?>
