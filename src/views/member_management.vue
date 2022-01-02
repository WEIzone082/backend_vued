<template>
  <div>
    <PageNav PageName="會員管理" :WithFunc="func" :Checked="checked"></PageNav>
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
        <tr class="table-rows" v-for="data in datas" :key="data.MEMBER_ID">
          <th scope="row">{{ data.MEMBER_ID }}</th>
          <td>{{ data.EMAIL }}</td>
          <td>{{ data.NAME }}</td>
          <td>{{ data.PHONE }}</td>
          <td>{{ data.ADDRESS }}</td>
          <td>
            <div class="dropdown account-toggler">
              <button
                class="btn dropdown-toggle success-comp"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                &bull; 啟用中
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item act-acc">啟用</a></li>
                <li><a class="dropdown-item ban-acc">停權</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <DataFooter
      :start="DataStart"
      :end="DataEnd"
      :count="DataCount"
    ></DataFooter>
  </div>
</template>

<script>
import DataFooter from "../components/Data_Footer.vue";
import PageNav from "../components/Page_Nav.vue";

export default {
  components: { DataFooter, PageNav },
  data: function () {
    return {
      func: false,
      checked: false,
      DataStart: 0,
      DataEnd: 0,
      DataCount: 0,
      boxes: [],
      members: [
        {
          serial: "000001",
          email: "66666@gmail.com",
          memberName: "王小明",
          phone: "0912345678",
          address: "台中市西屯區台灣大道二段960號",
        },
      ],
      datas: [],
    };
  },
  methods: {
    getAll: function () {
      this.axios
        //第一行先設定要Post的地址
        .post("http://localhost/Vue/fetch.php", {
          // 以下為傳進php的值
          action: "fetchall",
          page: "member",
        })
        .then((response) => {
          // 把response轉到data
          this.datas = response.data;
        });
    },
  },
  watch: {
    boxes() {
      if (this.boxes.length > 0) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  created: function () {
    this.getAll();
  },
};
</script>

<style></style>
