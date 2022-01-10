<template>
    <thead>
        <tr>
            <th scope="col" v-if="hasCheckbox">
                <input type="checkbox" v-model="isAllChecked"/>
            </th>
            <th scope="col" v-for="(title, index) in tableHeadTitle" :key="index">{{title}}</th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: 'TableThead',
    data() {
        return {
            // 是否有Checkbox
            hasCheckbox: false,
            // th欄位名稱
            tableHeadTitle: [],
            // 全選checkoutbox
            isAllChecked: false
        }
    },
    watch:{
        // 監測全選多選框變動
        isAllChecked(){
            // 當全選框變動傳該值給table
            this.$emit('allCheckedFun', this.isAllChecked)
        }
    },
    mounted() {
        this.$bus.$on("tableData", (tableData) => {
            this.hasCheckbox = tableData.hasCheckbox;
            this.tableHeadTitle = tableData.tableHeadTitle;
        });
    },
    beforeDestroy() {
        this.$bus.$off("tableData");
    },
};
</script>

<style></style>
