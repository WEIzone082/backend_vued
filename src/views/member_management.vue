<template>
  <div>
    <PageNav PageName="會員管理" :WithFunc="func"></PageNav>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col">會員編號</th>
          <th scope="col">帳號</th>
          <th scope="col">姓名</th>
          <th scope="col">手機</th>
          <th scope="col">地址</th>
          <th scope="col">帳號狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="table-rows"
          v-for="member in AllDatas"
          :key="member.MEMBER_ID"
        >
          <th scope="row">{{ member.MEMBER_ID }}</th>
          <td>{{ member.EMAIL }}</td>
          <td>{{ member.NAME }}</td>
          <td>{{ member.PHONE }}</td>
          <td>{{ member.ADDRESS }}</td>
          <td>
            <AccToggler
              :MemberID="member.MEMBER_ID"
              :status="member.STATUS"
              :MemberName="member.NAME"
              :displayAPI="displayAPI"
              @refresh="refresh()"
            ></AccToggler>
          </td>
        </tr>
      </tbody>
    </table>
    <DataFooter
      :count="DataCount"
      :DPP="DPP"
      :start="start"
      :end="end"
      :pages="pages"
    ></DataFooter>
  </div>
</template>

<script>
import DataFooter from "../components/Data_Footer.vue";
import PageNav from "../components/Page_Nav.vue";
import AccToggler from "../components/member_management/acc_status_toggler.vue";

export default {
  components: { DataFooter, PageNav, AccToggler },
  data: function () {
    return {
      func: false,
      // Data Per Page
      DPP: 10,
      start: 0,
      end: 0,
      pages: 0,
      DataCount: 0,
      AllDatas: [],
      displayAPI:'fetch.php'
    };
  },
  methods: {
    refresh:function(){
      this.$store.dispatch('member/getAll',this.displayAPI);
      this.AllDatas = this.$store.getters['member/getTableData'];
    }
  },
  created() {
    this.refresh();
  },
  // beforeUpdate: function () {
  //   this.initialize();
  // },
};
</script>

<style></style>
