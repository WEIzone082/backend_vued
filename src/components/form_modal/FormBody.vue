<template>
    <div class="modal-body create-modal-body">
        <form action="get" class="create-form">
            <div class="form-floating mb-3" v-if="isUpdateButton">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label for="floatingInput" class="input-group-text">{{idInputTitle}}</label>
            </div>
            <FormInput 
                v-for="(title, fieldName) in inputTitles" 
                :key="fieldName" 
                :title = 'title' 
                ref="formInput"
                :fieldName='fieldName'
            />
            <FormTextarea 
                :aboutTextarea='aboutTextarea' 
                v-if="!courseFromData"
            />
            <FormCheck :aboutCheck='aboutCheck'/>
            <FormImgUpload 
                v-if="!courseFromData" 
                :formImgUpload="formImgUpload" 
                :isCreateForm="isCreateForm"
            />
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
    props: ['isUpdateButton', 'isCreateForm'],
    data() {
        return {
            // 共通元件的樣式資料
            inputTitles: {},
            aboutTextarea: {},
            aboutCheck: {},
            formImgUpload: '',
            courseFromData: '',
            idInputTitle: '',
            trData: {},
        }
    },
    mounted() {
        // 共通元件樣式資料傳遞
        this.$bus.$on("formData", (formData) => {
            this.inputTitles = formData.inputTitles;
            this.aboutTextarea = formData.aboutTextarea;
            this.aboutCheck = formData.aboutCheck;
            this.formImgUpload = formData.imgUpload;
            this.idInputTitle = formData.idInputTitle
        });
        this.$bus.$on("courseFromData", (data) => {this.courseFromData = data;});
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

</style>
