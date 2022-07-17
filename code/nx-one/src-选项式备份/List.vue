<template>
    <ul class="todo-main" v-for="(todo,index) in todos" v-bind:key="index">
      <Item
          v-bind:todo="todo"
          v-bind:index="index"
          v-bind:delTodo="delTodo"
      ></Item>

    </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "List",
  props:{
    todos: {Array},
    delTodo:Function
  },
  components:{
    Item
  }
}
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    /*设置四个边框的样式*/
    bordr:1px solid #ddd;
    /*给元素添加圆角边框*/
    border-radius: 4px;
    /*左内边距*/
    padding-left: 5px;
    /*上外边距*/
    margin-top: 10px;
  }

</style>