<template>
  <div class="page-nav">
    <div class="top-content">
      <div class="page-name">
        <p>訂單管理</p>
      </div>
    </div>

    <div class="mid-content">
      <div
        class="inner-pages-info-wrapper"
        v-for="cat of page_cat"
        :key="cat.cat_name"
        :class = "{ inner_now:cat.now }"
        @click="toggle(cat.cat_serial)"
      >
        <div class="inner-pages-info">
          <div class="inner-page-details">
            <span class="inner-page-icon"><i :class="cat.cat_icon"></i></span
            ><span class="data-count">{{ cat.cat_datas }}</span
            ><span>筆</span>
          </div>
          <div class="inner-page-name">
            {{ cat.cat_name }}
          </div>
        </div>
      </div>
    </div>

    <div class="low-content">
      <div class="dropdown account-toggler">
        <button
          class="btn dropdown-toggle data-per-page"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          顯示x筆
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item act-acc">顯示x筆</a></li>
          <li><a class="dropdown-item ban-acc">顯示y筆</a></li>
          <li><a class="dropdown-item ban-acc">顯示z筆</a></li>
        </ul>
      </div>

      <div class="low-right-content">
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
        <button type="button" class="btn export">匯出訂單資訊</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['orderDatas'],
  data: function () {
    return {
      page_cat: [
        {
          cat_icon: "bi bi-file-earmark-spreadsheet",
          cat_datas: 0,
          cat_name: "所有訂單",
          now:true,
          cat_serial: 0
        },
        {
          cat_icon: "bi bi-truck",
          cat_datas: 0,
          cat_name: "進行中訂單",
          now:false,
          cat_serial: 1
        },
        {
          cat_icon: "bi bi-box-seam",
          cat_datas: 0,
          cat_name: "退貨/退款",
          now:false,
          cat_serial: 2
        },
        {
          cat_icon: "bi bi-check2-circle",
          cat_datas: 0,
          cat_name: "已結案訂單",
          now:false,
          cat_serial: 3
        },
      ],
    };
  },
  methods:{
    toggle: function(num){
      for(const ele of this.page_cat){
        if(ele.now == true){
          ele.now = false;
        }
      }
      this.page_cat[num].now = true;
      this.$emit("filter",String(num));
    }
  },
  watch:{
    orderDatas:function(){
      this.page_cat[0].cat_datas = this.orderDatas.length;
      this.page_cat[1].cat_datas = (this.orderDatas.filter(order => order.ORDER_STATUS_ID === '0')).length;
      this.page_cat[2].cat_datas = (this.orderDatas.filter(order => order.ORDER_STATUS_ID === '2')).length;
      this.page_cat[3].cat_datas = (this.orderDatas.filter(order => order.ORDER_STATUS_ID === '1')).length;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/components/Order_Management_Nav.scss";
</style>
