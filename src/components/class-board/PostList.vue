<template>
  <v-list>
    <div class="d-flex flex-column-reverse">
      <v-list-item class="mb-4" v-for="report in reports" :key="report.id">
        <post-item :id="report.id" :report="report" :remove-report="removeReport" />
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
        <post-new-item :toggle="toggle" :addReport="addReport"></post-new-item>
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
      reportId: 4,
      reports: [
        {
          id: 1,
          commentID: 3,
          date: "2019-10-22",
          title: "외출 같이갈사람 댓 ㄱㄱ",
          name: "상병 강민석",
          text: "날짜한번잡아보자",
          like: "24",
          comments: [
            { name: "일병 박경필", word: "25일 어떠십니까???", id: 1 },
            { name: "상병 강혁", word: "ㄱㄱㄱ", id: 2 }
          ]
        },
        {
          id: 2,
          commentID: 3,
          date: "2019-10-23",
          title: "난 이제 말출 간다 ㅎㅎㅎㅎ",
          name: "병장 강태엽",
          text: "15일간 사라져주겠음 ㅋㅋ",
          like: "15",
          comments: [
            { name: "일병 김동준", word: "말출 추카드립니당", id: 1 },
            { name: "상병 김진석", word: "후 나는 말출 언제 가노 ㅠㅠ", id: 2 }
          ]
        },
        {
          id: 3,
          commentID: 3,
          date: "2019-10-24",
          title: "SW캠프 선발되서 교육파견 5일다녀옵니다",
          name: "상병 조정민",
          text: "휴가가 아니라 교육파견이라 참고해주세요",
          like: "20",
          comments: [
            { name: "일병 허웅", word: "오 나도 됨!!", id: 1 },
            { name: "일병 김민석", word: "무슨 계발하는거야?", id: 2 }
          ]
        }
      ]
    };
  },
  computed: {
    account() {
      return this.$store.state.account;
    }
  },
  methods: {
    removeReport({ id }) {
      this.reports.splice(this.reports.findIndex(r => r.id === id), 1);
    },
    toggle() {
      this.addToggle = !this.addToggle;
    },
    addReport({ title, text, like }) {
      this.reports.push({
        id: this.reportId++,
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