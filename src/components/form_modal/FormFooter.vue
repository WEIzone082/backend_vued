<template>
    <div class="modal-footer create-modal-footer">
        <button type="button" class="btn cancel-btn" data-bs-dismiss="modal">
            取消
        </button>
        <button type="button" class="btn confirm-btn">{{formInfoButtonName}}</button>
    </div>
</template>

<script>
export default {
    name: "FormFooter",
    props: ["formInfoButtonName"],
};
</script>

<style></style>
