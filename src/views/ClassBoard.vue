<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <post-list></post-list>
      </template>
    </tool-bar>
  </div>
</template>  

<script>
import ToolBar from "../components/ToolBar.vue";
import PostList from "../components/PostList.vue";

export default {
  components: {
    ToolBar,
    PostList
  },
  data: () => ({
    //
  })
};
</script>

<style>
</style>