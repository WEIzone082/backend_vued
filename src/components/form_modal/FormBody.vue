<template>
    <div class="modal-body create-modal-body">
        <form action="get" class="create-form">
            <FormInput v-for="(title, index) in inputTitles" :key="index" :title = 'title'/>
            <FormTextarea :textareaTitle='textareaTitle' v-if="!courseFromData"/>
            <FormCheck :checkTitle='checkTitle'/>
            <FormImgUpload v-if="!courseFromData" :formImgUpload="formImgUpload"/>
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
    data() {
        return {
            inputTitles: {},
            textareaTitle: '',
            checkTitle: '',
            formImgUpload: '',
            courseFromData: '',
            trData: {}
        }
    },
    mounted() {
        this.$bus.$on("formData", (formData) => {
            this.inputTitles = formData.inputTitles;
            this.textareaTitle = formData.textareaTitle;
            this.checkTitle = formData.checkTitle;
            this.formImgUpload = formData.imgUpload;
        });
        this.$bus.$on("courseFromData", (data) => {this.courseFromData = data;});
        this.$bus.$on("trData", (trData) => {this.trData = trData;});
    },
    beforeDestroy() {
        this.$bus.$off("formData");
        this.$bus.$off("courseFromData");
    },
};
</script>

<style lang="scss" scoped>

</style>
