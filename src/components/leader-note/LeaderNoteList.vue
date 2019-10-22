<template>
  <v-list color="transparent">
    <v-list-item class="mb-4">
      <leader-note-field style="width: 100%" />
    </v-list-item>
    <div class="d-flex flex-column-reverse">
      <v-list-item class="mb-4" v-for="report in reports" :key="report.id">
        <leader-note-item style="width: 100%" :report="report" />
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
import LeaderNoteField from "./LeaderNoteField";
import LeaderNoteItem from "./LeaderNoteItem";
export default {
  components: {
    LeaderNoteItem,
    LeaderNoteField
  },
  computed: {
    reports() {
      return this.$store.state.reports;
    }
  },
  methods: {}
};
</script>

<style>
</style>