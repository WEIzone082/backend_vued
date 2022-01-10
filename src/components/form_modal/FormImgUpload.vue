<template>
    <div class="img-upload-wrapper">
        <span class="img-title">{{aboutUpload.title || courseFromData}}</span>
        <span class="img-limit">最多 4 張</span>
        <div class="upload-content-wrapper">
            <label class="upload_cover">
                <input 
                    id="upload_input" 
                    type="file" 
                    multiple
                    @change="fileChange" 
                    ref="uploader"
                    name="test[]"
                />
                <span class="addText" v-show="isShow">+ 加入圖片</span>
                <!-- 新增用 -->
                <template v-if="isCreateForm">
                    <div class="img-wrapper" v-for="(imgUrl, index) in urlArr" :key="index">
                        <i class="bi bi-x-circle-fill" @click.prevent="removeImg"></i>
                        <img :src="imgUrl" class="upImg">
                    </div>
                </template>
                <!-- 編輯用 -->
                <template v-if="!isCreateForm">
                    <div class="img-wrapper">
                        <!-- <i class="bi bi-x-circle-fill"></i> -->
                        <!-- <img src="#" class="upImg"> -->
                    </div>
                </template>

            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormImgUpload",
    // 課程用、傳圖片標題、是否為新增表單(page_nav)
    props: ['courseFromData', 'aboutUpload', 'isCreateForm'],
    data() {
        return {
            isShow: true,
            // 上傳的圖片
            previewImgs: {},
            // 儲存畫面預覽上傳檔案的url
            urlArr: [],
        }
    },
    methods: {
        // 刪除上傳的檔案
        removeImg(e){

            // 迭代存檔案的物件
            for (const key in this.previewImgs) {
                // 當所點的X為該檔案的路徑
                if(this.previewImgs[key] === e.target.nextSibling.src){
                    // 刪除該檔案
                    delete this.previewImgs[key];
                }
            }
            // 頁面上把預覽的圖刪掉
            e.target.parentNode.remove()

            // 當全刪除時顯示加入圖片的文字
            if ( Object.keys(this.previewImgs).length === 0) {
                this.isShow = true;
            }
        },
        // 顯示上傳的預覽圖，並存入data中
        fileChange(event){
            // input 本身
            let input = event.target;
            // 檔案的陣列
            let imgs = input.files;

            let imgsObj = {};
            let imgArr = [];

            // 當上傳成功且小於四張
            if(imgs && imgs.length <= 4){
                // 上傳的文字消失
                this.isShow = false;
                // 迭代圖片陣列
                for (let i = 0; i < imgs.length; i++) {
                    // 建立FileReader物件
                    let reader = new FileReader();
                    // 當讀取完成
                    reader.onload = (e) => {
                        // 將讀取結果存入陣列 (e.target為FileReader本身)
                        imgArr.push(e.target.result);
                        // 檔名: url
                        imgsObj[input.files[i].name] = e.target.result
                    }
                    // 將檔名存入陣列
                    // this.imageName.push(input.files[i].name);
                    reader.readAsDataURL(input.files[i]);
                }

                this.previewImgs = imgsObj
                this.urlArr = imgArr

            }else if(imgs.length > 4){
                alert('超過上傳限制 4 張圖片')
            }else{
                alert('上傳圖片失敗')        
            }

        },
    },
};
</script>

<style lang="scss" scoped>
    .img-upload-wrapper{
        width: 100%;
        margin-top: 20px;
        width: 100%;
    }

    .img-limit{
        float: right;
    }

    // .upload-content-wrapper{

    // }

    .upload_cover {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 110px;
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

    // .img-upload-wrapper {
    //     margin-top: 20px;
    //     margin-bottom: 20px;
    //     width: 100%;

    //     .img-title{
    //         font-size: 1rem;
    //         font-weight: normal;
    //     }

    //     .upload-content-wrapper{
    //         width: 100%;
    //     }
    // }

    // .upload_cover{
    //     width: 100%;
    //     position: relative;
    //     text-align: left;
    //     .upImg{
    //         display: flex;
    //         flex-direction: column;
    //         height: 100px;
    //         margin-top: 5px;
    //         margin-left: 5px;
    //         justify-content: space-around;
    //     }
    //     .upload_icon{
    //         // position: absolute;
    //         width: auto;
    //         left: 50%;
    //         transform: translateX(-50%);
    //     }
    // }
</style>
