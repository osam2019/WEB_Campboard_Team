<template>
  <v-list>
    <!-- <v-list-item class="mb-4">
      추가용 버튼누르면 field
    </v-list-item>-->
    <div class="d-flex flex-column-reverse">
      <v-list-item class="mb-4" v-for="report in reports" :key="report.id">
        <post-item :id="report.id" :report="report" :remove-report="removeReport" />
      </v-list-item>
    </div>
    <template v-if="!addToggle">
      <v-btn @click="toggle" class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <post-item-field :toggle="toggle" :addReport="addReport"></post-item-field>
    </template>
  </v-list>
</template>

<script>
import PostItem from "./PostItem.vue";
import PostItemField from "./PostItemField.vue";

export default {
  components: {
    PostItem,
    PostItemField
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    }
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
          title: "첫번째 게시글 제목입니다",
          name: "병장 정영훈",
          text: "OSAM 캠프 참여 실시",
          like: "24",
          comments: [
            { name: "일병 박경필", text: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", text: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        },
        {
          id: 2,
          commentID: 3,
          date: "2019-10-23",
          title: "두번째 게시글 제목입니다",
          name: "일병 박경필",
          text: "OSAM 캠프 참여 실시",
          like: "22",
          comments: [
            { name: "일병 박경필", text: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", text: "축하드려요~~ㅎㅎ", id: 2 }
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
            { name: "일병 박경필", text: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", text: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        }
      ]
    };
  },
  methods: {
    removeReport({ id }) {
      this.reports.splice(this.reports.findIndex(r => r.id === id), 1);
    },
    toggle() {
      this.addToggle = !this.addToggle;
    },
    addReport({ date, title, text, like }) {
      this.reports.push({ id: this.reportId++, date, title, text, like });
    }
  }
};
</script>

<style>
</style>