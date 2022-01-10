<template>
    <section class="content-section">
        <div class="page-nav">
            <div class="left-contents">
                <div class="page-name">
                    <router-link :to="{name:'course'}" class="return-link">
                        <i class="bi bi-chevron-left"></i>
                    </router-link>
                    <p>手捏器皿</p>
                </div>
            </div>
        </div>

        <div class="course-content-wrap">
            <div class="header-title">課程內容</div>
            <form class="content-form">
                <!-- 上架 -->
                <div class="form-check form-switch">
                    <span>課程上架</span>
                    <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                </div>
                
                <div class="input-wrap">
                    <!-- input -->
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInput" class="input-group-text">暫時</label>
                    </div>
                    <!-- textarea -->
                    <div class="form-floating form-floating-textarea">
                        <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style="height: 100px"
                        ></textarea>
                        <label for="floatingTextarea2" class="input-group-text">課程說明</label>
                    </div>
                </div>
                <!-- 講師作品 -->
                <div class="up-upload-wrap">
                    <div class="img-upload-wrapper">
                        <span class="img-title">講師作品照</span>
                        <span class="img-limit">最多 2 張</span>
                        <div class="upload-content-wrapper">
                            <label class="upload_cover">
                                <input 
                                    id="upload_input" 
                                    type="file" 
                                    multiple
                                    ref="uploader"
                                />
                                <span class="addText">+ 加入圖片</span>
                                    <div class="img-wrapper">
                                        <!-- <i class="bi bi-x-circle-fill"></i> -->
                                        <!-- <img src="#" class="upImg"> -->
                                    </div>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- 學員作品 -->
                <div class="student-upload-wrap">
                    <div class="img-upload-wrapper">
                        <span class="img-title">學員作品照</span>
                        <span class="img-limit">最多 6 張</span>
                        <div class="upload-content-wrapper">
                            <label class="upload_cover">
                                <input 
                                    id="upload_input" 
                                    type="file" 
                                    multiple
                                    ref="uploader"
                                />
                                <span class="addText">+ 加入圖片</span>
                                    <div class="img-wrapper">
                                        <!-- <i class="bi bi-x-circle-fill"></i> -->
                                        <!-- <img src="#" class="upImg"> -->
                                    </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="student-name-wrapper">

                </div>
            </form>
        </div>
    </section>
</template>

<script>
import FormCheck from '../form_modal/FormCheck.vue';
import FormInput from '../form_modal/FormInput.vue';
import FormTextarea from '../form_modal/FormTextarea.vue';
import FormImgUpload from '../form_modal/FormImgUpload.vue';
export default {
    name: 'FromSection',
    components: {FormCheck, FormInput, FormTextarea, FormImgUpload},
    props:['courseFromData']
}
</script>

<style lang="scss" scoped>

    .content-section {
        margin-bottom: 50px;
        width: 100%;
    }

    .page-nav{
        margin: 5px 0;
    }

    .page-name {
        display: flex;

        .return-link {
            display: block;
            width: 32px;
            height: 32px;
            border: 1px solid #E2E2EA;
            border-radius: 8px;
            margin-right: 10px;
            text-align: center;
            align-self: center;
            transform: translateY(-4px);

            .bi-chevron-left {
                color: #92929D;
                font-size: 20px;
                line-height: 32px;
            }
        }

        &>p{
            font-size: 24px;
            font-weight: 500;
        }
    }

    .course-content-wrap {
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
        background-color: white;
        border-radius: 10px;

        .header-title {
            font-weight: normal;
            font-size: 20px;
        }
    }

    .content-form {

        .form-check {
            transform: translateY(-15px);
            justify-content: flex-end;
        }


        .up-upload-wrap {
            display: flex;
            margin-bottom: 20px;
        }

    }

    .up-upload-wrap{

        &>.img-upload-wrapper{
            width: 20%;
        }
    }
    .student-upload-wrap{

        &>.img-upload-wrapper{
            width: 60%;
        }
    }
    .img-upload-wrapper{
        width: 100%;
        margin-top: 20px;
        width: 100%;
    }

    .img-limit{
        float: right;
    }

    .upload_cover {
        display: inline-block;
        position: relative;
        width: 100%;
        min-height: 110px;
        text-align: center;
        cursor: pointer;
        background: #F8F8F8;
        border: 1px dashed #979797;
        border-radius: 4px;
        margin-top: 5px;
        margin-right: 5px;

        display: flex;

        #upload_input {
            display: none;
        }

        .addText{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

        .img-wrapper{
            width: 23%;
            position: relative;
            z-index: 100;

            .bi-x-circle-fill{
                position: absolute;
                right: 0;

                &:hover{
                    opacity: 0.7;
                }
            }
            .upImg{
                width: 90%;
                margin: 5px;
            }

        }
    }
</style>