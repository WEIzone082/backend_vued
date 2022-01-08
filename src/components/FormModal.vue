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
                <FormBody :isUpdateButton="isUpdateButton" :isCreateForm="isCreateForm" ref="formBody"/>
                <FormFooter :formInfoButtonName='formInfo.buttonName' @sendFormData="sendFormData"/>
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
    props:['modalId', 'modalTitle', 'modalButtonName', 'formInfo', 'isUpdateButton', 'isCreateForm'],
    data() {
        return {
            trData: {}
        }
    },
    methods: {
        sendFormData(){
            // console.log(123);
            let dataValue = {};

            // 獲取body的資料
            
            // 迭代所有子元件 屬性為資料庫欄位名，值為輸入的 加入物件中
            for (const component of this.$refs.formBody.$children) {
                console.log(component);
                // input
                if (component.fieldName) {
                    // ex: {NAME: 123, WIDTH: 456, ...}
                    dataValue[component.fieldName] = component.inputValue

                // textarea
                }else if(component.aboutTextarea && component.aboutTextarea.fieldName){
                    
                    dataValue[component.aboutTextarea.fieldName] = component.inputValue

                // 上下架切換
                }else if(component.aboutCheck && component.aboutCheck.fieldName){
                    
                    // 判斷上架為1 下架為2
                    if(component.inputValue){
                        dataValue[component.aboutCheck.fieldName] = '1'
                    }else{
                        dataValue[component.aboutCheck.fieldName] = '2'
                    }

                }else if(component.previewImgs){
                    // 獲取圖片檔名
                }
            }
            // 可能把要送出的檔案存在data，在art dispatch比較好寫
            // 要寫兩個php，上傳檔案(成功後)>存入資料庫
            console.log(dataValue);
            // 把資料dispatch出去
        }
    },
};
</script>

<style lang="scss" scoped>

</style>