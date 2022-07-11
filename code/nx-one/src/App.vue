<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header
          v-bind:addTodo="addTodo"
      ></Header>
      <List
          v-bind:todos="todos"
          v-bind:delTodo="delTodoWithIndex"
      >
      </List>
      <Footer
          v-bind:selectedAllTodo="selectedAllTodo"
      ></Footer>
    </div>
  </div>

</template>
<script>
//1、引入组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from "./components/Footer.vue"
  export default {
    name:'app',
    data(){
      return{
        todos:[
            {title:'Play basketball',finished:false},
            {title:'Play something',finished: false}
        ]
      }
    },
    components:{
        Header,
        List,
        Footer
    },
    methods:{
      //根据索引删除数据
      delTodoWithIndex(index){
        this.todos.splice(index,1)
      },
      //向数组中添加新对象
      addTodo(todo){
        this.todos.push(todo)
      },
      //选中所有
      selectedAllTodo(isChecked){
        this.todos.forEach((todo)=>{
          todo.finished = isChecked
        })
      },
      //删除所有
      delFinishedTodos(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.finished
        })
      }
    }
  }
</script>
<style>
  .btn{
    display: inline-block;
    padding: 8px 10px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(25,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;
  }
  .btn-warning{
    color: #fff;
    background-color: paleturquoise;
    border:none;
  }
  .btn-warning:hover{
    color: #fff;
    background-color: pink;
  }
  .btn:focus{
    outline: none;
  }
  /*app*/
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
