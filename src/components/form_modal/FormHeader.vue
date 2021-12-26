<template>
    <div class="modal-header create-modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{formInfoTitle}}</h5>
    </div>
</template>

<script>
export default {
    name: 'FormHeader',
    props:['formInfoTitle']
};
</script>

<style></style>
