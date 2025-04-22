import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //导入路由
import store from "./store";
// 全局样式
import "./styles/main.scss";

const app = createApp(App);
app.use(store);
app.use(router); //使用路由
app.mount("#app");
