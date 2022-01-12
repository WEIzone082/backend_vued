<template>
    <div
        class="modal fade"
        :id="formInfo.targetId"
        tabindex="-1"
        aria-labelledby="update-modalLabel"
        aria-hidden="true"
        style="display: none"
        ref="fm"
    >
        <div class="modal-dialog">
            <div class="modal-content create-modal-content">
                <FormHeader :formInfoTitle='formInfo.title'/>
                <FormBody 
                    :isUpdateButton="isUpdateButton" 
                    :isCreateForm="isCreateForm" 
                    ref="formBody"
                />
                <FormFooter 
                    :formInfoButtonName='formInfo.buttonName' 
                    @sendFormData="sendFormData"
                />
            </div>
        </div>
    </div>
</template>

<script>

import FormHeader from "./form_modal/FormHeader.vue";
import FormBody from "./form_modal/FormBody.vue";
import FormFooter from "./form_modal/FormFooter.vue";
export default {
    name: "Modal",
    components: {
        FormHeader,
        FormBody,
        FormFooter,
    },
    // 新增彈窗header...(page_nav)、是否為編輯按鈕、是否為新增表單(page_nav)
    props:['formInfo', 'isUpdateButton', 'isCreateForm', 'tableBodyData'],
    data() {
        return {
            // 可上傳的檔案類型
            allowFileType: ['jpg', 'jpeg', 'png', 'gif' ],
            // 要上傳的檔案
            createFormFile: {},
            // 要存入資料庫的資料
            formValue: {},
        }
    },
    methods: {
        // 取得新增表單的內容
        sendFormData(formInfoButtonName){
            let dataValue = {};
            let formData = new FormData();
            // 獲取新增表單的資料

            // 存入ID 及圖片(暫時)
            if(this.$refs.formBody.$refs.idInput){

                dataValue[this.$refs.formBody.aboutId.fieldName] = this.$refs.formBody.$refs.idInput.value;
                
                // 要先判斷是否有body資料(若沒有課程編輯會報錯)
                if(this.tableBodyData){
                    // 迭代裝tr的陣列
                    for (const tr of this.tableBodyData) {
                        
                        // 當tr的id 與 彈窗上顯示的相等 (即找到所點的那筆tr)
                        if(tr[this.$refs.formBody.aboutId.fieldName] === this.$refs.formBody.$refs.idInput.value){
    
                            // 迭代該筆tr物件
                            for (const fieldName in tr) {
                                
                                // 若欄位名有img
                                if (fieldName.indexOf('_IMG')) {
                                    // 將檔案名稱存入物件
                                    dataValue[fieldName] = tr[fieldName];
                                }
                            }
                        }
                    }
                }
            }
            // 迭代所有子元件 屬性為資料庫欄位名，值為輸入的 加入物件中
            for (const component of this.$refs.formBody.$children) {
                // input
                if (component.fieldName) {

                    // 判斷是否有空值
                    if (this.valueIsNull(component.inputValue)) return

                    // 判斷欄位資料型態(若為int型態則進入)
                    if (this.dataTypeCheck(component.fieldName)) {
                        // 若無法轉為int則跳出警告
                        if(!parseInt(component.inputValue)){
                            return alert('價格、人數、堂數須為數字');
                        }
                    }
                    // 存入input值 ex: {NAME: 123, WIDTH: 456, ...}
                    dataValue[component.fieldName] = component.inputValue


                // textarea
                }else if(component.aboutTextarea && component.aboutTextarea.fieldName){
                    
                    // 判斷是否有空值
                    if (this.valueIsNull(component.inputValue)) return

                    // 存入textarea值
                    dataValue[component.aboutTextarea.fieldName] = component.inputValue

                // 上下架切換
                }else if(component.aboutCheck && component.aboutCheck.fieldName){
                    
                    // 判斷上架為1 下架為2
                    if(component.inputValue){
                        dataValue[component.aboutCheck.fieldName] = '1'
                    }else{
                        dataValue[component.aboutCheck.fieldName] = '2'
                    }

                // 圖片檔名
                }else if(component.previewImgs){
                    let keyArr = [];

                    // 將檔名存在陣列
                    for (const key in component.previewImgs) {
                        keyArr.push(key)
                    }

                    // 判斷是否有上傳圖片 且 要是新增
                    if (!keyArr.length && formInfoButtonName.indexOf('新增') !== -1) {
                        return alert('至少上傳一張圖片');
                    }

                    // 將檔名依序給欄位
                    for (let i = 0; i < keyArr.length; i++) {
                        dataValue[component.aboutUpload.fieldName[i]] = keyArr[i];
                    }

                    // 上傳圖檔用
                    for (let i = 0; i < component.$refs.uploader.files.length; i++) {
                        // 判斷檔案格式
                        if(!this.checkFileType(component.$refs.uploader.files[i].type)){
                            return alert('檔案格式錯誤');
                        } 

                        // 將檔案存入formdata物件 (上傳檔案用)
                        formData.append(`imgData${i}`, component.$refs.uploader.files[i]);
                    }
                }
            }

            // 課程管理判斷是否下拉選單有選擇
            // 若能找到下拉選單
            if(this.$refs.formBody.$refs.statusSelect){
                // 將選擇的存起來
                let selectValue = this.$refs.formBody.$refs.statusSelect.value;
                // 如果有選
                if(selectValue){
                    // 則將所選的存入物件
                    dataValue['STATUS_TYPE'] = selectValue;
                }else if(!selectValue){
                    return alert('尚未選擇課程狀態');
                }
            }
            // console.log(this.tableBodyData);


            // 印出formdata(所上傳的圖片)裡有的檔案
            // for (const key of formData.entries()) {
            //     console.log(key);
            // }
            // 印出存入的值
            // console.log(dataValue);

            // 將最終資料存入data
            this.createFormFile = formData;
            this.formValue = dataValue;
        },
        // 判斷是否為空值
        valueIsNull(value){
            if(!value){
                alert('欄位尚未填寫');
                return true;
            }
        },
        //  判斷是否為可上傳的檔案類型
        checkFileType(fileType){
            let flag = false;
            for (const type of this.allowFileType) {

                if(fileType.indexOf(type) !== -1){
                    flag = true;
                    break;
                }
            }
            return flag;
        },
        // 清空表單
        clearForm(){

            for (const component of this.$refs.formBody.$children) {
                // input
                if (component.fieldName) {

                    // 判斷是否有空值
                    component.inputValue = '';

                // textarea
                }else if(component.aboutTextarea && component.aboutTextarea.fieldName){
                    
                    // 判斷是否有空值
                    component.inputValue = '';

                // 上下架切換
                }else if(component.aboutCheck && component.aboutCheck.fieldName){
                    
                    // 判斷上架為1 下架為2
                    component.inputValue = false;

                // 圖片檔名
                }else if(component.previewImgs){
                    component.urlArr = [];
                    component.previewImgs = {};
                }
            }
        },
        // 判斷需要填入數字的
        dataTypeCheck(fieldName){
            switch (fieldName) {
                case 'COURSE_PARTY':
                case 'COURSE_PRICE':
                case 'COURSE_CLASSES':
                    return true;
                default:
                    return false;
            }

        }
    },
    watch:{
        // 偵測儲存檔案的data變動 存完傳給page_nav
        createFormFile(){
            this.$emit('sendCreateData', this.createFormFile, this.formValue)
        },
        // 送出編輯資料(暫時)
        formValue(){
            this.$emit('sendUpdateValue', this.formValue)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>