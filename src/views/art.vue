<template>
    <div>
        <PageNav
            PageName="藝術陶管理"
            :WithFunc="func"
            :Checked="checked"
        ></PageNav>
        <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox" />
                    </th>
                    <th scope="col">封面</th>
                    <th scope="col">作品編號</th>
                    <th scope="col">作品名稱</th>
                    <th scope="col">長度(mm)</th>
                    <th scope="col">寬度(mm)</th>
                    <th scope="col">高度(mm)</th>
                    <th scope="col">材質</th>
                    <th scope="col">作品上架</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-rows" v-for="art in arts" :key="art.id">
                    <th>
                        <input type="checkbox" />
                    </th>
                    <td><img :src="require(`../assets/img/${art.img}`)" /></td>
                    <td>{{ art.id }}</td>
                    <td>{{ art.name }}</td>
                    <td>{{ art.depth }}</td>
                    <td>{{ art.width }}</td>
                    <td>{{ art.height }}</td>
                    <td>{{ art.material }}</td>
                    <td class="status">
                        <span class="badge success-clr">&bull;上架</span>
                    </td>
                    <td>
                        <button
                            type="button"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#update-modal"
                            @click.stop="getButtonId"
                        >
                            <i class="bi bi-three-dots" data-bs-target="#update-modal"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <DataFooter
            :start="DataStart"
            :end="DataEnd"
            :count="DataCount"
        ></DataFooter>
        <FormModal :modalId='modalId'/>
    </div>
</template>

<script>
import DataFooter from "../components/Data_Footer.vue";
import PageNav from "../components/Page_Nav.vue";
import FormModal from "../components/FormModal.vue";

export default {
    name: "art",
    components: {
        DataFooter,
        PageNav,
        FormModal,
    },
    data: function () {
        return {
            func: true,
            checked: true,
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,
            arts: [
                {
                    img: "art_img.png",
                    id: "0000001",
                    name: "食夢膜-牙齒",
                    depth: "500",
                    width: "500",
                    height: "500",
                    material: "黑陶土、黑釉土",
                },
            ],
            // 所點的彈窗按鈕id
            modalId: 'update-modal',
            // 輸入框標題，有幾個就輸入幾個名稱
            formInputTitle: [
                "作品編號",
                "作品名稱",
                "長度",
                "寬度",
                "高度",
                "材質",
            ],
            // Textarea標題名稱
            formTextareaTitle: "作品說明",
            // 是否上架的名稱
            formCheckTitle: "作品上架",
            // 上傳圖片的數量 及 標題
            formImgUpload: { ImgUploadCount: 4, imgUploadTitle: "作品照片" },
            // formFooterButtonName: '儲存編輯'
        };
    },
    methods: {
        getButtonId(e){
            // this.modalId = e.target.getAttribute('data-bs-target').slice(1);
        }
    },
    mounted(){
        this.$bus.$emit('formInputTitle', this.formInputTitle);
        this.$bus.$emit('formTextareaTitle', this.formTextareaTitle);
        this.$bus.$emit('formCheckTitle', this.formCheckTitle);
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/_art.scss";
</style>
