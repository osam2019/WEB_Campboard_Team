<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <leader-note-list></leader-note-list>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import LeaderNoteList from "../components/LeaderNoteList";

export default {
  components: { ToolBar, LeaderNoteList }
};
</script>

<style>
</style>