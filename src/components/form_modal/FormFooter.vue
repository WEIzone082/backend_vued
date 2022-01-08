<template>
    <div class="modal-footer create-modal-footer">
        <button type="button" class="btn cancel-btn" data-bs-dismiss="modal">
            取消
        </button>
        <button type="button" class="btn confirm-btn" @click="callSend">{{formInfoButtonName}}</button>
    </div>
</template>

<script>
export default {
    name: "FormFooter",
    props: ["formInfoButtonName"],
    methods: {
        // 點了送出呼叫FM的方法
        callSend(){
            this.$emit('sendFormData');
        }
    },
};
</script>

<style></style>
