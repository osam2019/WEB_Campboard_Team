<template>
  <v-card raised class="mx-auto" color="#8BC34A" width="450">
    <template v-if="!edit">
      <v-card-title class="d-flex justify-center">
        <span style="color:black;font-weight:bold">{{ post.title }}</span>
        <v-spacer></v-spacer>
        <template v-if="account.rank+' '+account.name === post.name">
          <v-btn icon @click="toggleRemoveDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-card-title>
      <v-card-subtitle>
        <span>{{post.date}}</span>
      </v-card-subtitle>
      <v-card-text class="black--text body-1">{{ post.text }}</v-card-text>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-icon size="20" class="card-img">mdi-account-circle</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="black--text">{{ post.name }}</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <!--  자신이 쓴 글만 수정 권한 부여 -->
            <template v-if="account.rank+' '+account.name === post.name">
              <v-btn icon @click="postEditToggle">
                <v-icon>mdi-square-edit-outline</v-icon>
              </v-btn>
            </template>
            <v-btn icon @click="commentListClick">
              <v-icon>mdi-comment-text-multiple-outline</v-icon>
            </v-btn>
            <!-- 좋아요 버튼 -->
            <v-btn text icon :color="likeToggle ? 'deep-orange' : ''">
              <v-icon @click="pushLike">mdi-thumb-up</v-icon>
            </v-btn>
            <span class="subheading mr-2">{{ post.like }}</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </template>
    <!-- 수정하기 클릭했을 때 -->
    <template v-else>
      <v-card-title>
        <!-- 제목수정 부분 -->
        <v-text-field dense label="게시글 제목" filled rounded v-model="title" />
      </v-card-title>
      <!-- 내용수정 부분 -->
      <v-text-field class="ml-3 mr-3" dense label="내용" filled rounded v-model="text" />
      <div>
        <span style="color:black;font-size:7px;margin-left:20px">{{post.date}}</span>
      </div>
      <!-- 버튼 부분 -->
      <v-btn class="mr-2 ma-3" color="primary" @click="postEditToggle">취소하기</v-btn>
      <v-btn color="primary" raised @click="onSave">저장하기</v-btn>
    </template>
    <!-- 댓글 보여주기+댓글달기 -->
    <template v-if="commentToggle">
      <v-list-item
        style="background: #2E7D32"
        class="mb-2"
        v-for="comment in post.comments "
        :key="comment.id"
      >
        <v-list-item-avatar color="grey darken-3">
          <v-icon size="20" class="card-img">mdi-account-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-title class="black--text">{{ comment.name }} : {{ comment.word }}</v-list-item-title>
      </v-list-item>
      <!-- 댓글 달기 기능 -->
      <section style="background: #2E7D32">
        <v-list-item style="margin: 10">
          <v-text-field dense label="Comment" filled rounded v-model="word" />
        </v-list-item>
        <!-- 댓글 추가 버튼 -->
        <v-list-item>
          <v-btn color="primary" raised @click="addComment">게시하기</v-btn>
        </v-list-item>
      </section>
    </template>
    <v-overlay v-model="dialog">
      <v-card class="black--text" color="white">
        <v-card-title class="mb-1">삭제하시겠습니까?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="primary" @click="toggleRemoveDialog">취소</v-btn>
          <v-btn raised color="primary" @click="onRemovePost">삭제</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  props: {
    post: Object,
    removePost: Function
  },
  data() {
    return {
      edit: false,
      commentToggle: false,
      likeToggle: false,
      title: this.post.title,
      text: this.post.text,
      word: "",
      dialog: false
    };
  },
  computed: {
    name() {
      return this.account.rank + " " + this.account.name;
    },
    account() {
      return this.$store.state.account;
    }
  },
  methods: {
    pushLike() {
      // likeToggle이 꺼져있으면 +1 , 켜져있으면 -1
      if (!this.likeToggle) {
        this.post.like++;
      } else {
        this.post.like--;
      }
      this.likeToggle = !this.likeToggle;
    },
    commentListClick() {
      this.commentToggle = !this.commentToggle;
    },
    addComment() {
      this.post.comments.push({
        id: this.post.commentId++,
        name: this.name,
        word: this.word
      });
      this.word = "";
    },
    postEditToggle() {
      this.edit = !this.edit;
      if (this.commentToggle) {
        this.commentListClick();
      }
    },
    onSave() {
      this.post.title = this.title;
      this.post.text = this.text;
      this.edit = !this.edit;
    },
    toggleRemoveDialog() {
      this.dialog = !this.dialog;
    },
    onRemovePost() {
      this.removePost({ id: this.post.id });
    }
  }
};
</script>

<style>
</style>