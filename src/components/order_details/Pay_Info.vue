<template>
  <div class="container pay-info">
    <div class="row block-name">
      <div class="col-3">付款資訊</div>
      <div class="col-9"></div>
    </div>

    <div class="row">
      <div class="col-3">付款人</div>
      <div class="col-9 payer">黃玉婷</div>
    </div>

    <div class="row">
      <div class="col-3">手機</div>
      <div class="col-9 payer-phone">0912345678</div>
    </div>

    <div class="row">
      <div class="col-3">Email</div>
      <div class="col-9 payer-email">abg@abg.com</div>
    </div>

    <div class="row">
      <div class="col-3">付款方式</div>
      <div class="col-9 paying-method">信用卡</div>
    </div>

    <div class="row">
      <div class="col-3">付款狀態</div>
      <div class="col-9 pay-status">已付款 2021/11/30 22:30:24</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../assets/scss/components/Pay_Ship_info.scss";
</style>
