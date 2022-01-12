<template>
    <div class="modal-body create-modal-body">
        <form action="get" class="create-form">
            <div class="form-floating mb-3" v-if="isUpdateButton">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    disabled
                    ref="idInput"
                />
                <label for="floatingInput" class="input-group-text">{{aboutId.title}}</label>
            </div>
            <FormInput 
                v-for="(title, fieldName) in inputTitles" 
                :key="fieldName" 
                :title='title'
                ref="formInput"
                :fieldName='fieldName'
            />
            <FormTextarea 
                :aboutTextarea='aboutTextarea' 
                v-if="!courseFromData"
            />
            <FormCheck :aboutCheck='aboutCheck' v-if="!courseFromData"/>
            <FormImgUpload 
                v-if="!courseFromData" 
                :aboutUpload="aboutUpload" 
                :isCreateForm="isCreateForm"
            />
            <select 
                class="form-select" 
                aria-label="Default select example" 
                v-if="courseFromData" 
                ref="statusSelect"
                v-model="selectValue"
            >
                <option selected disabled>課程狀態</option>
                <option value="1">上架</option>
                <option value="2">下架</option>
                <option value="3">已額滿</option>
            </select>
        </form>
    </div>
</template>

<script>
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";
import FormCheck from "./FormCheck.vue";
import FormImgUpload from "./FormImgUpload.vue";
export default {
    name: "FormBody",
    components: { FormInput, FormTextarea, FormCheck, FormImgUpload },
    // 是否為編輯按鈕、是否為新增表單(page_nav)
    props: ['isUpdateButton', 'isCreateForm'],
    data() {
        return {
            // 共通元件的樣式資料

            // input名稱 欄位名: 名稱(值)
            inputTitles: {},
            // textarea
            aboutTextarea: {},
            // 上下架切換
            aboutCheck: {},
            // 上傳圖片標題
            aboutUpload: '',
            // id input框標題(編輯表單用)
            aboutId: {},
            // 課程下拉選單
            selectValue: '',

            
            courseFromData: '',
            trData: {},
        }
    },
    mounted() {
        // 共通元件樣式資料傳遞(from views)
        this.$bus.$on("formData", (formData) => {
            this.inputTitles = formData.inputTitles;
            this.aboutTextarea = formData.aboutTextarea;
            this.aboutCheck = formData.aboutCheck;
            this.aboutUpload = formData.aboutUpload;
            this.aboutId = formData.aboutId
        });
        // 
        this.$bus.$on("courseFromData", (data) => {this.courseFromData = data;});
        // 
        this.$bus.$on("trData", (trData) => {this.trData = trData;});
    },
    beforeDestroy() {
        this.$bus.$off("formData");
        this.$bus.$off("courseFromData");
        this.$bus.$off("trData");
    },
};
</script>

<style lang="scss" scoped>
    .form-select{
        width: 48%;
        margin-bottom: 20px;
    }
</style>
