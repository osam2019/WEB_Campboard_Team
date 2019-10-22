<template>
  <v-list>
    <v-list-item class="mb-4">
      <leader-note-field />
    </v-list-item>
    <div class="d-flex flex-column-reverse">
      <v-list-item class="mb-4" v-for="report in reports" :key="report.id">
        <leader-note-item :report="report" />
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