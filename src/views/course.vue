<template>
      <div>
        <PageNav
            PageName="課程管理"
            :WithFunc="func"
            :Checked="checked"
            :useAPI="useAPI"
        ></PageNav>
        <BackendTable :tableData='tableData' ref="beTable"/>
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
import DataFooter from "../components/Data_Footer.vue";
export default {
    name: "Course",
    components: {
        PageNav,
        BackendTable,
        DataFooter,
    },
    data: function () {
        return {
            func: false,
            checked: false,
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,

            tableData:{
                // 是否有Checkbox
                hasCheckbox: false,
                // 是否有上架狀態、編輯按鈕、下拉選單
                tableType: {
                    hasStatus: false,
                    hasUpdateButton: true,
                    hasDropdown: false,
                    pathData: 'course_update',
                    hasFull: false
                },
                // 表頭名稱
                tableHeadTitle: {
                    IN_IMG_1: "封面",
                    COURSE_TYPE_NAME: "課程名稱",
                    COURSE_PRICE_INFO: "費用說明",
                    COURSE_CLASSES_INFO: "期間說明",
                    COURSE_PARTY_INFO: "名額說明",
                    space: ""
                },
                // 表的內容
                tableBodyData: []
            },

            // api路徑檔名
            useAPI:{
                displayAPI: 'course/courseDisplay.php',
            }, 
        };
    },
    methods: {
        // 重新獲取資料庫資料
        refresh(){
            this.$store.dispatch('course/displayAPI', this.useAPI.displayAPI).then(() => {
                this.tableData.tableBodyData = this.$store.getters['course/getTableData']
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
    created() {
        // 發出ajax請求
        this.refresh();
    },
    mounted() {
        this.$bus.$emit("tableData", this.tableData);
    },
}
</script>

<style lang="scss" scoped>

</style>