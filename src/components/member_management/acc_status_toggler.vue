<template>
  <div class="dropdown account-toggler">
    <button
      class="btn dropdown-toggle success-comp"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-if="status == 0"
    >
      &bull; 啟用中
    </button>
    <button
      class="btn dropdown-toggle error-comp"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-if="status == 1"
    >
      &bull; 已停權
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <a class="dropdown-item" v-if="status == 1" @click="ToggleAcc('acc')"
          >啟用</a
        >
      </li>
      <li>
        <a class="dropdown-item" v-if="status == 0" @click="ToggleAcc('ban')"
          >停權</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      fakeAcc:this.status,
    }
  },
  props: ["MemberID", "status", "MemberName","displayAPI"],
  methods: {
    ToggleAcc: function (togg) {
      let todo = togg == "ban" ? "停權" : "啟用";
      let sure = confirm(`確定對 ${this.MemberName} 的帳號進行 ${todo} ?`);
      if (sure) {
        this.$store.dispatch('member/toggle',{address:this.displayAPI,id:this.MemberID,act:togg,Member:this.MemberName})
          .then(()=>{
            setTimeout(()=>{
              this.$emit('refresh');
            },2000)
          })
        
      }
    },
  },
};
</script>

<style></style>
