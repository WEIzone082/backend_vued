<template>
    <table class="table table-borderless">
        <TableThead @allCheckedFun='allCheckedFun' ref="tableTh"/>
        <tbody>
            <TableTr 
                v-for="trData in tableBodyData" 
                :key="trData.id" 
                :trData='trData' 
                :tableData='tableData'
                ref="tableTrs"
                @trCheckedFun='trCheckedFun'
                @updateButtonGetData='updateButtonGetData'
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
    // 資料庫傳來的tr資料
    props: ['tableData'],
    components: { TableThead, TableTr },
    data() {
        return {
            // tr的資料
            tableBodyData: this.tableData.tableBodyData,
            // 儲存有勾選ID的陣列
            checkedArr: [],
            // 儲存修改後的表單資料
            updateFormValue: {}
        }
    },
    methods: {
        // 全選框 操控 tr多選框 功能
        allCheckedFun(isAllChecked){
            // 當全選勾選時
            if(isAllChecked){
                // 所有tr都勾
                for (const tr of this.$refs.tableTrs) {
                    tr.trIsChecked = true;
                }
            // 當全選取消勾選 且 所有tr都是勾著的狀態時
            }else if(!isAllChecked && this.trIsAllChecked()){
                // 取消所有tr勾選
                for (const tr of this.$refs.tableTrs) {
                    tr.trIsChecked = false;
                }
            }

            this.getCheckedId(isAllChecked);
        },
        // tr多選框 操控 全選框 功能
        trCheckedFun(trIsChecked){
            // 當tr勾選時 且 所有的tr都有勾
            if(trIsChecked && this.trIsAllChecked()){
                // 全選勾
                this.$refs.tableTh.isAllChecked = true;
            // 當tr取消勾選
            }else if(!trIsChecked){
                // 全選取消勾選
                this.$refs.tableTh.isAllChecked = false;
            }

            this.getCheckedId(trIsChecked);
        },
        // 回傳tr是否有全部勾選 (tr多選 th全選用)
        trIsAllChecked(){
            let trCheckedCount = 0;
            for (const tr of this.$refs.tableTrs) {
                // 計算tr有勾選的數量
                if(tr.trIsChecked){
                    trCheckedCount++;
                }
            }
            // 若勾選的數量 和 tr總數相等
            if(trCheckedCount === this.$refs.tableTrs.length){
                // 代表全都是勾的狀態
                return true;
            }else{
                return false;
            }
        },
        // 將目前有勾選的存入陣列(非共通部分 需修改)
        getCheckedId(isChecked){
        
            // 判斷哪個tr 有勾選 加入陣列 反之 刪除

            // tr勾了
            if(isChecked){
                // 對所有tr跑回圈，將有勾的加入陣列
                for (const tr of this.$refs.tableTrs) {
                    // 找有勾的 && 陣列裡該tr的ID尚未存在
                    if(tr.trIsChecked && this.checkedArr.indexOf(tr.trId) === -1){
                        // 將該tr的ID加入陣列
                        this.checkedArr.push(tr.trId);
                    }
                }
            // tr取消勾選
            }else if(!isChecked){
                // 對所有tr跑回圈，將沒勾的從陣列刪除
                for (const tr of this.$refs.tableTrs) {
                    // 找出沒勾的 && 該ID有在陣列中的
                    if(!tr.trIsChecked && this.checkedArr.indexOf(tr.trId) !== -1){
                        // 將取消勾選的從陣列刪除
                        this.checkedArr.splice(this.checkedArr.indexOf(tr.trId), 1);
                    }
                }
            }
        },
        // 點編輯按鈕取得該筆資料
        updateButtonGetData(thisTrId, thisTrData){

            // console.log(this.$parent.$refs.fm.$refs.formBody.$refs.statusSelect);

            // formbody 子元件的陣列
            let formBodyComponmentArr = this.$parent.$refs.fm.$refs.formBody.$children;
            // id的input欄位
            let idInput = this.$parent.$refs.fm.$refs.formBody.$refs.idInput;
            // 課程狀態下拉選單
            let statusSelect = this.$parent.$refs.fm.$refs.formBody.$refs.statusSelect;

            // id的input欄位的值為 所點按鈕的那筆
            idInput.value = thisTrId;
            // 迭代元件陣列
            for (const component of formBodyComponmentArr) {
                // input
                if (component.fieldName) {

                    // 迭代該筆tr的資料物件
                    for (const fieldName in thisTrData) {
                        // 若該筆屬性名稱 與 該input的名稱相同
                        if(fieldName === component.fieldName){
                            // 該input值改為該筆tr的資料
                            component.inputValue = thisTrData[fieldName];
                            // 將修改後的存入要傳出的物件
                            this.updateFormValue[fieldName] = component.inputValue;
                        }
                        
                    }

                // Textarea
                }else if(component.aboutTextarea && component.aboutTextarea.fieldName){
                    // Textarea的值為該筆tr的值
                    component.inputValue = thisTrData[component.aboutTextarea.fieldName];
                    // 將修改後的存入要傳出的物件
                    this.updateFormValue[component.aboutTextarea.fieldName] = component.inputValue;

                // 上下架
                }else if(component.aboutCheck && component.aboutCheck.fieldName){

                    // 判斷1為true(上架) 2為false(下架)
                    switch (thisTrData[component.aboutCheck.fieldName]) {
                        case '1':
                            component.inputValue = true;
                            break;
                        case '2':
                            component.inputValue = false;
                            break;
                    }

                    // 判斷上架為1 下架為2 (存入修改後資料)
                    if(component.inputValue){
                        this.updateFormValue[component.aboutCheck.fieldName] = '1'
                    }else{
                        this.updateFormValue[component.aboutCheck.fieldName] = '2'
                    }
                }
            }

            // 存入圖片(暫時)
            for (const fieldName in thisTrData) {
                // 若欄位名有img時
                if(fieldName.indexOf('_IMG') !== -1){
                    // 把圖的名稱存入物件
                    this.updateFormValue[fieldName] = thisTrData[fieldName];
                }
            }

            // 若有課程狀態下拉選單
            if (statusSelect) {
                // 則將該下拉選單的值改為該筆資料
                statusSelect.value = thisTrData.STATUS_TYPE;
                thisTrData.STATUS_TYPE = statusSelect.value;
            }

            // console.log(this.updateFormValue);
        },
        // 獲取彈窗編輯後的資料
        
    },
    watch:{
        // 偵測存放有勾選ID的陣列
        checkedArr(){
            // 按鈕顯示
            this.$emit('showDel', this.checkedArr);
            // 傳陣列過去
            this.$bus.$emit('sendCheckedArr', this.checkedArr)
            // 每次checkbox變動 印出有勾選ID的陣列
            // console.log(this.checkedArr);
        }
    },
};
</script>

<style lang="scss" scoped></style>
