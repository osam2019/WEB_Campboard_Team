<template>
  <v-list-item>{{ report.title }}</v-list-item>
</template>

<script>
export default {
  props: {
    id: Number,
    report: Object
  }
};
</script>

<style>
</style>