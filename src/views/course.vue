<template>
      <div>
        <PageNav
            PageName="課程管理"
            :WithFunc="func"
            :Checked="checked"
        ></PageNav>
        <BackendTable :hasCheckbox='hasCheckbox' :tableType='tableType'>

        </BackendTable>
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
            func: true,
            checked: false,
            DataStart: 0,
            DataEnd: 0,
            DataCount: 0,

            // 是否有Checkbox
            hasCheckbox: true,
            // 是否有上架狀態、編輯按鈕、下拉選單
            tableType: {
                hasStatus: false,
                hasUpdateButton: true,
                hasDropdown: false,
            },
            // 表頭名稱
            tableHeadTitle: [
                "封面",
                "課程名稱",
                "費用說明",
                "期間說明",
                "名額說明",
                ""
            ],
            // 表的內容
            tableBodyData: [
                {
                    img: "course.png",
                    name: "手捏器皿",
                    price: "3500, 燒製費另計",
                    date: "全8堂|1堂2.5HR",
                    quota: "10人滿班"
                },
            ],
            linkData: 'course_update',
            

        };
    },
    mounted() {
        this.$bus.$emit("hasCheckbox", this.hasCheckbox);
        this.$bus.$emit("tableType", this.tableType);
        this.$bus.$emit("tableHeadTitle", this.tableHeadTitle);
        this.$bus.$emit("tableBodyData", this.tableBodyData);
        this.$bus.$emit("linkData", this.linkDate);
    },
}
</script>

<style>

</style>