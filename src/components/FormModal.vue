<template>
    <div
        class="modal fade"
        :id="formInfo.targetId"
        tabindex="-1"
        aria-labelledby="update-modalLabel"
        aria-hidden="true"
        style="display: none"
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
            trData: {}
        }
    },
    methods: {
        sendFormData(){
            // console.log(123);
            let dataValue = {};
            let formData = new FormData();

            // 獲取body的資料
            
            // 迭代所有子元件 屬性為資料庫欄位名，值為輸入的 加入物件中
            for (const component of this.$refs.formBody.$children) {
                // console.log(component);
                // input
                if (component.fieldName) {

                    // 判斷是否有空值
                    // if (this.valueIsNull(component.inputValue)) return

                    // 存入input值 ex: {NAME: 123, WIDTH: 456, ...}
                    dataValue[component.fieldName] = component.inputValue

                // textarea
                }else if(component.aboutTextarea && component.aboutTextarea.fieldName){
                    
                    // 判斷是否有空值
                    // if (this.valueIsNull(component.inputValue)) return

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

                    // 判斷是否有空值
                    // if (!keyArr.length) {
                    //     alert('至少上傳一張圖片');
                    //     return
                    // }

                    // 將檔名依序給欄位
                    for (let i = 0; i < keyArr.length; i++) {
                        dataValue[component.aboutUpload.fieldName[i]] = keyArr[i];
                    }

                    for (let i = 0; i < component.$refs.uploader.files.length; i++) {
                        formData.append('test[]', component.$refs.uploader.files[i]);
                    }
                    console.log(component.$refs.uploader);
                }
            }
            // 可能把要送出的檔案存在data，在art dispatch比較好寫
            // 要寫兩個php，上傳檔案(成功後)>存入資料庫
            // console.log(dataValue);
            console.log(formData);
            // 把資料dispatch出去

            
            // console.log(this.$refs.formBody);
            // formData.append('file', this.$refs.formBody)
        },
        valueIsNull(value){
            if(!value){
                alert('欄位尚未填寫');
                return true;
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>