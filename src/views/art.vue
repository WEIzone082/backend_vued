<template>
    <div>
        <PageNav
            PageName="藝術陶管理"
            :WithFunc="func"
            :Checked="checked"
            :formInfo="createFormInfo"
        ></PageNav>
        <BackendTable :hasCheckbox='hasCheckbox'/>
        <FormModal :formInfo="updateFormInfo" />
        <DataFooter
            :start="DataStart"
            :end="DataEnd"
            :count="DataCount"
        ></DataFooter>
    </div>
</template>

<script>
import PageNav from "../components/Page_Nav.vue";
import BackendTable from "../components/BackendTable.vue";
import FormModal from "../components/FormModal.vue";
import DataFooter from "../components/Data_Footer.vue";

export default {
    name: "art",
    components: {
        PageNav,
        BackendTable,
        FormModal,
        DataFooter,
    },
    data: function () {
        return {
            func: true,
            checked: true,
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,

            hasCheckbox: true,
            tableHeadTitle: [
                "封面",
                "作品編號",
                "作品名稱",
                "長度(mm)",
                "寬度(mm)",
                "高度(mm)",
                "材質",
                "作品上架",
                ""
            ],
            tableBodyData: [
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

            // 新增按鈕彈窗資訊
            createFormInfo: {
                targetId: "art-create-modal",
                title: "新增作品",
                buttonName: "確定新增",
            },

            // 編輯按鈕彈窗資訊
            updateFormInfo: {
                targetId: "update-modal",
                title: "編輯作品",
                buttonName: "儲存編輯",
            },

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
            // 上傳圖片的標題
            formImgUpload: "上傳作品圖片",
        };
    },
    mounted() {
        this.$bus.$emit("formInputTitle", this.formInputTitle);
        this.$bus.$emit("formTextareaTitle", this.formTextareaTitle);
        this.$bus.$emit("formCheckTitle", this.formCheckTitle);
        this.$bus.$emit("formImgUpload", this.formImgUpload);
        this.$bus.$emit("hasCheckbox", this.hasCheckbox);
        this.$bus.$emit("tableHeadTitle", this.tableHeadTitle);
        this.$bus.$emit("tableBodyData", this.tableBodyData);
    },
};
</script>

<style lang="scss" scoped></style>
