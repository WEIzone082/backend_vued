<template>
  <div class="container ship-info">
    <div class="row block-name">
      <div class="col-3">寄送資訊</div>
      <div class="col-9"></div>
    </div>

    <div class="row">
      <div class="col-3">收件人</div>
      <div class="col-9 ship-to">{{info.DELIVER_NAME}}</div>
    </div>

    <div class="row">
      <div class="col-3">手機</div>
      <div class="col-9 contact-num">{{info.DELIVER_PHONE}}</div>
    </div>

    <div class="row">
      <div class="col-3">Email</div>
      <div class="col-9 contact-mail">{{info.DELIVER_EMAIL}}</div>
    </div>

    <div class="row">
      <div class="col-3">地址</div>
      <div class="col-9 shipping-address">
        {{info.DELIVER_ADDRESS}}
      </div>
    </div>

    <div class="row">
      <div class="col-3">運送方式</div>
      <div class="col-9 shipping-method">{{info.DELIVER_METHOD}}</div>
    </div>

    <div class="row"></div>
  </div>
</template>

<script>
export default {
  props:['info']
};
</script>

<style lang="scss">
@import "../../assets/scss/components/Pay_Ship_info.scss";
</style>
