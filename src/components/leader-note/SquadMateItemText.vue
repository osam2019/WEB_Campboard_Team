<template>
  <v-expand-transition>
    <v-card v-show="expand" class="ma-3" outlined>
      <v-list-item>
        <v-card-subtitle>{{report.date}} / 계급: {{report.rank}}</v-card-subtitle>
      </v-list-item>
      <v-list-item>
        <v-card-text>{{report.text}}</v-card-text>
      </v-list-item>
    </v-card>
  </v-expand-transition>
</template>

<script>
export default {
  props: {
    report: Object
  },
  data() {
    return {
      expand: false
    };
  },
  created() {
    setTimeout(() => {
      this.expand = true;
    });
  }
};
</script>

<style>
</style>