<template>
  <div class="home">
    <el-menu
      class="el-menu-demo"
      mode="vartical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/product-list">商品列表</el-menu-item>
      <el-menu-item index="/product-detail">商品详情</el-menu-item>
      <el-menu-item index="/product-cart">购物车</el-menu-item>
    </el-menu>
    <div class="content">
      <div class="header">
        <div class="auth-buttons">
          <el-button v-if="!isLoggedin" @click="showLoginForm">登陆</el-button>
          <el-button v-if="!isLoggedin" @click="showRegisterForm"
            >注册</el-button
          >
          <span v-else>欢迎, {{ username }}!</span>
        </div>
        <div class="content-logo">
          <img src="@/assets/logo.png" />
          <div class="search">
            <el-input
              class="search-input"
              type="text"
              v-model="input"
              placeholder="请输入搜索"
            />
            <el-button @click="handleSelect">搜索</el-button>
          </div>
        </div>
      </div>
      <router-view />
      <div class="banner">
        <el-carousel class="banner-img">
          <el-carousel-item v-for="item in bannerImg">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <footer>
        <div class="footer-item">
          <div>协议规则</div>
          <div>新手上路</div>
          <div>付款方式</div>
          <div>店铺特色</div>
        </div>
        <div class="footer-item"><div>协议规则</div></div>
        <div class="footer-item"><div>协议规则</div></div>
        <div class="footer-item"><div>协议规则</div></div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const input = ref();
const router = useRouter();

const handleSelect = (val) => {
  router.push(val);
};
const bannerImg = ref([
  { url: "src/assets/img1.jpg" },
  { url: "../src/assets/img2.jpg" },
  { url: "../src/assets/img3.jpg" },
]);
</script>

<style scoped lang="scss">
.home {
  display: flex;
  width: 100%;
  height: 100vh;
}
.el-menu-demo {
  text-align: center;
  width: 200px;
}
.content {
  flex: 1;
}
.auth-buttons {
  background-color: black;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 10px;
}
.search {
  border: 1px solid red;
  border-radius: 4px;
  height: 32px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  :deep(.el-input__wrapper) {
    border: none !important;
    box-shadow: initial !important;
  }
  .el-button {
    height: 32px !important;
    background-color: red;
    color: white;
  }
}
.search-input {
  // height: 32px;
}
.content-logo {
  // margin-top: -50px;
  display: flex;
}
.banner-img {
  background-color: green;
}
.banner {
  img {
    width: 100%;
    height: 100%;
  }
}
footer {
  background-color: white;
  height: 50px;
  display: flex;
  width: 100%;
}
.footer-item {
  flex: 1;
}
</style>
