<template>
    <div class="modal-header create-modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{formInfoTitle}}</h5>
    </div>
</template>

<script>
export default {
    name: 'FormHeader',
    // 表單標題(新增or編輯)
    props:['formInfoTitle']
};
</script>

<style></style>
