<template>
  <div class="container g-0 order-info-wrapper">
    <div class="row order-info">
      <div class="col-3 order-id-date">
        <div>
          <p>
            訂單編號：<span class="oder-id">{{ info.ORDER_ID }}</span>
          </p>
          <p class="order-date">{{info.ORDER_DATETIME}}</p>
        </div>
      </div>
      <div class="col-2">
        <button class="btn alert-comp" v-if="info.ORDER_STATUS_ID == '0' ">進行中</button>
        <button class="btn success-comp" v-if="info.ORDER_STATUS_ID == '1' ">已完成</button>
      </div>
      <div class="col-2"></div>
      <div class="col-3 order-total">
        <p>訂單總金額： <span>{{info.ORDER_PRICE_TOTAL}}</span></p>
      </div>
      <div class="col-2">
        <button class="btn cancel-order error-comp">取消訂單</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/basics/_BACK-colors.scss";

.order-info {
  height: 100px;

  .order-id-date,
  .order-total {
    font-size: 20px;
    font-weight: 400;
    .order-date {
      margin-top: 15px;
      font-size: 16px;
      color: #666666;
    }
  }

  .order-status {
    background-color: $clr-alert;
    color: white;
  }
}
</style>
