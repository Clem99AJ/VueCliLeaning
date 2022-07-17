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
          <router-link :to="'/news/' + newsId">新闻</router-link>
      </div>
      <!--路由出口-->
      <router-view></router-view>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import router from "./router";
  import {ref} from "vue";
  export default {
    setup(){
      const newsId = ref('NX001')
      /*用于跳转页面*/
      const home = ()=>{
          /*router.push('/home')*/
          router.replace('/home')
      }
      const mine = ()=>{
          /*router.push('/mine')*/
          router.replace('/mine')
      }
      return{
        newsId,
        home,
        mine
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
