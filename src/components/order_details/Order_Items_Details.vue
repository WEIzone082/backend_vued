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

    <div class="row items" v-for="item in AllDatas" :key="item.ORDER_DETAIL_ID">
      <div class="col-3 item">
        <img src="../../assets/img/order-detail.png" alt="" class="item-pic" />
        <p class="item-name">{{item.WORKS_NAME}}</p>
      </div>
      <div class="col-1 item-size">{{item.WORKS_RADIUS}}mm</div>
      <div class="col-4"></div>
      <div class="col-1 price">NT${{item.ORDER_DETAIL_PRICE / item.QUANTITY}}</div>
      <div class="col-1 quantity">{{item.QUANTITY}}</div>
      <div class="col-2 total">NT${{item.ORDER_DETAIL_PRICE}}</div>
    </div>

    <div class="row total-row">
      <div class="col-9"></div>
      <div class="col-1">小計</div>
      <div class="col-2 order-total">NT${{total}}</div>
      <!-- start from here, v-bind order price into this component -->
    </div>

    <div class="row shipping-row">
      <div class="col-9"></div>
      <div class="col-1">運費</div>
      <div class="col-2 order-shipping">NT${{shipping}}</div>
    </div>

    <div class="row sum-row">
      <div class="col-9"></div>
      <div class="col-1">總計</div>
      <div class="col-2 order-sum">NT${{total + shipping}}</div>
    </div>

    <div class="row costumer-note-carrier">
      <p class="note-title">買家備註</p>
      <p class="costumer-note">{{notes}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      AllDatas:[],
      ID:'',
      total:0
    }
  },
  props:['orderID','shipping','notes'],
  mounted(){
    this.ID = this.orderID
    this.$store.dispatch("order/getDetail", this.ID).then(() => {
        this.AllDatas = this.$store.getters["order/getDetailData"];
        for(let item of this.AllDatas){
          this.total = this.total + parseInt(item.ORDER_DETAIL_PRICE);
        };
    });
    
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/components/Order_Items_Details.scss";
</style>
