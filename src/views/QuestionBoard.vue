<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <post-list></post-list>
        <template v-if="!addToggle">
          <v-btn
            style="bottom: 8%; right: 3%"
            fab
            bottom
            fixed
            @click="toggle"
            class="mx-2"
            dark
            color="indigo"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <post-new-item :toggle="toggle"></post-new-item>
        </template>
      </template>
    </tool-bar>
  </div>
</template>  

<script>
import ToolBar from "../components/ToolBar.vue";
import PostList from "../components/question-board/PostList.vue";
import PostNewItem from "../components/question-board/PostNewItem.vue";

export default {
  components: {
    ToolBar,
    PostList,
    PostNewItem
  },
  data() {
    return {
      addToggle: false
    };
  },
  methods: {
    toggle() {
      this.addToggle = !this.addToggle;
    }
  }
};
</script>

<style>
</style>