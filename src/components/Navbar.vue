<template>
    <nav>
        <div class="nav-logo">
            <img src="../assets/img/Frame.png" alt="">
        </div>

        <div class="nav-pages-wrapper">

            <router-link :to="{ name:'members'}" class="nav-pages">
                <span class="page-icon bi bi-person"></span>
                <span>會員管理</span>
            </router-link>

            <router-link :to="{ name:'art'}" class="nav-pages">
                <span class="page-icon bi bi-palette"></span>
                <span>藝術陶管理</span>
            </router-link>

            <router-link :to="{ name:'products'}" class="nav-pages">
                <span class="page-icon bi bi-cup"></span>
                <span>生活陶管理</span>
            </router-link>

            <router-link :to="{ name:'course'}" class="nav-pages">
                <span class="page-icon bi bi-journals"></span>
                <span>課程管理</span>
            </router-link>

            <router-link :to="{ name:'orders'}" class="nav-pages">
                <span class="page-icon bi bi-file-earmark-spreadsheet"></span>
                <span>訂單管理</span>
            </router-link>

            <a href="#" class="nav-pages" data-bs-toggle="modal" data-bs-target="#LogoutModal">
                <span class="page-icon bi bi-box-arrow-right"></span>
                <p>登出</p>
            </a>
        </div>
    </nav>


</template>

<style lang="scss" scoped>

    @import '../assets/scss/components/Navbar.scss';

    nav {
        a {
            &.router-link-exact-active {
            background: rgba($color: #ffffff, $alpha: 0.1);
            }
        }
    }
    
</style>