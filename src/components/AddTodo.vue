<template>
  <v-form ref="form" lazy-validation>
    <v-container>
<<<<<<< HEAD
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
    </v-container>

    <v-btn @click="addEvent(name,date,start,end)">Submit</v-btn>
=======
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field v-model="title" label="일정내용" outlined shaped></v-text-field>

          <v-date-picker v-model="start"></v-date-picker>

          <v-date-picker v-model="end"></v-date-picker>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="overlayOfChild=false">입력 완료</v-btn>
>>>>>>> ac872b39bc1bea57b210c4277af024384d11e01b
  </v-form>
</template>

<script>
export default {
<<<<<<< HEAD
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
=======
  props: ["overlayOfChild"],
  data() {
    return {
      start: new Date().toISOString().substr(0, 10),
      end: new Date().toISOString().substr(0, 10),
      title: "",
      user: {}
    };
  },
  created() {
    // this.user.value = this.overlayOfChild;
  },
  methods: {
    test() {}
  }
>>>>>>> ac872b39bc1bea57b210c4277af024384d11e01b
};
//overlay 통신, 데이터 통신 - start, emnd, title
</script>