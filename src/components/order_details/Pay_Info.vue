<template>
  <div class="container pay-info">
    <div class="row block-name">
      <div class="col-3">付款資訊</div>
      <div class="col-9"></div>
    </div>

    <div class="row">
      <div class="col-3">付款人</div>
      <div class="col-9 payer">{{info.BUYER}}</div>
    </div>

    <!-- <div class="row">
      <div class="col-3">手機</div>
      <div class="col-9 payer-phone">{{info.DELIVER_PHONE}}</div>
    </div>

    <div class="row">
      <div class="col-3">Email</div>
      <div class="col-9 payer-email">abg@abg.com</div>
    </div> -->

    <div class="row">
      <div class="col-3">付款方式</div>
      <div class="col-9 paying-method">{{info.PAYMENT_METHOD}}</div>
    </div>

    <div class="row">
      <div class="col-3">付款狀態</div>
      <div class="col-9 pay-status">{{PaymentStatus}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['info'],
  data(){
    return{
      PaymentStatus:''
    }
  },
  beforeUpdate(){
    if(this.info.PAYMENT_STATUS === '0'){
      this.PaymentStatus = '未付款'
    }else{
      this.PaymentStatus = '已付款'
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/components/Pay_Ship_info.scss";
</style>
