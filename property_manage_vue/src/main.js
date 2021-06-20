import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//清除默认样式
import './assets/reset.css'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')




