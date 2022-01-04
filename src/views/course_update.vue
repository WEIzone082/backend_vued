<template>
    <div>
        <FromSection :courseFromData="courseFromData"/>

        <PageNav
            PageName="藝術陶管理"
            :WithFunc="func"
            :Checked="checked"
            :formInfo="formData.createFormInfo"
        ></PageNav>

        <BackendTable :tableData='tableData'/>

        <FormModal :formInfo="formData.updateFormInfo" />
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
                    hasFull: true
                },
                // 表頭名稱
                tableHeadTitle: [
                    "課程編號",
                    "時段",
                    "價格",
                    "堂數",
                    "人數",
                    "起始日期",
                    "結束日期",
                    "額滿",
                    "狀態",
                    ""
                ],
                // 表的內容
                tableBodyData: [
                    {
                        id: "0000001",
                        date: "週二 16:00-19:00",
                        price: "3500",
                        classCount: "10",
                        personCount: "8",
                        startDate: "2021-12-01",
                        endDate: "2022-02-01",
                    },
                ],
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
                inputTitles: [
                    "課程編號",
                    "時間",
                    "價格",
                    "人數",
                    "起始日期",
                    "結束日期",
                    "堂數"
                ],

                // Textarea標題名稱
                textareaTitle: "",
                // 是否上架的名稱
                checkTitle: "課程上架",
                // 上傳圖片的標題
                imgUpload: "",
            },

            // 上方表單資料
            courseFromData:{
                formCheckTitle: "課程上架",
                courseInputTitle:['課程名稱', '費用', '期間', '名額'],
                formTextareaTitle: "課程說明",
                scheduleImageTitle: '課程時間表',
                teacherImageTitle: '講師作品',
                studentImageTitle: '學員作品',
                courseFormModal: true,
            },
        };
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