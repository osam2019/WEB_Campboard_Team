<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <LeaderNote />
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import LeaderNote from "../components/leader-note/LeaderNote";

export default {
  components: { ToolBar, LeaderNote }
};
</script>

<style>
</style>