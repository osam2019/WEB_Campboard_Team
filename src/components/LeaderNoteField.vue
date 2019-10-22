<template>
  <v-card style="margin: 0 auto; width: 50rem" raised>
    <v-list>
      <v-list-item>
        <v-card-title class="font-weight-bold display-1">오늘은 무슨 일이 있었나요?</v-card-title>
      </v-list-item>
      <v-list-item>
        <v-card-subtitle>오늘 분대원의 하루를 기록해주세요.</v-card-subtitle>
      </v-list-item>
      <v-list-item>
        <v-text-field dense label="분대원 이름" filled rounded v-model="name" />
      </v-list-item>
      <v-list-item>
        <v-textarea dense label="특이사항" filled rounded auto-grow v-model="text" />
      </v-list-item>
      <v-list-item>
        <v-spacer />
        <v-btn color="primary" raised @click="onPostReport">게시하기</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    addReport: Function
  },
  data() {
    return {
      name: "",
      text: ""
    };
  },
  methods: {
    onPostReport() {
      this.addReport({
        date: new Date().toISOString().substring(0, 10),
        name: this.name,
        text: this.text
      });
      this.name = "";
      this.text = "";
    }
  }
};
</script>

<style>
</style>