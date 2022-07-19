//1、引入
import {createRouter,createWebHashHistory,createWebHistory} from "vue-router/dist/vue-router";
/*

import Home from "../components/Home/Home.vue";
import Mine from "../components/Mine/Mine.vue";
import News from "../components/News/News.vue";
*/
//路由懒加载，运用了函数的思想
const Home = ()=>import(/*webpackChunkName: "Home"*/'../components/Home/Home.vue')
const Mine = ()=>import('../components/Mine/Mine.vue')
const News = ()=>import('../components/News/News.vue')
const Circle = ()=>import('../components/Circle/Circle.vue')
const MineMsg = ()=>import('../components/Mine/components/MineMsg/MineMsg.vue')
const MineOrder = ()=>import('../components/Mine/components/MineOrder/MineOrder.vue')
//2、创建路由对象
let routes = [
    /*{path:'/home',component: Home},*/
    //路由懒加载简写(括号里的注释是，打包后的名称),keepAlive也可用于是否加载缓存
    {path:'/home',name: 'Home',component:Home,meta:{title:'首页',keepAlive:true}},
    {
        path:'/mine',
        name: 'Mine',
        component: Mine,
        children:[
            {path:'msg',name:'MineMsg',component:MineMsg},
            {path:'order',name:'MineOrder',component:MineOrder}
        ],
        meta:{title:'我的'},
        /*路由独享守卫*/
        beforeEnter:(to,from)=>{
            //return false

        }
    },
    {path: '/news/:id',name:'News',component: News,meta:{title: '新闻'}},
    {path: '/circle',name:'Circle',component:Circle,meta:{title: '圈子'}},

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

/*
    全局路由的前置守卫，一般用于验证登录
    可以结合meta（源信息）来修改标题
*/
router.beforeEach((to, from, next)=>{
    console.log('从哪里来',from)
    console.log('到哪里去',to)
    //换标题
    document.title = to.meta.title;
    //放行
    next()
})

/*
* 全局路由的后置守卫
* 可以用于修改标题
* */
router.afterEach((to, from)=>{

})


//3、导出路由对象,导出后，在main.js中用
export default router

