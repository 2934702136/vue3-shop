import { createApp } from "vue";
//import { createPinia } from "pinia";
import App from "./App.vue";
import store from "./store";
import router from "./router"; //导入路由
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 全局样式

const app = createApp(App);
//const pinia = createPinia();
app.use(store);
//app.use(pinia); //使用pinia
app.use(ElementPlus);
app.use(router); //使用路由
app.mount("#app"); //挂载容器
