<template>
  <v-card class="mx-auto" color="#8BC34A" dark width="450">
    <v-card-title>
      <span class="black--text title font-weight-bold">{{ report.title }}</span>
    </v-card-title>
    <v-card-text class="black--text headline font-weight-bold body-1">{{ report.text }}</v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="black--text">{{ report.name }}</v-list-item-title>
        </v-list-item-content>
        <v-row align="center" justify="end">
          <!--  자신이 쓴 글만 수정 권한 부여 -->
          <template
            v-if="this.$store.state.userLevel+' '+this.$store.state.userName === report.name"
          >
            <v-icon class="mr-4">mdi-square-edit-outline</v-icon>
          </template>
          <v-icon class="mr-4" @click="commentListClick">mdi-comment-text-multiple-outline</v-icon>
          <v-icon class="mr-1" @click="pushLike">mdi-heart</v-icon>
          <span class="subheading mr-2">{{ report.like }}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <template v-if="commentToggle">
      <v-list-item
        style="background: #2E7D32"
        class="mb-2"
        v-for="comment in report.comments "
        :key="comment.id"
      >
        <v-list-item-avatar color="grey darken-3">
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="black--text">{{ comment.name }} : {{ comment.text }}</v-list-item-title>
      </v-list-item>
      <section style="background: #2E7D32">
        <v-list-item style="margin: 10">
          <v-text-field dense label="name" filled rounded v-model="name" />
          <v-text-field dense label="Comment" filled rounded v-model="text" />
        </v-list-item>
        <v-list-item>
          <v-btn color="primary" raised @click="addComment">게시하기</v-btn>
        </v-list-item>
      </section>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    id: Number,
    report: Object,
    removeReport: Function
  },
  data() {
    return {
      edit: false,
      commentToggle: false,
      name: "",
      text: ""
    };
  },
  methods: {
    pushLike() {
      this.report.like++;
    },
    commentListClick() {
      this.commentToggle = !this.commentToggle;
    },
    addComment() {
      this.report.comments.push({
        id: this.report.commentId++,
        name: this.name,
        text: this.text
      });
      this.name = "";
      this.text = "";
    },
    userMatchPost() {
      return false;
    }
  }
};
</script>

<style>
</style>