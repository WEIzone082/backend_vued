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
                <FormCheck :checkTitle="courseFromData.formCheckTitle"/>
                <div class="input-wrap">
                    <FormInput v-for="(title, index) in courseFromData.courseInputTitle" :key="index" :title="title"/>
                    <FormTextarea :textareaTitle="courseFromData.formTextareaTitle"/>
                </div>
                <div class="up-upload-wrap">
                    <FormImgUpload :courseFromData="courseFromData.scheduleImageTitle"/>
                    <FormImgUpload :courseFromData="courseFromData.teacherImageTitle"/>
                </div>
                <div class="student-upload-wrap">
                    <FormImgUpload :courseFromData="courseFromData.studentImageTitle"/>
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

    &>.img-upload-wrapper:nth-child(1){
        width: 10%;
        margin-right: 42%;
    }
    &>.img-upload-wrapper:nth-child(2){
        width: 20%;
    }
}
.student-upload-wrap{

    &>.img-upload-wrapper{
        width: 60%;
    }
}
// .img-upload-wrapper{
//     width: 10%;

//     .upload-content-wrapper{
//         width: 10%;

//         .upload_cover{
//             width: 10%;
//         }
//     }
// }
</style>