<template>
  <v-card class="mx-auto" color="#8BC34A" dark width="450">
    <template v-if="!edit">
      <v-card-title>
        <span style="color:black;font-weight:bold">{{ report.title }}</span>
      </v-card-title>
      <v-card-text class="black--text headline font-weight-bold body-1">{{ report.text }}</v-card-text>
      <div>
        <span style="color:black;font-size:7px;margin-left:20px">{{report.date}}</span>
      </div>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-icon size="20" class="card-img">mdi-account-circle</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="black--text">{{ report.name }}</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <!--  자신이 쓴 글만 수정 권한 부여 -->
            <template v-if="account.rank+' '+account.name === report.name">
              <v-icon class="mr-4" @click="postEditToggle">mdi-square-edit-outline</v-icon>
            </template>
            <v-icon class="mr-4" @click="commentListClick">mdi-comment-text-multiple-outline</v-icon>
            <!-- 좋아요 버튼 -->
            <!-- 좋아요 누르기전 -->
            <template v-if="!likeToggle">
              <v-btn text icon>
                <v-icon @click="pushLike">mdi-thumb-up</v-icon>
              </v-btn>
            </template>
            <!-- 좋아요 누른후 -->
            <template v-else>
              <v-btn text icon color="deep-orange">
                <v-icon @click="pushLike">mdi-thumb-up</v-icon>
              </v-btn>
            </template>
            <span class="subheading mr-2">{{ report.like }}</span>
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
        <span style="color:black;font-size:7px;margin-left:20px">{{report.date}}</span>
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
        v-for="comment in report.comments "
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
      likeToggle: false,
      title: this.report.title,
      text: this.report.text,
      word: ""
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
        this.report.like++;
      } else {
        this.report.like--;
      }
      this.likeToggle = !this.likeToggle;
    },
    commentListClick() {
      this.commentToggle = !this.commentToggle;
    },
    addComment() {
      this.report.comments.push({
        id: this.report.commentId++,
        name: this.name,
        word: this.word
      });
      this.word = "";
    },
    // userMatchPost() {
    //   return false;
    // },
    postEditToggle() {
      this.edit = !this.edit;
      if (this.commentToggle) {
        this.commentListClick();
      }
    },
    onSave() {
      this.report.title = this.title;
      this.report.text = this.text;
      this.edit = !this.edit;
    }
  }
};
</script>

<style>
</style>