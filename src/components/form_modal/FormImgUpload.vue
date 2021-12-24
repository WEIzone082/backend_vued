<template>
    <div class="img-upload-wrapper">
        <span class="img-title">{{formImgUpload.imgUploadTitle}}</span>
        <div class="upload-content-wrapper">
            <ImgUploadItem v-for="(item, index) in formImgUpload.ImgUploadCount" :key="index"/>
        </div>
    </div>
</template>

<script>
import ImgUploadItem from './ImgUploadItem.vue'
export default {
    name: "FormImgUpload",
    props: ["formImgUpload"],
    components: {ImgUploadItem},
};
</script>

<style></style>
