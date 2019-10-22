<template>
  <v-expand-transition>
    <v-card v-show="initialTransition" raised>
      <v-list>
        <v-list-item>
          <v-card-title>{{squadMate.name}}</v-card-title>
          <v-spacer />
          <v-btn icon @click="toggleExpand">
            <v-icon v-show="!expand">mdi-chevron-down</v-icon>
            <v-icon v-show="expand">mdi-chevron-up</v-icon>
          </v-btn>
        </v-list-item>
        <v-expand-transition>
          <div v-show="expand">
            <squad-mate-item-text
              v-for="report in squadMate.reports"
              :key="report.id"
              :report="report"
            />
          </div>
        </v-expand-transition>
      </v-list>
    </v-card>
  </v-expand-transition>
</template>

<script>
import SquadMateItemText from "./SquadMateItemText";
export default {
  components: {
    SquadMateItemText
  },
  props: {
    squadMate: Object
  },
  data() {
    return {
      initialTransition: false,
      expand: true
    };
  },
  created() {
    setTimeout(() => {
      this.initialTransition = true;
    });
  },
  methods: {
    toggleExpand() {
      this.expand = !this.expand;
    }
  }
};
</script>

<style>
</style>