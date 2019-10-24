<template>
  <v-card class="pa-5">
    <v-container>
      <v-row>
        <v-col class="display-1" cols="12">일정 등록</v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-datetime-picker v-model="start" label="일정 시작 날짜/시간"></v-datetime-picker>
        </v-col>
        <v-col>
          <v-datetime-picker v-model="end" label="일정 종료 날짜/시간"></v-datetime-picker>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field name="details-input" label="일정 내용" id="details-input" v-model="name" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex">
          <v-spacer></v-spacer>
          <v-btn @click="addEvent({name, start, end})" raised color="primary">등록하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["addEvent"],
  data() {
    return {
      name: "",
      start: "",
      end: ""
    };
  },
  methods: {}
};
//overlay 통신, 데이터 통신 - start, emnd, title
</script>