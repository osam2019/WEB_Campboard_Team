<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <div style="position:relative; top:-7%; width: 100%; height:100%">
          <Calander></Calander>
        </div>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar.vue";
import Calander from "../components/Calander.vue";
export default {
  components: {
    ToolBar,
    Calander
  }
};
</script>

<style>
</style>