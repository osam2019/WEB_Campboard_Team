<template>
  <div style="width: 100%" class="d-flex">
    <leader-note-list style="width: 60%" />
    <squad-mate-list style="width: 40%" />
  </div>
</template>

<script>
import LeaderNoteList from "./LeaderNoteList";
import SquadMateList from "./SquadMateList";

export default {
  components: {
    LeaderNoteList,
    SquadMateList
  }
};
</script>

<style>
</style>