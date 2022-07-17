<template>
  <!--
    这里的
    mouseenter的作用，鼠标进入时，做对应的操作
    mouseleave的作用，鼠标出去时，做对应的操作
  -->
  <li
      v-on:mouseenter="dealShow(true)"
      v-on:mouseleave="dealShow(false)"
      v-bind:style="{backgroundColor:bgColor}"
  >
    <label>
      <input type="checkbox" v-model="todo.finished">
      <span>{{ todo.title }}</span>
    </label>
    <button v-show="isShowDelBtn" class="btn btn-warning" v-on:click="delItem(index)">删除</button>
  </li>

</template>

<script>
import {inject,ref} from "vue";

export default {
  name: "Item",
  setup(props,context){
    //1、订阅删除方法
    const delTodo = inject('delTodo')
    //2、定义属性和方法
    let isShowDelBtn = ref(false)
    let bgColor = ref('#fff')

    const dealShow = (isShow)=>{
      isShowDelBtn.value = isShow
      bgColor.value = isShow ? '#ddd' : '#fff'
    }
    const delItem = ()=>{
      if(window.confirm('Are you sure want to delete me')){
        delTodo(props.index)
      }
    }
    return{
      delTodo,
      isShowDelBtn,
      bgColor,
      dealShow,
      delItem
    }
  },
  props: {
    todo: {},
    index:Number
  },
  methods: {


  }
}
</script>

<style scoped>
  li {
    /*设置列表项前面的图像，就是平时默认哪个小点点*/
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    /*设置下边框样式*/
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    /*设置一些不同的光标*/
    cursor: pointer;
  }

  li label li input {
    /*设置元素的垂直对齐方式*/
    vertical-align: middle;
    /*外边距*/
    margin-right: 6px;
    /*固定方式*/
    position: relative;
    top: -1px;
  }

  li button {
    /*浮动样式*/
    float: right;

    /*外边距*/
    margin-top: 3px;
    height: 30px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    /*边框样式*/
    border-bottom: none;
  }
</style>