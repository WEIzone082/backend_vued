<template>
  <div class="order-items-detail container">
    <div class="row items-th">
      <div class="col-3 item">商品</div>
      <div class="col-1 item-size">直徑</div>
      <div class="col-4"></div>
      <div class="col-1 price">價格</div>
      <div class="col-1 quantity">數量</div>
      <div class="col-2 total">金額</div>
    </div>

    <div class="row items">
      <div class="col-3 item">
        <img src="../../assets/img/order-detail.png" alt="" class="item-pic" />
        <p class="item-name">砂點白釉杯</p>
      </div>
      <div class="col-1 item-size">13mm</div>
      <div class="col-4"></div>
      <div class="col-1 price">NT$500</div>
      <div class="col-1 quantity">1</div>
      <div class="col-2 total">NT$1000</div>
    </div>

    <div class="row total-row">
      <div class="col-9"></div>
      <div class="col-1">小計</div>
      <div class="col-2 order-total">NT$6666</div>
    </div>

    <div class="row shipping-row">
      <div class="col-9"></div>
      <div class="col-1">運費</div>
      <div class="col-2 order-shipping">NT$9999</div>
    </div>

    <div class="row sum-row">
      <div class="col-9"></div>
      <div class="col-1">總計</div>
      <div class="col-2 order-sum">NT$6969</div>
    </div>

    <div class="row costumer-note-carrier">
      <p class="note-title">買家備註</p>
      <p class="costumer-note">幹你娘機掰我幹幹幹幹幹</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../assets/scss/components/Order_Items_Details.scss";
</style>
