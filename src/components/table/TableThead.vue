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
            hasCheckbox: false,
            tableHeadTitle: [],
            isAllChecked: false
        }
    },
    watch:{
        isAllChecked(){
            this.$emit('isAllChecked', this.isAllChecked);
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
