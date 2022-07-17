//1、引入
import {createRouter,createWebHashHistory,createWebHistory} from "vue-router/dist/vue-router";
/*

import Home from "../components/Home/Home.vue";
import Mine from "../components/Mine/Mine.vue";
import News from "../components/News/News.vue";
*/
//路由懒加载，运用了函数的思想
const Home = ()=>import('../components/Home/Home.vue')
const Mine = ()=>import('../components/Mine/Mine.vue')
const News = ()=>import('../components/News/News.vue')
//2、创建路由对象
let routes = [
    /*{path:'/home',component: Home},*/
    //路由懒加载简写(括号里的注释是，打包后的名称)
    {path:'/home',component:import(/*webpackChunkName: "Home"*/'../components/Home/Home.vue')},
    {path:'/mine',component: Mine},
    {path: '/news/:id',component: News},


    //路由重定向
    {path:'/',redirect:'/home'}
]

const router = createRouter({
    //这两个是必须传递的
    history:createWebHashHistory(),//可切换createWebHistory
    routes,
    //可选项(可以改变，.router-link-active的选项)
    linkActiveClass:'current'
})

//3、导出路由对象,导出后，在main.js中用
export default router

