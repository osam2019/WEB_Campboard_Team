<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <heart-letter />
      </template>
    </tool-bar>
  </div>
</template>  

<script>
import ToolBar from "../components/ToolBar.vue";
import HeartLetter from "../components/heart-letter/HeartLetter";

export default {
  components: {
    ToolBar,
    HeartLetter
  }
};
</script>

<style >
</style>