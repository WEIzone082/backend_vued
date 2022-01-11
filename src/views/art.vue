<template>
    <div>
        <PageNav
            PageName="藝術陶管理"
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
            @showDel='showDel'
        />
        <FormModal :formInfo="formData.updateFormInfo" :isUpdateButton="isUpdateButton"/>
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
            // 新增按鈕
            func: true,
            // 上下架刪除按鈕
            checked: false,
            // data起始結束 總數
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,

            // 是否為編輯按鈕的彈窗
            isUpdateButton: true,

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
                    NAME: "作品名稱",
                    LENTH: "長度",
                    WIDTH: "寬度",
                    HEIGHT: "高度",
                    MATERIAL: "材質",
                },

                // id input標題
                idInputTitle:'作品編號',

                // Textarea 欄位名稱
                aboutTextarea: {
                    title: "作品說明",
                    fieldName: "INFO"
                },

                // 是否上架的名稱
                aboutCheck:{
                    title: '作品上架',
                    fieldName: 'STATUS_TYPE'
                },
                
                // 上傳圖片的標題
                aboutUpload: {
                    title: '上傳作品圖片',
                    fieldName: [
                        'IN_IMG_1', 
                        'IN_IMG_2', 
                        'IN_IMG_3', 
                        'IN_IMG_4'
                    ]
                }
            },

            // 儲存有勾選tr的id
            finalCheckedArr:[],

            // api路徑檔名
            useAPI:{
                pageName: 'art',
                displayAPI: 'art/artDisplay.php',
                deleteAPI: 'art/artDelete.php',
                upStatusAPI: 'art/artUpStatus.php',
                downStatusAPI: 'art/artDownStatus.php',
                uploadAPI: 'art/artUpload.php',
                createAPI: 'art/artCreate.php'
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
        // 重新獲取資料庫資料
        refresh(){
            this.$store.dispatch('art/displayAPI', this.useAPI.displayAPI).then(() => {
                this.tableData.tableBodyData = this.$store.getters['art/getTableData']
            })
        }
    },
    watch:{
        // 偵測抓來的資料變更(避免子元素來不及拿到資料)
        tableData:{
            deep:true,
            handler(){
                this.$refs.beTable.tableBodyData = this.tableData.tableBodyData
            }
        }
    },
    created(){
        // 發出ajax請求
        this.refresh();
    },
    mounted() {
        // 傳給th
        this.$bus.$emit("tableData", this.tableData);
        // 傳給formbody
        this.$bus.$emit("formData", this.formData);
    },
};
</script>

<style lang="scss" scoped>

</style>
