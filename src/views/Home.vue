<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="vartical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">商品列表</el-menu-item>
      <el-menu-item index="3">商品详情</el-menu-item>
      <el-menu-item index="4">购物车</el-menu-item>
    </el-menu>
    <router-view />
    <div class="contant">
      <div class="auth-buttons">
        <el-button v-if="!isLoggedin" @click="showLoginForm">登陆</el-button>
        <el-button v-if="!isLoggedin" @click="showRegisterForm">注册</el-button>
        <span v-else>欢迎, {{ username }}!</span>
      </div>
    </div>
    <input
      class="search-input"
      type="text"
      v-model="input"
      style="height: 20px; width: 100px"
      placeholder="请输入搜索"
    >
    <button style="height: 26px" @click="handleSelect">搜索</button>
    </input>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const input = ref();
const router = useRouter();

const handleSelect = (val) => {
  router.push({ val });
};
</script>

<style scoped lang="scss">
#app {
  display: flex;
  height: 100vh;
}
.el-menu-demo {
  margin-top: 100px;
  text-align: center;
  width: 200px;
  height: 400px;
}
.contant {
  position: relative;
  min-height: 100vh;
}
.auth-buttons {
  position: absolute;
  top: 20px;
  right: -1000px;
  display: flex;
  gap: 10px;
}
.search-input {
  display: flex;
  margin: 50px auto;
  justify-content: center;
}
</style>
