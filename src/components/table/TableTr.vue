<template>
    <!-- tr內容 -->
    <tr class="table-rows">
        <!-- checkbox -->
        <td v-if="hasCheckbox" ref="tdCheckbox">
            <input type="checkbox" v-model="trIsChecked"/>
        </td>
        <!-- tr的內容 -->
        <td v-for="(val, title) in getTrValue" :key="title">

            <!-- 判斷是否有圖片 -->
            <img
                :src="require(`../../assets/img/${val}`)"
                v-if="title === 'IN_IMG_1'"
                class="trPreviewImg"
            />

            <!-- 不是圖片則正常顯示 -->
            <template v-if="title !== 'IN_IMG_1'">{{ val }}</template>
        </td>

        <!-- for課程管理table 額滿的內容 -->
        <td class="status" v-if="tableType.hasFull">
            <span class="badge success-clr">&bull;未額滿</span>
        </td>

        <!-- 上下架 -->
        <td class="status" v-if="tableType.hasStatus && trData.STATUS_TYPE === '1'">
            <span class="badge success-clr">&bull;上架</span>
        </td>
        <td class="status" v-if="tableType.hasStatus && trData.STATUS_TYPE === '2'">
            <span class="badge down-clr">&bull;下架</span>
        </td>
        <td class="status" v-if="tableType.hasStatus && trData.STATUS_TYPE === '3'">
            <span class="badge course-full">&bull;已額滿</span>
        </td>

        <!-- 編輯按鈕 -->
        <td v-if="tableType.hasUpdateButton">
            <!-- 正常編輯按鈕 若有pathData則不顯示 -->
            <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#update-modal"
                v-if="!tableType.pathData"
                @click="sendTrId"
            >
                <i class="bi bi-three-dots" data-bs-target="#update-modal"></i>
            </button>

            <!-- course 編輯內頁用 有pathData才會顯示 -->
            <router-link v-if="tableType.pathData" 
                :to="{
                    name: 'course_update',
                    params:{
                        COURSE_TYPE_NAME: trData.COURSE_TYPE_NAME,
                        COURSE_TYPE_ID: trData.COURSE_TYPE_ID
                    }
                }"
            >
                <button class="btn">
                    <i class="bi bi-three-dots"></i>
                </button>
            </router-link>
        </td>

        <!-- 會員管理用 停權下拉選單 -->
        <td v-if="tableType.hasDropdown">
            <div class="dropdown account-toggler">
                <button
                    class="btn dropdown-toggle success-comp"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    &bull; 
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item act-acc">啟用</a></li>
                    <li><a class="dropdown-item ban-acc">停權</a></li>
                </ul>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "TableTr",
    components: {},
    props: ["trData", 'tableData'],
    data() {
        return {
            // 是否有Checkbox
            hasCheckbox: this.tableData.hasCheckbox,
            // tr的格式(有無上架、編輯紐、額滿等)
            tableType: this.tableData.tableType,
            // th資料(用於比對tr該填入什麼資料)
            tableHeadTitle: this.tableData.tableHeadTitle,
            // tr勾選狀態
            trIsChecked: false,
            // tr的id
            trId: this.trData.ARTS_ID || this.trData.COURSE_ID || this.trData.WORKS_ID
        };
    },
    computed: {
        // 取得tr要顯示的資料
        getTrValue(){
            // 複製一個th物件
            let trValue = {...this.tableHeadTitle}
            delete trValue.space;
    
            // 迴圈找tr有跟th相同屬性名的資料
            for (const thProp in this.tableHeadTitle) {

                // 第二層跑傳入的資料
                for (const trProp in this.trData) {
                    // 若th和tr屬姓名相同
                    if(thProp === trProp){
                        // 將tr的值給th該屬性
                        trValue[thProp] = this.trData[trProp]
                    }
                }
            }
            delete trValue['STATUS_TYPE'];
            return trValue
        },
    },
    watch:{
        // 監測tr勾選框變動
        trIsChecked(){
            // 當tr勾選框變動傳該值給table
            this.$emit('trCheckedFun', this.trIsChecked)
        }
    },
    methods: {
        // 當點編輯按鈕傳送該筆id給table
        sendTrId(e){
            this.$emit('updateButtonGetData', this.trId, this.trData)
        }
    },
};
</script>

<style lang="scss" scoped>
td {
    .trPreviewImg{
        width: 60px;
        height: 60px;
    }
    .success-clr {
        background-color: #f4fbdb;
        color: #b8d935;
        font-size: 16px;
        font-weight: normal;
    }

    .down-clr{
        background-color: #ffc542;
        color: #000;
        font-size: 16px;
        font-weight: normal;
    }

    .course-full{
        background-color: #97b0f5;
        color: #000;
        font-size: 16px;
        font-weight: normal;
    }

    & .btn {
        border: none;
        width: 32px;
        background-color: #f1f1f5 !important;
        color: #979797;
        padding: 0 !important;
        cursor: pointer;
    }
}
</style>
