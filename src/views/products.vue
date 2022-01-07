<template>
    <div class="page-nav">
                <PageNav
            PageName="生活陶管理"
            :WithFunc="func"
            :Checked="checked"
            :formInfo="formData.createFormInfo"
        ></PageNav>
        <BackendTable :tableData='tableData' ref="beTable" @showDel='showDel'/>
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
import FormModal from '../components/FormModal.vue';
import DataFooter from "../components/Data_Footer.vue";
export default {
    components: {
        PageNav,
        BackendTable,
        FormModal,
        DataFooter,
    },
    data() {
        return {
            // 新增按鈕
            func: true,
            // 上下架刪除按鈕
            checked: false,
            // data起始結束 總數
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,

            // table相關
            tableData:{
                // 是否有Checkbox
                hasCheckbox: true,
                // 表是否有
                tableType: {
                    // 上架狀態
                    hasStatus: true,
                    // 編輯按鈕
                    hasUpdateButton: true,
                    // 下拉選單
                    hasDropdown: false,
                    // 路徑(課程內頁用)
                    pathData: '',
                    // 額滿狀態(課程用)
                    hasFull: false
                },
                // 表頭名稱
                tableHeadTitle: {
                    IN_IMG_1: "封面",
                    PRODUCTS_ID: "商品編號",
                    SERIES: "商品系列",
                    NAME: "商品名稱",
                    PRIZE: "價格",
                    DIAMETER: "直徑(mm)",
                    HEIGHT: "高度(mm)",
                    COUNT: "數量",
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
                    PRODUTS_ID: "商品編號",
                    SERIES: "商品系列",
                    NAME: "商品名稱",
                    PRIZE: "價格",
                    DIAMETER: "直徑(mm)",
                    HEIGHT: "高度(mm)",
                    COUNT: "數量",
                },

                // Textarea標題名稱
                textareaTitle: "作品說明",
                // 是否上架的名稱
                checkTitle: "作品上架",
                // 上傳圖片的標題
                imgUpload: "上傳作品圖片",
            },

            // useAPI:{
            //     displayAPI: 'art/artDisplay.php',
            //     deleteAPI: 'art/artDelete.php',
            // }, 
        };
    },
    methods: {
        // 上下架刪除按鈕是否顯示功能
        showDel(checkedArr){
            // 存取有勾選的陣列長度 > 0 出現
            if(checkedArr.length > 0){
                this.checked = true
            }else{
                this.checked = false
            }
        }
    },
    created(){
        // 發出ajax請求
        this.$store.dispatch('art/displayAPI', this.useAPI.displayAPI);
        // this.$store.dispatch('art/displayAPI', this.useAPI, this.$refs.);
    },
    mounted() {
        // 傳給th
        this.$bus.$emit("tableData", this.tableData);
        this.$bus.$emit("formData", this.formData);
    },
};

</script>

<style lang='scss' scoped>

</style>