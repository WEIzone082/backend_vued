<template>
  <div>
    <OrderNav></OrderNav>

    <div class="orders-wrapper">
      <div class="container order" v-for="order in orders" :key="order.serial">
        <div class="row g-0 order-info">
          <div class="col-2 order-no-container">
            <p>訂單編號：<span class="order-no">{{order.serial}}</span></p>
          </div>
          <div class="col-3 order-date-container">
            <p>訂單日期：<span class="order-date">{{order.date}}</span></p>
          </div>
          <div class="col-5"></div>
          <div class="col-2 order-status-container">
            <button class="btn alert-comp" disabled v-if="order.status === 'delivery'">&bull; 運送中</button>
            <button class="btn error-comp" disabled v-else-if="order.status === 'return'">&bull; 退貨中</button>
            <button class="btn success-comp" disabled v-else>&bull; 已完成</button>
          </div>
        </div>
        <div class="row g-0 order-details">
          <div class="col-3 order-items">
            <img src="../assets/img/order-detail.png" alt="" />
            <div class="order-items-detail">
              <p class="item-name">{{order.item}}</p>
              <p class="item-size">{{order.itemSpec}}</p>
              <span class="item-count">{{order.orderItems}}</span>件商品
            </div>
          </div>

          <div class="col-6 order-detail-info">
            <p class="order-total">{{order.ordersum}}</p>
            <p class="order-payer">{{order.placer}}</p>
            <p class="order-paying-method">{{order.payMethod}}</p>
            <p class="order-delivery-method">{{order.deliverMethod}}</p>
          </div>

          <div class="col-1"></div>
          <div class="col-2 detail-page-entrance">
            <button type="button" class="btn go-to-detail">
              <i class="bi bi-three-dots"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <DataFooter
      :start="DataStart"
      :end="DataEnd"
      :count="DataCount"
    ></DataFooter>
  </div>
</template>

<script>
import DataFooter from "../components/Data_Footer.vue";
import OrderNav from "../components/Order_Management_Nav.vue";

export default {
  components: { DataFooter, OrderNav },
  data: function () {
    return {
      func: false,
      checked: false,
      DataStart: 0,
      DataEnd: 0,
      DataCount: 0,
      orders: [
        {
          serial: "261201",
          date: "2021/11/30 22:30:24",
          status: "delivery",
          item: "沙點白釉杯",
          itemSpec: "18mm",
          orderItems: "2",
          ordersum: "2,700",
          placer: "王大明",
          payMethod: "信用卡",
          deliverMethod: "宅配",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/views/order_management.scss';
</style>
