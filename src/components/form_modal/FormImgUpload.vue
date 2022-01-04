<template>
    <div class="img-upload-wrapper">
        <span class="img-title">{{formImgUpload || courseFromData}}</span>
        <div class="upload-content-wrapper">
            <label class="upload_cover">
                <input id="upload_input" type="file" multiple="multiple"/>
                <span class="upload_icon">+加入圖片</span>
                <i class="delAvatar fa fa-times-circle-o" title="刪除"></i>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormImgUpload",
    props: ['courseFromData', 'formImgUpload'],
};
</script>

<style lang="scss" scoped>
    .img-upload-wrapper {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;

        .img-title{
            font-size: 1rem;
            font-weight: normal;
        }

        .upload-content-wrapper{
            width: 100%;

            .upload_cover{
                width: 100%;
            }
        }
    }
</style>
