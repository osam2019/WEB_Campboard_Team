<template>
  <v-form ref="form" lazy-validation>
    <v-container style="background:white" class="pb-12 pt-12">
      <v-text-field v-model="name" label="메뉴" outlined shaped></v-text-field>
      <v-row>
        <v-col :key="1">
          <v-date-picker v-model="date"></v-date-picker>
        </v-col>
      </v-row>
      <v-btn @click="addEvent(name,date)" color="primary">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: ["addEvent"],
  data() {
    return {
      display: false,
      name: "",
      date: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {}
};
//overlay 통신, 데이터 통신 - start, emnd, title
</script>