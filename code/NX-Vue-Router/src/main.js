import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
//引入路由对象
import router from "./router/index.js";

const app = createApp(App);
//使用路由
app.use(router)
app.mount('#app')