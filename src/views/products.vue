<template>
    <div class="page-nav">
                <PageNav
            PageName="生活陶管理"
            :WithFunc="func"
            :Checked="checked"
            :formInfo="formData.createFormInfo"
            :useAPI="useAPI"
            :finalCheckedArr="finalCheckedArr"
            @refresh = "refresh()"
        ></PageNav>
        <BackendTable 
            :tableData='tableData' 
            ref="beTable" 
            @showDel='showDel'/>
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
                    WORKS_IN_IMG_1: "封面",
                    WORKS_ID: "商品編號",
                    WORKS_TYPE_ID: "商品系列",
                    WORKS_NAME: "商品名稱",
                    WORKS_PRICE: "價格",
                    WORKS_RADIUS: "直徑(mm)",
                    WORKS_HEIGHT: "高度(mm)",
                    WORKS_STOCK: "數量",
                    WORKS_STATUS_TYPE: "作品上架",
                    space: ""
                },
                // 表的內容
                // tableBodyData: this.$store.getters['products/getTableData']
                tableBodyData: []
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

            // 儲存有勾選tr的id
            finalCheckedArr:[],



            useAPI:{
                displayAPI: 'products/productsDisplay.php',
                deleteAPI: 'products/productsDelete.php',
                upStatusAPI: 'products/productsUpStatus.php',
                downStatusAPI: 'products/productsDownStatus.php',

            }, 
        };
    },
methods: {
        // 上下架刪除按鈕是否顯示功能
        showDel(checkedArr){
            // 儲存要刪除ID的陣列
            this.finalCheckedArr = checkedArr;
            // 存取有勾選的陣列長度 > 0 出現
            if(checkedArr.length > 0){
                this.checked = true
            }else{
                this.checked = false
            }
        },
        refresh(){
            this.$store.dispatch('products/displayAPI', this.useAPI.displayAPI).then(() => {
                this.tableData.tableBodyData = this.$store.getters['products/getTableData']
                console.log('refe');
            })
        }
    },
    watch:{
        tableData:{
            deep:true,
            handler(){
                this.$refs.beTable.tableBodyData = this.tableData.tableBodyData
            }
        }
    },
    created(){
        // 發出ajax請求
        // this.$store.dispatch('art/displayAPI', this.useAPI.displayAPI);
        this.refresh();
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