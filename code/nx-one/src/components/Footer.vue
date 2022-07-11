<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-on:click="selectedAllTodo()">
    </label>
    <span>
      <span>已完成0件</span>/2件
    </span>
    <button class="todo-footer" >清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Foot",
  props:{
    todos:Array,
    selectedAllTodo:Function
  },
  methods:{
    selectedAll(){

    }
  }
}
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .todo-footer label input{
    position:relative;
    top:-1px;
    vertical-align:middle;
  }
  .todo-footer button{
    float: right;
    margin-top: 5px;
    height: 30px;
   /*让按钮中的值达到居中的效果*/
    vertical-align: middle;
    line-height: 2px;

    color: #fff;
    background-color: paleturquoise;
    /*阴影和圆角*/
    box-shadow: inset 0 1px 0 rgba(25,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;

    border: none;
  }
  .todo-footer button:hover{
    background-color: pink;
    cursor: pointer;
  }
</style>