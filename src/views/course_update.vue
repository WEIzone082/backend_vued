<template>
    <div>
        <FromSection :courseFromData="courseFromData"/>

        <PageNav
            PageName="課程管理"
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

        <FormModal 
            :formInfo="formData.updateFormInfo" 
            :isUpdateButton="isUpdateButton"
        />
    </div>
</template>

<script>
import FromSection from '../components/course_update/FromSection.vue'
import PageNav from "../components/Page_Nav.vue";
import BackendTable from "../components/BackendTable.vue";
import FormModal from "../components/FormModal.vue";
import DataFooter from "../components/Data_Footer.vue";
export default {
    name: "CourseUpdate",
    components: {
        FromSection,
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

            // 是否為編輯按鈕的彈窗
            isUpdateButton: true,

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
                    COURSE_ID: "課程編號",
                    COURSE_TIME: "時段",
                    COURSE_PRICE: "價格",
                    COURSE_CLASSES: "堂數",
                    COURSE_PARTY: "人數",
                    COURSE_START_DATE: "起始日期",
                    COURSE_END_DATE: "結束日期",
                    STATUS_TYPE: "狀態",
                    space: ""
                },
                // 表的內容
                tableBodyData: [],
            },

            // form相關
            formData:{
                // 新增按鈕彈窗資訊
                createFormInfo: {
                    targetId: "art-create-modal",
                    title: "新增課程",
                    buttonName: "確定新增",
                    isExist: true
                },

                // 編輯按鈕彈窗資訊
                updateFormInfo: {
                    targetId: "update-modal",
                    title: "編輯課程",
                    buttonName: "儲存編輯",
                },

                // 輸入框標題，有幾個就輸入幾個名稱
                inputTitles: {
                    COURSE_TIME: "時間",
                    COURSE_PRICE: "價格",
                    COURSE_PARTY: "人數",
                    COURSE_START_DATE: "起始日期",
                    COURSE_END_DATE: "結束日期",
                    COURSE_CLASSES: "堂數"
                },

                // Textarea標題名稱
                textareaTitle: "",
                // 是否上架的名稱
                aboutCheck:{
                    title: '課程上架',
                    fieldName: 'STATUS_TYPE'
                },
                // 上傳圖片的標題
                imgUpload: "",
            },

            // 上方表單資料
            courseFromData:{

            },

            // 儲存有勾選tr的id
            finalCheckedArr:[],

            // api路徑檔名
            useAPI:{
                displayAPI: 'course_update/courseUpDisplay.php',
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
            this.$store.dispatch('course_update/displayAPI', this.useAPI.displayAPI).then(() => {
                this.tableData.tableBodyData = this.$store.getters['course_update/getTableData']
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
        this.$bus.$emit("tableData", this.tableData);
        this.$bus.$emit("formData", this.formData);
        this.$bus.$emit("courseFromData", this.courseFromData);
    },
}
</script>

<style lang="scss" >

</style>