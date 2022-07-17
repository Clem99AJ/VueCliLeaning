<template>
  <div id="news">
    <p>新闻详情</p>
    <p>新闻的id:{{$route.params.id}}</p>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "News",
  setup(){
    const route = useRouter()

  }
}
</script>

<style scoped>
  @import "News.css";
</style>