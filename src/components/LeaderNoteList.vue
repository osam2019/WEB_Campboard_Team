<template>
  <v-list>
    <v-list-item class="mb-4">
      <leader-note-field :add-report="addReport" />
    </v-list-item>
    <div class="d-flex flex-column-reverse">
      <v-list-item class="mb-4" v-for="report in reports" :key="report.id">
        <leader-note-item :id="report.id" :report="report" :remove-report="removeReport" />
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
  data() {
    return {
      reportId: 3,
      reports: [
        {
          id: 1,
          date: "2019-10-22",
          name: "병장 정영훈",
          text: "OSAM 캠프 참여 실시"
        },
        {
          id: 2,
          date: "2019-10-23",
          name: "병장 정영훈",
          text: "OSAM 캠프 참여 실시"
        },
        {
          id: 3,
          date: "2019-10-24",
          name: "병장 정영훈",
          text: "OSAM 캠프 참여 실시"
        }
      ]
    };
  },
  methods: {
    addReport({ date, name, text }) {
      this.reports.push({ id: this.reportId++, date, name, text });
    },
    removeReport({ id }) {
      this.reports.splice(this.reports.findIndex(r => r.id === id), 1);
    }
  }
};
</script>

<style>
</style>