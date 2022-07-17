<template>
  <div class="todo-header">
    <input
        type="text"
        placeholder="Enter your today housework"
        v-model.trim="title"
        v-on:keyup.enter="addItem"
    >
  </div>
</template>
<!--新写法-->
<script setup>
  import {inject, ref} from "vue";

  //1、订阅
  const addTodo = inject('addTodo')
  //2、定义属性和方法
  let title = ref('')
  //addItem添加一条数据
  const addItem = () => {
    //1、取输入框中的内容(把两边的空格删除)
    const content = title.value
    //2、判断是否为空
    if (!content) {
      alert('输入内容不能为空')
      return
    }
    //3、生成一个todo对象
    let todo = {title:content, finished: false}
    //4、把对象添加到数组中

    addTodo(todo)
    //5、清除数据框
    title.value = ''
  }

</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}

.todo-header inpit:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
</style>