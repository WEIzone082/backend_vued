<template>
    <div class="img-upload-wrapper">
        <span class="img-title">上傳照片</span>
        <div class="upload-content-wrapper">
            <label class="upload_cover">
                <input id="upload_input" type="file" />
                <span class="upload_icon">+加入圖片</span>
                <i class="delAvatar fa fa-times-circle-o" title="刪除"></i>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormImgUpload",
};
</script>

<style></style>
