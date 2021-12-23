<template>

  <div id="app">

    <Navbar></Navbar>
    <Logout></Logout>

    <div>
      <main>
        <div class="content-wrapper">
          <router-view/>
        </div>
      </main>
    </div>
    
  </div>

</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Logout from './components/LogOut_Modal.vue';

  export default{
    components:{ Navbar, Logout }
  }
</script>


<style lang="scss">
  @import "assets/scss/basics/_BACK-basics.scss";

  //import bootstrap icons
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
  
  //import Google fonts
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');
</style>
