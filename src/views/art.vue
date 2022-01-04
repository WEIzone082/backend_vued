<template>
    <div>
        <PageNav
            PageName="藝術陶管理"
            :WithFunc="func"
            :Checked="checked"
            :formInfo="formData.createFormInfo"
        ></PageNav>
        <BackendTable :tableData='tableData'/>
        <FormModal :formInfo="formData.updateFormInfo" />
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
import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    name: "Art",
    components: {
        PageNav,
        BackendTable,
        FormModal,
        DataFooter,
    },
    data() {
        return {
            func: true,
            checked: true,
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,

            // table相關
            tableData:{
                // 是否有Checkbox
                hasCheckbox: true,
                // 是否有上架狀態、編輯按鈕、下拉選單
                tableType: {
                    hasStatus: true,
                    hasUpdateButton: true,
                    hasDropdown: false,
                    pathData: '',
                    hasFull: false
                },
                // 表頭名稱
                tableHeadTitle: {
                    OUT_IMG: "封面",
                    ARTS_ID: "作品編號",
                    NAME: "作品名稱",
                    LENTH: "長度(mm)",
                    WIDTH: "寬度(mm)",
                    HEIGHT: "高度(mm)",
                    MATERIAL: "材質",
                    STATUS_TYPE: "作品上架",
                    space: ""
                },
                // 表的內容
                tableBodyData: this.$store.getters['art/getTableData']
            },

            // form相關
            formData:{

                // 新增按鈕彈窗資訊
                createFormInfo: {
                    targetId: "art-create-modal",
                    title: "新增作品",
                    buttonName: "確定新增",
                    isExist: true
                },

                // 編輯按鈕彈窗資訊
                updateFormInfo: {
                    targetId: "update-modal",
                    title: "編輯作品",
                    buttonName: "儲存編輯",
                },

                // 輸入框標題，有幾個就輸入幾個名稱
                inputTitles: {
                    ARTS_ID: "作品編號",
                    NAME: "作品名稱",
                    LENTH: "長度",
                    WIDTH: "寬度",
                    HEIGHT: "高度",
                    MATERIAL: "材質",
                },

                // Textarea標題名稱
                textareaTitle: "作品說明",
                // 是否上架的名稱
                checkTitle: "作品上架",
                // 上傳圖片的標題
                imgUpload: "上傳作品圖片",
            },

            useAPI:{
                displayAPI: 'art/artDisplay.php',
            }, 
        };
    },
    created(){
        // 發出ajax請求
        this.$store.dispatch('art/displayAPI', this.useAPI.displayAPI);
    },
    mounted() {
        this.$bus.$emit("tableData", this.tableData);
        this.$bus.$emit("formData", this.formData);
    },
};
</script>

<style lang="scss" scoped>

</style>
