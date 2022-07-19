<template>
  <div id="circle">
    圈子
    <p>{{$route.query}}</p>

  </div>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
  name: "Circle",
  setup(){
    let route = useRoute()
    console.log(route.query);
  }
}
</script>

<style scoped>
@import "Circle.css";
</style>