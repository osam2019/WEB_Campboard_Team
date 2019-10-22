<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <leader-note />
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import LeaderNote from "../components/LeaderNote";

export default {
  components: { ToolBar, LeaderNote }
};
</script>

<style>
</style>