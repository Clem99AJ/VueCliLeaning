<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isChecked">
    </label>
    <span>
      <span>已完成{{finishedCount}}件</span>/
      <span>{{todos.length}}件</span>
      </span>
    <button
        class="todo-footer"
        v-on:click="delFinishedTodos()"
    >清除已完成任务</button>
  </div>
</template>

<script setup>
  //unref解构
  import {inject,computed,reactive,unref} from "vue";
  //1、订阅
  const todos = inject('todos')
  const selectedAllTodo = inject('selectedAllTodo')
  const  delFinishedTodos= inject('delFinishedTodos')
  //2、定义计算属性
  //计算勾选了几个
  const finishedCount = computed(()=>{
    /*
      * reduce((默认值,每一个数据)=>{
      *
      * },初始值)
      * */
    /*return this.todos.reduce((total,todo)=>{
      return total + (todo.finished ? 1 : 0)
    },0)*/

    //等效于遍历了一遍
    let total = 0
    todos.forEach((todo)=>{
      total += (todo.finished ? 1 : 0)
    })
    return total
  })
  //判断有没有全选
  const isChecked = computed({
    get(){
      //return finishedCount.value === todos.length &&todos.length > 0
      //解构
      return unref(finishedCount) === todos.length &&todos.length > 0
    },
    set(value){
      selectedAllTodo(value)
    }
  })
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