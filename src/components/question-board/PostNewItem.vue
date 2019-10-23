<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-list>
          <v-list-item>
            <v-text-field
              background-color="#a5d6a7"
              style="padding-top: 15px"
              dense
              label="게시글 제목"
              filled
              rounded
              v-model="title"
            />
          </v-list-item>
          <v-list-item>
            <v-textarea
              background-color="#a5d6a7"
              dense
              label="내용"
              filled
              rounded
              auto-grow
              v-model="text"
            />
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed small color="primary" @click="closeField">닫기</v-btn>
          <v-btn depressed small color="primary" @click="onPostReport">게시하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
//
export default {
  props: {
    toggle: Function
  },
  data() {
    return {
      dialog: true,
      title: "",
      text: ""
    };
  },
  computed: {
    reports() {
      var reports = this.$store.state.postList.reports;
      return reports;
    },
    reportId() {
      return this.$store.state.postList.reportId;
    },
    account() {
      return this.$store.state.account;
    }
  },
  methods: {
    closeField() {
      this.toggle();
      this.dialog = false;
    },
    onPostReport() {
      this.toggle();
      this.dialog = false;
      this.reports.push({
        id: this.reportId++,
        date: new Date().toISOString().substring(0, 10),
        title: this.title,
        text: this.text,
        name: this.account.rank + " " + this.account.name,
        commentID: 1,
        comemnts: []
      });
      this.title = "";
      this.text = "";
    }
  }
};
</script>

<style scoped>
.textField {
  padding: 7px;
}
</style>
