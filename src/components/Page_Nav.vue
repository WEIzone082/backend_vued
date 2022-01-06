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
      <button type="button" class="btn btn-dark up-btn" v-if="Checked">
        <i class="bi bi-plus-lg"></i>
        上架
      </button>
      <button type="button" class="btn btn-dark down-btn" v-if="Checked">
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
      <FormModal :formInfo="formInfo" v-if="formInfo" />
    </div>
  </div>
</template>

<script>
import FormModal from "./FormModal.vue";
export default {
  props: ["PageName", "WithFunc", "Checked", "formInfo", "finalCheckedArr", "useAPI"],
  components: { FormModal },
  data() {
    return {
      checkedArr:[]
    }
  },
  methods: {

    delTr(){
      let flag = confirm('確定要刪除勾選的作品?')
      if(flag){
        this.$store.dispatch('art/deleteAPI', {
          useAPI:this.useAPI, finalCheckedArr:this.finalCheckedArr
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
