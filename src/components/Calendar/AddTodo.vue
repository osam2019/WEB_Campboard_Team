<template>
  <v-form ref="form" lazy-validation>
    <v-container style="background:white" class="pb-12 pt-12">
      <v-text-field v-model="name" label="일정내용" outlined shaped></v-text-field>
      <v-row>
        <v-col :key="1">
          <v-date-picker v-model="date"></v-date-picker>
        </v-col>
        <v-col :key="2">
          <v-time-picker v-model="start"></v-time-picker>
        </v-col>
        <v-col :key="3">
          <v-time-picker v-model="end"></v-time-picker>
        </v-col>
      </v-row>
      <v-btn @click="addEvent(name,date,start,end)" color="primary">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: ["addEvent"],
  data() {
    return {
      name: "",
      date: new Date().toISOString().substr(0, 10),
      start: "",
      end: ""
    };
  },
  methods: {}
};
//overlay 통신, 데이터 통신 - start, emnd, title
</script>