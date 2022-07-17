<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
    </div>
  </div>

</template>
<script>
//1、引入组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from "./components/Footer.vue"
import {provide,reactive} from "vue";

export default {
  setup(){
    //2、定义数据
    let todos = reactive([
      {title:'Play basketball',finished:false},
      {title:'Play something',finished: false}
    ])
    //3、提供给子组件使用的方法
    //根据索引删除数据
    const delTodoWithIndex = (index)=>{
      todos.splice(index,1)
    }
    //向数组中添加新对象
    const addTodo = (todo)=>{
      todos.push(todo)
    }
    //选中所有
    const selectedAllTodo = (isChecked)=>{
      /*循环遍历所有*/
      todos.forEach((todo)=>{
        todo.finished = isChecked
      })
    }
    //删除选中的
    const delFinishedTodos = ()=>{
      //因为filter函数是返回一个新的数组，不具有响应式，所要换方法
      /*todos = todos.filter((todo)=>{
        return !todo.finished
      })*/
      for(let i = todos.length -1;i >= 0;i--){
        if(todos[i].finished){
          todos.splice(i,1)
        }
      }

    }
    //发布
    provide('todos',todos)
    provide('delTodo',delTodoWithIndex)
    provide('addTodo',addTodo)
    provide('selectedAllTodo',selectedAllTodo)
    provide('delFinishedTodos',delFinishedTodos)

  },
  components:{
    Header,
    List,
    Footer
  }
}
</script>
<style>
.btn {
  display: inline-block;
  padding: 8px 10px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(25, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-warning {
  color: #fff;
  background-color: paleturquoise;
  border: none;
}

.btn-warning:hover {
  color: #fff;
  background-color: pink;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
