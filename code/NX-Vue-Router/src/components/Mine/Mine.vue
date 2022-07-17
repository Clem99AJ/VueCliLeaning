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
export default {
  name: "Mine"
}
</script>

<style scoped>
  @import "Mine.css";
</style>