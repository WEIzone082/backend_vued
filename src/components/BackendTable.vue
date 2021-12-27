<template>
    <table class="table table-borderless">
        <TableThead />
        <tbody>
            <TableTr 
                v-for="art in tableBodyData" 
                :key="art.id" :art='art' 
                :hasCheckbox='hasCheckbox'
            />
        </tbody>
    </table>
</template>

<script>
import FormModal from './FormModal.vue';
import TableThead from "./table/TableThead.vue";
import TableTr from "./table/TableTr.vue";
export default {
    name: "BackendTable",
    props: ["formInfo"],
    components: {FormModal, TableThead, TableTr },
    data() {
        return {
            tableBodyData: [],
            hasCheckbox: false
        }
    },
    mounted() {
        this.$bus.$on("hasCheckbox", (data) => {this.hasCheckbox = data;});
        this.$bus.$on("tableBodyData", (data) => {this.tableBodyData = data;});
    },
    beforeDestroy() {
        this.$bus.$off("tableBodyData");
        this.$bus.$off("hasCheckbox");

    },
};
</script>

<style lang="scss" scoped></style>
