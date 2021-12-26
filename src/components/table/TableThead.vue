<template>
    <thead>
        <tr>
            <th scope="col" v-if="hasCheckbox">
                <input type="checkbox" />
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
            tableHeadTitle: []
        }
    },
    mounted() {
        this.$bus.$on("hasCheckbox", (data) => {this.hasCheckbox = data;});
        this.$bus.$on("tableHeadTitle", (data) => {this.tableHeadTitle = data;});
    },
    beforeDestroy() {
        this.$bus.$off("hasCheckbox");
        this.$bus.$off("tableHeadTitle");
    },
};
</script>

<style></style>
