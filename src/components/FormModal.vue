<template>
    <div
        class="modal fade"
        :id="targetId"
        tabindex="-1"
        aria-labelledby="update-modalLabel"
        aria-hidden="true"
        style="display: none"
    >
        <div class="modal-dialog">
            <div class="modal-content create-modal-content">
                <div class="modal-header create-modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">編輯商品</h5>
                </div>
                <div class="modal-body create-modal-body">
                    <form action="get" class="create-form">
                        <FormInput
                            v-for="(InputTitle, index) in formInputTitle"
                            :key="index"
                            :InputTitle="InputTitle"
                        />
                        <FormTextarea :formTextareaTitle="formTextareaTitle" />
                        <FormCheck :formCheckTitle="formCheckTitle" />
                        <FormImgUpload :formImgUpload="formImgUpload" />
                    </form>
                </div>
                <FormFooter />
            </div>
        </div>
    </div>
</template>

<script>
import FormInput from "./form_modal/FormInput.vue";
import FormTextarea from "./form_modal/FormTextarea.vue";
import FormCheck from "./form_modal/FormCheck.vue";
import FormImgUpload from "./form_modal/FormImgUpload.vue";
import FormFooter from "./form_modal/FormFooter.vue";
export default {
    name: "Modal",
    components: {
        FormInput,
        FormTextarea,
        FormCheck,
        FormImgUpload,
        FormFooter,
    },
    props: ['createTargetId'],
    data() {
        return {
            formInputTitle: '',
            formTextareaTitle: '',
            formCheckTitle: '',
            formImgUpload: '',
            targetId: ''
        }
    },
    mounted() {
        this.$bus.$on("sendFormData", (...data) => {
            this.formInputTitle = data[0];
            this.formTextareaTitle = data[1];
            this.formCheckTitle = data[2];
            this.formImgUpload = data[3];
            this.targetId = data[4];
        });
    },
    beforeDestroy() {
        this.$bus.$off("sendFormData");
    },
};
</script>

<style></style>
