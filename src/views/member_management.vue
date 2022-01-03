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
          v-for="member in ShowDatas"
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
              @refresh="getAll()"
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
      @changeData="changeData()"
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
      DPP: 15,
      start: 0,
      end: 0,
      pages: 0,
      DataCount: 0,
      AllDatas: [],
      ShowDatas: [],
    };
  },
  methods: {
    getAll: function () {
      this.axios
        //Set address to send post
        .post("http://localhost/Vue/fetch.php", {
          // datas to send into php
          action: "fetchall",
          page: "member",
        })
        .then((response) => {
          // get numbers of data
          this.DataCount = response.data.length;

          // send All datas into AllDatas
          this.AllDatas = response.data;

          // slice the datas for the first page into ShowDatas
          this.ShowDatas = this.AllDatas.slice(0, this.DPP);
        });
    },
    initialize: function () {
      this.pages = Math.ceil(this.DataCount / this.DPP);
      this.start = 1;
      this.end = this.DataCount > this.DPP ? this.DPP : this.DataCount;
    },
    changeData: function (start, end) {
      this.ShowDatas = this.AllDatas.slice(start - 1, end);
      this.start = start;
      this.end = end - 1;
    },
  },
  created: function () {
    this.getAll();
  },
  beforeUpdate: function () {
    this.initialize();
  },
};
</script>

<style></style>
