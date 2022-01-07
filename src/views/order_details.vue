<template>
  <div>
    <order-header :info="AllDatas"></order-header>

    <div class="order-details-wrapper">
      <div class="container block-name">
        <div class="row">訂單內容</div>
      </div>

      <div class="pay-ship-info">
        <pay-info :info="AllDatas"></pay-info>
        <ship-info :info="AllDatas"></ship-info>
      </div>

      <!-- Below is order-details -->
      <item-details :orderID = "OrderID" :shipping = "shipping" :notes="notes"></item-details>
    </div>

    <order-history></order-history>
  </div>
</template>

<script>
import ShipInfo from "../components/order_details/Ship_Info.vue";
import PayInfo from "../components/order_details/Pay_Info.vue";
import ItemDetails from "../components/order_details/Order_Items_Details.vue";
import OrderHistory from "../components/order_details/Order_History.vue";
import OrderHeader from "../components/order_details/Order_Details_Header.vue";

export default {
  components: { ShipInfo, PayInfo, ItemDetails, OrderHistory, OrderHeader },
  props: ["OrderID"],
  data(){
    return{
      AllDatas:[],
      detailDatas:[],
      shipping:0,
      notes:''
    }
  },
  created(){
    this.$store.dispatch("order/getOne", this.OrderID).then(() => {
        this.AllDatas = this.$store.getters["order/getOrderData"];
        this.shipping = parseInt(this.AllDatas.DELIVER_FEE);
        this.notes = this.AllDatas.REMARKS;
    });
  }
};
</script>

<style lang="scss">
.container {
  background-color: white;
  border-radius: 10px;
  div {
    box-sizing: border-box;
  }
  .row {
    margin: auto;
    align-items: center;
  }
}

.order-details-wrapper {
  margin: 20px 0;
  padding: 18px 15px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;

  .block-name {
    font-size: 20px;
    font-weight: 500;
    height: 40px;
  }

  .pay-ship-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}
</style>
