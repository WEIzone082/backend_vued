<template>
    <div class="modal-body create-modal-body">
        <form action="get" class="create-form">
            <FormInput v-for="(title, index) in inputTitles" :key="index" :title = 'title'/>
            <FormTextarea :textareaTitle='textareaTitle'/>
            <FormCheck :checkTitle='checkTitle'/>
            <FormImgUpload />
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
    props: [""],
    data() {
        return {
            inputTitles: [],
            textareaTitle: '',
            checkTitle: '',
        }
    },
    mounted() {
        this.$bus.$on("formInputTitle", (data) => {this.inputTitles = data;});
        this.$bus.$on("formTextareaTitle", (data) => {this.textareaTitle = data;});
        this.$bus.$on("formCheckTitle", (data) => {this.checkTitle = data;});
    },
    beforeDestroy() {
        this.$bus.$off("formInputTitle");
        this.$bus.$off("formTextareaTitle");
        this.$bus.$off("formCheckTitle");
    },
};
</script>

<style></style>
