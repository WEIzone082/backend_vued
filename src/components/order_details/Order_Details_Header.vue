<template>
  <div class="container g-0 order-info-wrapper">
    <div class="row order-info">
      <div class="col-3 order-id-date">
        <div>
          <p>訂單編號：<span class="oder-id">550201</span></p>
          <p class="order-date">2021/11/30 22:30:24</p>
        </div>
      </div>
      <div class="col-2">
        <button class="btn order-status">已出貨</button>
      </div>
      <div class="col-2"></div>
      <div class="col-3 order-total">
        <p>訂單總金額 <span>2,700</span></p>
      </div>
      <div class="col-2">
        <button class="btn cancel-order error-comp">取消訂單</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
