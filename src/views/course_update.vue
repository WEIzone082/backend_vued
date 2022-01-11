<template>
    <div>
        <FromSection 
            :courseFromData="courseFromData"
            :COURSE_TYPE_NAME="COURSE_TYPE_NAME"
            :COURSE_TYPE_ID="COURSE_TYPE_ID"
            :useAPI="useAPI"
        />

        <PageNav
            PageName="課程管理"
            :WithFunc="func"
            :Checked="checked"
            :formInfo="formData.createFormInfo"
            :useAPI="useAPI"
            :finalCheckedArr="finalCheckedArr"
            @refresh = "refresh()"
            :COURSE_TYPE_ID="COURSE_TYPE_ID"
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
    props:['COURSE_TYPE_NAME','COURSE_TYPE_ID'],
    data() {
        return {
            func: true,
            checked: false,
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
                    COURSE_TIME: "時段",
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

                // 輸入框標題，有幾個就輸入幾個名稱
                inputTitles: {
                    COURSE_TYPE_NAME: "課程名稱",
                    COURSE_PRICE_INFO: "費用說明",
                    COURSE_CLASSES_INFO: "期間說明",
                    COURSE_PARTY_INFO: "名額",
                    MATERIAL: "材質",
                },

                // Textarea 欄位名稱
                aboutTextarea: {
                    title: "課程說明",
                    fieldName: "COURSE_INFO"
                },

                // 上傳圖片的標題
                aboutUpload: {
                    title: '講師作品照',
                    fieldName: [
                        'IN_IMG_1', 
                        'IN_IMG_2', 
                    ]
                },
                // 上傳圖片的標題
                aboutStudentUpload: {
                    STUDENT_NAME_1: "圖一學員名",
                    STUDENT_NAME_2: "圖二學員名",
                    STUDENT_NAME_3: "圖三學員名",
                    STUDENT_NAME_4: "圖四學員名",
                    STUDENT_NAME_5: "圖五學員名",
                    STUDENT_NAME_6: "圖六學員名"
                },
            },

            // 儲存有勾選tr的id
            finalCheckedArr:[],

            // api路徑檔名
            useAPI:{
                // 頁面名稱
                pageName: 'course_update',
                displayFormAPI: 'course_update/courseFormDisplay.php',
                displayAPI: 'course_update/courseUpDisplay.php',
                courseTypeUpdataAPI: 'course_update/courseTypeUpdate.php',
                deleteAPI: 'course_update/courseDelete.php',
                upStatusAPI: 'course_update/courseUpStatus.php',
                downStatusAPI: 'course_update/courseDownStatus.php',
                createAPI: 'course_update/courseCreate.php',
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
            this.$store.dispatch('course_update/displayAPI', {
                apiPath: this.useAPI.displayAPI,
                cid: this.COURSE_TYPE_ID
            }).then(() => {
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