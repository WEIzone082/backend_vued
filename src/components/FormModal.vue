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
    props:['formInfo', 'isUpdateButton', 'isCreateForm'],
    data() {
        return {
            // 可上傳的檔案類型
            allowFileType: ['jpg', 'jpeg', 'png', 'gif' ],
            // 要上傳的檔案
            createFormFile: {},
            // 要存入資料庫的資料
            createFormValue: {},
        }
    },
    methods: {
        // 取得新增表單的內容
        sendFormData(){
            let dataValue = {};
            let formData = new FormData();

            // 獲取新增表單的資料
            
            // 迭代所有子元件 屬性為資料庫欄位名，值為輸入的 加入物件中
            for (const component of this.$refs.formBody.$children) {
                // input
                if (component.fieldName) {

                    // 判斷是否有空值
                    if (this.valueIsNull(component.inputValue)) return

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

                    // 判斷是否有上傳圖片
                    if (!keyArr.length) {
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

            // 印出formdata裡有的檔案
            // for (const key of formData.entries()) {
            //     console.log(key);
            // }
            // 印出存入的值
            // console.log(dataValue);

            // 將最終資料存入data
            this.createFormFile = formData;
            this.createFormValue = dataValue;
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
        }
    },
    watch:{
        // 偵測儲存檔案的data變動 存完傳給page_nav
        createFormFile(){
            this.$emit('sendCreateData', this.createFormFile, this.createFormValue)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>