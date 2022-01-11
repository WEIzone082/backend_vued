<template>
    <section class="content-section">
        <div class="page-nav">
            <div class="left-contents">
                <div class="page-name">
                    <router-link :to="{name:'course'}" class="return-link">
                        <i class="bi bi-chevron-left"></i>
                    </router-link>
                    <p>{{COURSE_TYPE_NAME}}</p>
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
                <!-- inputs textarea -->
                <div class="input-wrap">
                    <!-- input -->
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            v-model="formData.COURSE_TYPE_NAME"
                        />
                        <label for="floatingInput" class="input-group-text">{{courseFromData.inputTitles.COURSE_TYPE_NAME}}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            v-model="formData.COURSE_PRICE_INFO"
                        />
                        <label for="floatingInput" class="input-group-text">{{courseFromData.inputTitles.COURSE_PRICE_INFO}}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            v-model="formData.COURSE_CLASSES_INFO"
                        />
                        <label for="floatingInput" class="input-group-text">{{courseFromData.inputTitles.COURSE_CLASSES_INFO}}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            v-model="formData.COURSE_PARTY_INFO"
                        />
                        <label for="floatingInput" class="input-group-text">{{courseFromData.inputTitles.COURSE_PARTY_INFO}}</label>
                    </div>

                    <!-- textarea -->
                    <div class="form-floating form-floating-textarea">
                        <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style="height: 100px"
                            v-model="formData.COURSE_INFO"
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
                                    @change="fileChange"
                                />
                                <span class="addText" v-if="tSpanIsShow">+ 加入圖片</span>
                                <div class="img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.IN_IMG_1)"></i>
                                    <img :src="require('../../assets/img/'+ formData.IN_IMG_1)" class="upImg">
                                </div>
                                <div class="img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.IN_IMG_2)"></i>
                                    <img :src="require(`../../assets/img/${formData.IN_IMG_2}`)" class="upImg">
                                </div>
                                <div class="img-wrapper" v-for="(url, index) in urlArr" :key="index">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.IN_IMG_2)"></i>
                                    <img :src="url" class="upImg">
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
                                <span class="addText" v-show="sSpanIsShow">+ 加入圖片</span>
                                <div class="student-img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.STUDENT_IMG_1)"></i>
                                    <img :src="require(`../../assets/img/${formData.STUDENT_IMG_1}`)" class="upImg">
                                </div>
                                <div class="student-img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.STUDENT_IMG_2)"></i>
                                    <img :src="require(`../../assets/img/${formData.STUDENT_IMG_2}`)" class="upImg">
                                </div>
                                <div class="student-img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.STUDENT_IMG_3)"></i>
                                    <img :src="require(`../../assets/img/${formData.STUDENT_IMG_3}`)" class="upImg">
                                </div>
                                <div class="student-img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.STUDENT_IMG_4)"></i>
                                    <img :src="require(`../../assets/img/${formData.STUDENT_IMG_4}`)" class="upImg">
                                </div>
                                <div class="student-img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.STUDENT_IMG_5)"></i>
                                    <img :src="require(`../../assets/img/${formData.STUDENT_IMG_5}`)" class="upImg">
                                </div>
                                <div class="student-img-wrapper">
                                    <i class="bi bi-x-circle-fill" @click.prevent="removeImg($event, formData.STUDENT_IMG_6)"></i>
                                    <img :src="require(`../../assets/img/${formData.STUDENT_IMG_6}`)" class="upImg">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- 學員名稱 -->
                <div class="student-name-wrapper">
                    <div 
                        class="form-floating mb-3 student-floating" >
                        <input 
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="formData.STUDENT_NAME_1"
                        >
                        <label for="floatingInput" class="student-lab">{{courseFromData.aboutStudentUpload.STUDENT_NAME_1}}</label>
                    </div>
                    <div 
                        class="form-floating mb-3 student-floating" >
                        <input 
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="formData.STUDENT_NAME_2"
                        >
                        <label for="floatingInput" class="student-lab">{{courseFromData.aboutStudentUpload.STUDENT_NAME_2}}</label>
                    </div>
                    <div 
                        class="form-floating mb-3 student-floating" >
                        <input 
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="formData.STUDENT_NAME_3"
                        >
                        <label for="floatingInput" class="student-lab">{{courseFromData.aboutStudentUpload.STUDENT_NAME_3}}</label>
                    </div>
                    <div 
                        class="form-floating mb-3 student-floating" >
                        <input 
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="formData.STUDENT_NAME_4"
                        >
                        <label for="floatingInput" class="student-lab">{{courseFromData.aboutStudentUpload.STUDENT_NAME_4}}</label>
                    </div>
                    <div 
                        class="form-floating mb-3 student-floating" >
                        <input 
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="formData.STUDENT_NAME_5"
                        >
                        <label for="floatingInput" class="student-lab">{{courseFromData.aboutStudentUpload.STUDENT_NAME_5}}</label>
                    </div>
                    <div 
                        class="form-floating mb-3 student-floating" >
                        <input 
                            type="email" 
                            class="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com"
                            v-model="formData.STUDENT_NAME_6"
                        >
                        <label for="floatingInput" class="student-lab">{{courseFromData.aboutStudentUpload.STUDENT_NAME_6}}</label>
                    </div>
                </div>

                <button type="button" class="btn btn-submit">儲存編輯</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FromSection',
    components: {},
    props:['courseFromData', 'COURSE_TYPE_NAME', 'COURSE_TYPE_ID', 'useAPI'],
    data() {
        return {
            // form的資料
            formData: {
                COURSE_CLASSES_INFO: "",
                COURSE_INFO: "",
                COURSE_PARTY_INFO: "",
                COURSE_PRICE_INFO: "",
                COURSE_TYPE_ID: "",
                COURSE_TYPE_NAME: "",
                IN_IMG_1: "",
                IN_IMG_2: "",
                STUDENT_IMG_1: "",
                STUDENT_IMG_2: "",
                STUDENT_IMG_3: "",
                STUDENT_IMG_4: "",
                STUDENT_IMG_5: "",
                STUDENT_IMG_6: "",
                STUDENT_NAME_1: "",
                STUDENT_NAME_2: "",
                STUDENT_NAME_3: "",
                STUDENT_NAME_4: "",
                STUDENT_NAME_5: "",
                STUDENT_NAME_6: ""
            },
            tSpanIsShow: false,
            sSpanIsShow: false,
            urlArr: []
        }
    },
    methods: {
        // 重新獲取資料庫資料
        refresh(){
            this.$store.dispatch('course_update/displayFormAPI', {
                apiPath: this.useAPI.displayFormAPI, 
                cid: this.COURSE_TYPE_ID
            }).then(() => {
                this.formData = this.$store.getters['course_update/getFormData']
            })
        },
        // 刪除圖片
        removeImg(e, imgName){

            // 把data裡的圖檔名稱改為空值
            for (const fieldName in this.formData) {
                if(this.formData[fieldName] === imgName){
                    this.formData[fieldName] = ''
                }
            }
            // 把頁面上預覽的圖刪掉
            e.target.parentNode.remove()


            if(!this.getCurrentImgCount('t')){
                this.tSpanIsShow = true;
            }else if(!this.getCurrentImgCount('s')){
                this.sSpanIsShow = true;
            }

        },
        fileChange(event){
            // input 本身
            let input = event.target;
            // 檔案的陣列
            let imgs = input.files;
            // 圖片上傳張數上限
            let imgLimitCount = 0;
            // 目前已有幾張圖
            let currentImgCount = 0;
            let canUploadCount = 0;

            for (const fieldName in this.formData) {
                // 若為講師做品
                if(fieldName.indexOf('IN_IMG_') !== -1){
                    // 計算圖片上傳張數上限
                    imgLimitCount++

                    // 
                    currentImgCount = this.getCurrentImgCount('t');
                }
            }

            // 還能上傳幾張
            canUploadCount = imgLimitCount - currentImgCount

            // 判斷是否有超出張數限制
            if(imgs.length <= canUploadCount){
                for (let i = 0; i < imgs.length; i++) {
                    // 建立FileReader物件
                    let reader = new FileReader();
                    // 當讀取完成
                    reader.onload = (e) => {
                        // 將讀取結果存入陣列 (e.target為FileReader本身)
                        this.urlArr.push(e.target.result);
                        // 檔名: url
                    }
                    // 將檔名存入陣列
                    // this.imageName.push(input.files[i].name);
                    reader.readAsDataURL(input.files[i]);
                }
            }else{
                alert('超出張數限制')
            }
        },
        // 取得目前有幾張圖
        getCurrentImgCount(who){
            // 目前已有幾張圖
            let currentTeacherImgCount = 0;
            let currentStudentImgCount = 0;
            for (const fieldName in this.formData) {
                switch (who) {
                    case 't':{
                        if(fieldName.indexOf('IN_IMG_') !== -1){
                            if(this.formData[fieldName]){
                                currentTeacherImgCount++
                            }
                        }
                        break;
                    }
                    case 's':{
                        if(fieldName.indexOf('STUDENT_IMG_') !== -1){
                            if(this.formData[fieldName]){
                                currentStudentImgCount++
                            }
                        }
                        break;
                    }
                }
            }

            switch (who) {
                case 't': return currentTeacherImgCount;
                case 's': return currentStudentImgCount;
            }
        }
    },
    created() {
        // 發出ajax請求
        this.refresh();
    },
}
</script>

<style lang="scss" scoped>

    // 整個form區塊
    .content-section {
        margin-bottom: 50px;
        width: 100%;
    }

    // 標題
    .page-nav{
        margin: 5px 0;
    }

    // 頁面標題
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

    // 整個內容區塊
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

        .form-control{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            background-color: #F9F9F9 !important;
            border: 1px solid #F3F3F3;
            outline: none;
            font-size: 1rem;
        }
    }

    // 
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

    // 講師作品上傳區塊大小
    .up-upload-wrap{

        &>.img-upload-wrapper{
            width: 25%;
        }
    }

    // 學生作品上傳區塊大小
    .student-upload-wrap{

        &>.img-upload-wrapper{
            width: 70%;
        }
    }

    // 上傳區塊
    .img-upload-wrapper{
        width: 100%;
        margin-top: 20px;
        width: 100%;

        .img-title{
            font-weight: 400;
        }
    }

    // 上傳幾張
    .img-limit{
        float: right;
    }

    // 學員名稱
    .student-name-wrapper{
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .student-floating{
            box-sizing: border-box;
            width: 32%;
            margin-bottom: 20px;
            overflow: hidden;

            .student-lab{
                background-color: #F9F9F9 !important;
                border: 1px solid transparent;
                width: 100%;
                height: 5px;
                font-weight: 400;
            }
        }
    }

    // 上傳圖片
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

        // input
        #upload_input {
            display: none;
        }

        // 加入圖片的文字
        .addText{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

        // 圖片外層
        .img-wrapper{
            width: 45%;
            position: relative;
            z-index: 100;

            // 上面的X
            .bi-x-circle-fill{
                position: absolute;
                right: 0;

                &:hover{
                    opacity: 0.7;
                }
            }

            // 圖片
            .upImg{
                width: 95%;
                margin: 5px;
            }
        }

        // 學生圖片
        .student-img-wrapper{
            width: 16%;
            position: relative;
            z-index: 100;

            // 上面的X
            .bi-x-circle-fill{
                position: absolute;
                right: 0;

                &:hover{
                    opacity: 0.7;
                }
            }

            // 圖片
            .upImg{
                width: 95%;
                margin: 5px;
            }
        }
    }

    // 按鈕
    .btn-submit{
        margin-top: 20px;
        background-color: #6C4D41;
        color: white;
    }
</style>