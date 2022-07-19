<template>
  <div id="mine">
    <h2>我是我的</h2>

    <div class="content">
      <div class="content-nav">
        <router-link to="/mine/msg">我的消息</router-link><br>
        <router-link to="/mine/order">我的订单</router-link>
      </div>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import {onBeforeRouteLeave,onBeforeRouteUpdate} from 'vue-router'
import {onMounted,onUnmounted,onActivated,onDeactivated} from "vue";

export default {
  name: "Mine",
  setup(){
    /*这两个一般用不到*/
    /*onBeforeRouteLeave((to,from)=>{

    })
    onBeforeRouteLeave((to,from)=>{

    })*/
    onMounted(()=>{
      console.log('我的-----onMounted');
    })
    onUnmounted(()=>{
      console.log('我的-----onUnmounted');
    })
    onActivated(()=>{
      console.log('我的-----onActivated');
    })
    onDeactivated(()=>{
      console.log('我的-----onDeactivated');
    })
  }
}
</script>

<style scoped>
  @import "Mine.css";
</style>