<template>
  <v-card style="margin: 0 auto; width: 50rem" raised>
    <v-list>
      <v-list-item>
        <v-text-field dense label="게시글 제목" filled rounded v-model="title" />
      </v-list-item>
      <v-list-item>
        <v-textarea dense label="내용" filled rounded auto-grow v-model="text" />
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
    toggle: Function,
    addReport: Function
  },
  data() {
    return {
      title: "",
      text: ""
    };
  },
  methods: {
    onPostReport() {
      this.toggle();
      this.addReport({
        date: new Date().toISOString().substring(0, 10),
        title: this.title,
        text: this.text,
        like: "0"
      });
      this.title = "";
      this.text = "";
    }
  }
};
</script>

<style>
</style>