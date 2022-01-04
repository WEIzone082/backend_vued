<template>
    <table class="table table-borderless">
        <TableThead 
            @isAllChecked='isAllChecked' 
            ref="tableTh" 
            :isChecked='isChecked'
        />
        <tbody>
            <TableTr 
                v-for="trData in tableBodyData" 
                :key="trData.id" 
                :trData='trData' 
                :tableData='tableData'
                :isChecked='isChecked'
                @getTrChecked='getTrChecked'
                ref="tableTr"
            >
            </TableTr>
        </tbody>
    </table>
</template>

<script>
import TableThead from "./table/TableThead.vue";
import TableTr from "./table/TableTr.vue";
export default {
    name: "BackendTable",
    props: ["formInfo",'tableData'],
    components: { TableThead, TableTr },
    data() {
        return {
            tableBodyData: this.tableData.tableBodyData,
            // 全選checkbox
            isChecked: false,
            // tr checkbox
            trIsChecked: false,
            checkedArr:[]
        }
    },
    computed: {
        trLength(){
            return this.tableBodyData.length
        }
    },
    methods: {
        isAllChecked(isAllChecked){
            this.isChecked = isAllChecked
        },
        getTrChecked(trChecked){



            // 當tr的checkbox勾選發生變化則會執行以下
            // 判斷哪個tr 有勾選 加入陣列

            // tr勾了
            if(trChecked){
                // 對所有tr跑回圈，將有勾的加入陣列
                for (const tr of this.$refs.tableTr) {
                    // 找有勾的 && 陣列裡該tr的ID尚未存在
                    if(tr.trChecked && this.checkedArr.indexOf(tr.trId) === -1){
                        // 將該tr的ID加入陣列
                        this.checkedArr.push(tr.trId)
                    }
                }
            // tr取消勾選
            }else if(!trChecked){
                // 對所有tr跑回圈，將沒勾的從陣列刪除
                for (const tr of this.$refs.tableTr) {
                    // 找出沒勾的 && 該ID有在陣列中的
                    if(!tr.trChecked && this.checkedArr.indexOf(tr.trId) !== -1){
                        // 將取消勾選的從陣列刪除
                        this.checkedArr.splice(this.checkedArr.indexOf(tr.trId), 1)
                    }
                }
            }


            if(this.trLength !== this.checkedArr.length){
                this.$refs.tableTr.trChecked = false
            }
        }
    },
    watch:{
        checkedArr(newV){
            console.log(newV);
        }
    }
};
</script>

<style lang="scss" scoped></style>
