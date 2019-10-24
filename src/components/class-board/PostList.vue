<template>
  <v-list color="transparent">
    <div class="d-flex flex-column-reverse">
      <v-list-item class="mb-4" v-for="post in sortedPosts" :key="post.id">
        <post-item :post="post" :remove-post="removePost" />
      </v-list-item>
      <template v-if="!addToggle">
        <v-btn
          style="bottom: 8%; right: 3%"
          fab
          bottom
          fixed
          @click="toggle"
          class="mx-2"
          dark
          color="indigo"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <post-new-item :toggle="toggle" :addPost="addPost"></post-new-item>
      </template>
    </div>
  </v-list>
</template>

<script>
import PostItem from "./PostItem.vue";
import PostNewItem from "./PostNewItem.vue";

export default {
  components: {
    PostItem,
    PostNewItem
  },
  data() {
    return {
      addToggle: false,
      postId: 4,
      posts: [
        {
          id: 1,
          commentID: 3,
          date: "2019-10-22",
          title: "첫번째 게시글 제목입니다",
          name: "병장 정영훈",
          text: "OSAM 캠프 참여 실시",
          like: "24",
          comments: [
            { name: "일병 박경필", word: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", word: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        },
        {
          id: 3,
          commentID: 3,
          date: "2019-10-24",
          title: "세번째 게시글 제목입니다",
          name: "상병 조정민",
          text: "OSAM 캠프 참여 실시",
          like: "20",
          comments: [
            { name: "일병 박경필", word: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", word: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        },
        {
          id: 2,
          commentID: 3,
          date: "2019-10-23",
          title: "두번째 게시글 제목입니다",
          name: "상병 강민석",
          text: "OSAM 캠프 참여 실시",
          like: "22",
          comments: [
            { name: "일병 박경필", word: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", word: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        }
      ]
    };
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
    sortedPosts() {
      return [...this.posts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA > dateB) {
          return 1;
        } else if (dateA < dateB) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  },
  methods: {
    removePost({ id }) {
      this.posts.splice(this.posts.findIndex(p => p.id === id), 1);
    },
    toggle() {
      this.addToggle = !this.addToggle;
    },
    addPost({ title, text, like }) {
      this.posts.push({
        id: this.postId++,
        date: new Date().toISOString().substring(0, 10),
        title,
        text,
        like,
        name: this.account.rank + " " + this.account.name,
        commentID: 1,
        comments: []
      });
    }
  }
};
</script>

<style scoped>
</style>