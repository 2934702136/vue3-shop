//createRouter  创建路由实例
//createWebHashHistory  hash模式  地址上有#
//createWebHistory history模式
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductCart from "../views/ProductCart.vue";
import Home from "../views/Home.vue";
//配置项，配置路由地址和路由组件的对应关系
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product-list",
    name: "product-list",
    component: ProductList,
  },
  {
    path: "/product-detail/:id",
    name: "product-detail",
    component: ProductDetail,
  },
  {
    path: "/product-cart",
    name: "product-cart",
    component: ProductCart,
  },
];
// 创建路由实例，导入配置项和模式
const router = createRouter({
  history: createWebHistory("import.meta.env.BASE_URL"), //模式
  routes, //配置项
});
// 导出路由实例
export default router;
