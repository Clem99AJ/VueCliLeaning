<template>
    <div class="todo-header">
      <input
          type="text"
          placeholder="Enter your today housework"
          v-model="title"
          v-on:keyup.enter="addItem"
      >
    </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      title:''
    }
  },
  props:{
    addTodo:Function
  },
  methods:{
    //addItem添加一条数据
    addItem(){
      //1、取输入框中的内容(把两边的空格删除)
      const title = this.title.trim()
      //2、判断是否为空
      if(!title){
        alert('输入内容不能为空')
        return
      }
      //3、生成一个todo对象
      let todo = {title:this.title,finished:false}
      //4、把对象添加到数组中
      console.log(this.addTodo)
      this.addTodo(todo)
      //5、清除数据框
      this.title = ''
    }
  }
}
</script>

<style scoped>
  .todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
  }
  .todo-header inpit:focus{
    outline:none;
    border-color: rgba(255,0,0,0.8);
    box-shadow: inset 0 1px 1px rgba(255,0,0,0.075),0 0 8px rgba(255,0,0,0.6);
  }
</style>