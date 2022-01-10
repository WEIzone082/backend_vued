<template>
  <div>
    <OrderNav :orderDatas = "AllDatas" @filter="orderFilter"></OrderNav>

    <div class="orders-wrapper">
      <div class="container order" v-for="order in showDatas" :key="order.ORDER_ID">
        <div class="row g-0 order-info">
          <div class="col-2 order-no-container">
            <p>
              訂單編號：<span class="order-no">{{ order.ORDER_ID }}</span>
            </p>
          </div>
          <div class="col-3 order-date-container">
            <p>
              訂單日期：<span class="order-date">{{ order.ORDER_DATETIME }}</span>
            </p>
          </div>
          <div class="col-5"></div>
          <div class="col-2 order-status-container">
            <button
              class="btn alert-comp"
              disabled
              v-if="order.ORDER_STATUS_ID == 0"
            >
              &bull; 運送中
            </button>
            <button
              class="btn error-comp"
              disabled
              v-if="order.ORDER_STATUS_ID == 2"
            >
              &bull; 退貨中
            </button>
            <button class="btn success-comp" disabled v-if="order.ORDER_STATUS_ID == 1">
              &bull; 已完成
            </button>
          </div>
        </div>
        <div class="row g-0 order-details">
          <div class="col-3 order-items">
            <img src="../assets/img/order-detail.png" alt="" />
            <div class="order-items-detail">
              <span class="item-count">{{ order.ORDER_ITEMS }}</span
              >樣商品
            </div>
          </div>

          <div class="col-6 order-detail-info">
            <p class="order-total">{{ order.ORDER_PRICE_TOTAL }}</p>
            <p class="order-payer">{{ order.BUYER }}</p>
            <p class="order-paying-method">{{ order.PAYMENT_METHOD }}</p>
            <p class="order-delivery-method">{{ order.DELIVER_METHOD }}</p>
          </div>

          <div class="col-1"></div>
          <div class="col-2 detail-page-entrance">
            <router-link
              :to="{ name: 'order_details', params: { OrderID: order.ORDER_ID } }"
            >
              <button type="button" class="btn go-to-detail">
                <i class="bi bi-three-dots"></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <DataFooter
    ></DataFooter>
  </div>
</template>

<script>
import DataFooter from "../components/Data_Footer.vue";
import OrderNav from "../components/order_management/Order_Management_Nav.vue";

export default {
  components: { DataFooter, OrderNav },
  data: function () {
    return {
      func: false,
      checked: false,
      AllDatas:[],
      showDatas:[]
    };
  },
  methods:{
    orderFilter:function(num){
      if(num !== "0"){

        let serial = "";
        if(num == "1"){
          serial = "0"
        }else if(num == "2"){
          serial = "2"
        }else{
          serial = "1"
        }

        this.showDatas = [];
        for(const data of this.AllDatas){
          if(data.ORDER_STATUS_ID === serial){
            this.showDatas.push(data);
          }
        }
      }else{
        this.showDatas = this.AllDatas;
      }
    }
  
  },
  beforeCreate() {
    this.$store.dispatch("order/getAll").then(() => {
        this.AllDatas = this.$store.getters["order/getTableData"];
        this.showDatas = this.AllDatas.reverse();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/views/order_management.scss";
</style>
