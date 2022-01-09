<template>
  <div class="page-nav">
    <div class="left-contents">
      <div class="page-name">
        <p>{{ PageName }}</p>
      </div>

      <div class="dropdown account-toggler">
        <button
          class="btn dropdown-toggle data-per-page"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          顯示10筆
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item">顯示10筆</a></li>
          <li><a class="dropdown-item">顯示20筆</a></li>
          <li><a class="dropdown-item">顯示30筆</a></li>
        </ul>
      </div>
    </div>

    <div class="right-contents">
      <button type="button" class="btn btn-dark up-btn" v-if="Checked" @click="upTr">
        <i class="bi bi-plus-lg"></i>
        上架
      </button>
      <button type="button" class="btn btn-dark down-btn" v-if="Checked" @click="downTr">
        <i class="bi bi-plus-lg"></i>
        下架
      </button>
      <button type="button" class="btn btn-dark del-btn" v-if="Checked" @click="delTr">
        <i class="bi bi-plus-lg"></i>
        刪除
      </button>
      <div class="input-group mb-3 input-group-sm">
        <span class="input-group-text" id="inputGroup-sizing-default"
          ><i class="bi bi-search"></i
        ></span>
        <input
          type="text"
          class="form-control searcher"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <button
        type="button"
        class="btn create-btn"
        data-bs-toggle="modal"
        data-bs-target="#art-create-modal"
        v-if="WithFunc && formInfo"
      >
        <i class="bi bi-plus-lg"></i>
        新增
      </button>
      <router-link :to="{name: 'course_update', params:{name: '新增課程'}}" v-else>
        <button type="button" class="btn create-btn" v-if="WithFunc">
            <i class="bi bi-plus-lg"></i>
            新增
        </button>
      </router-link>
      <!-- 新增彈窗 傳相關資料，若沒彈窗則不顯示 -->
      <FormModal 
        :formInfo="formInfo" 
        :isCreateForm='isCreateForm' 
        v-if="formInfo" 
        ref="createFM"
      />
    </div>
  </div>
</template>

<script>
import FormModal from "./FormModal.vue";
export default {
  // 頁面名稱、是否有刪除等按鈕、新增按鈕、新增彈窗header...、最終儲存有勾選的陣列、PHP網址
  props: ["PageName", "WithFunc", "Checked", "formInfo", "finalCheckedArr", "useAPI"],
  components: { FormModal },
  data() {
    return {
      checkedArr:[],
      isCreateForm: true
    }
  },
  methods: {
    // 刪除功能
    delTr(){
      // 確認彈窗
      let flag = confirm('確定要刪除勾選的作品?');
      // 確定刪除
      if(flag){
        // 呼叫vuex的ajax方法
        this.$store.dispatch('art/deleteAPI', {
          // php路徑
          useAPI:this.useAPI, 
          // 有勾選的id
          finalCheckedArr:this.finalCheckedArr
        }).then(() => {
          // 重新獲取資料庫資料
          this.$emit('refresh')
        });
      }
    },

    // 上架
    upTr(){
      let flag = confirm('確定要將勾選的作品上架?');
      if(flag){
        this.$store.dispatch('art/upStatusAPI', {
          useAPI:this.useAPI, 
          finalCheckedArr:this.finalCheckedArr
        }).then(() => {
          this.$emit('refresh')
        });
      }
    },

    // 下架
    downTr(){
      let flag = confirm('確定要將勾選的作品上架?');
      if(flag){
        this.$store.dispatch('art/downStatusAPI', {
          useAPI:this.useAPI, 
          finalCheckedArr:this.finalCheckedArr
        }).then(() => {
          this.$emit('refresh')
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/basics/_BACK-colors.scss";
@import "../assets/scss/components/Page_Nav.scss";
</style>
