<template>
  <div>
      <tool-bar></tool-bar>
      <Calander></Calander>
      <AddTodo></AddTodo>
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import Calander from '../components/Calander.vue';
import AddTodo from '../components/AddTodo.vue';
export default {
  components: {
    ToolBar,Calander,AddTodo
  },
}
</script>

<style>

</style>