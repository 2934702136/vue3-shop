<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/product-list">商品列表</router-link>
      <router-link to="/product-detail/:id">商品详情</router-link>
      <router-link to="/product-cart">购物车</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
