<template>
  <v-list color="transparent">
    <v-list-item class="mb-4" v-for="squadMate in joinSquadMatesAndReport" :key="squadMate.id">
      <squad-mate-item style="width: 100%" :squadMate="squadMate" />
    </v-list-item>
  </v-list>
</template>

<script>
import SquadMateItem from "./SquadMateItem";

export default {
  components: {
    SquadMateItem
  },
  computed: {
    squadMates() {
      return this.$store.state.squadMates;
    },
    reports() {
      return this.$store.state.reports;
    },
    joinSquadMatesAndReport() {
      return this.$store.getters.joinSquadMatesAndReport;
    }
  }
};
</script>

<style>
</style>