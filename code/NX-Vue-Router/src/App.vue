<template>
  <div>
      <!--导航-->
      <div id="nav">
          <!--
              router-link相当于a标签
              to属性是跳转去哪
              active-class是选中样式
          -->
          <!--
              <router-link to="/home" active-class="current">首页</router-link>
              <router-link to="/mine" active-class="current">我的</router-link>
          -->

          <!--统一配置-->
          <!--replace属性用于导航后不会留下历史记录，即不可以返回-->
          <!--
            <router-link to="/home" replace>首页</router-link>
            <router-link to="/mine" replace>我的</router-link>
          -->
          <!--
              通过代码方式进行跳转
          -->
          <!--
              <button @click="home">首页</button>
              <button @click="mine">我的</button>
          -->
          <!--
              动态路由
          -->
          <router-link to="/home">首页</router-link>
          <router-link to="/mine">我的</router-link>
          <!--
            <router-link :to="'/news/' + newsId">新闻</router-link>
            <router-link :to="{path:'/circle',query:{name:'楠溪泽岸',site:'mi.com',age:10}}">圈子</router-link>
           -->
          <button @click="news">新闻</button>
          <button @click="circle">圈子</button>
      </div>


      <!--路由出口-->
      <!--<router-view></router-view>-->

      <!--保持缓存-->
      <router-view v-slot="{ Component }">
        <!--
            只让某一页面加载include
            可以用exclude来让包裹的某一个页面不缓存
            多个的话exclude="News,Circle"或exclude="['News',Circle]"
        -->
        <keep-alive exclude="News">
          <component :is="Component" />
        </keep-alive>
      </router-view>


  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import router from "./router";
  import {ref} from "vue";
  export default {
    setup(){
      // const router = useRouter()
      const newsId = ref('NX001')
      /*用于跳转页面*/
      const home = ()=>{
          router.push('/home')
          //replace属性用于导航后不会留下历史记录，即不可以返回
          /*router.replace('/home')*/
      }
      const mine = ()=>{
          router.push('/mine')
          /*router.replace('/mine')*/
      }
      const news = ()=>{
          router.push('/news/' + newsId.value)
      }
      const circle = ()=>{
          router.push({
            path:'/circle',
            query:{name:'楠溪泽岸',site:'mi.com',age:20}
          })
      }
      return{
        newsId,
        home,
        mine,
        news,
        circle
      }
    }
  }
</script>

<style>
  /*原本的方法*/
  .current{
    font-size: 18px;
    color: pink;
    font-weight: bolder;
  }
  /*统一配置的方法*/
  .router-link-active{
    font-size: 18px;
    color: plum;
    font-weight: bolder;
  }
</style>
