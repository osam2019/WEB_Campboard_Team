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
              label="편지 제목"
              filled
              rounded
              v-model="title"
            />
          </v-list-item>
          <v-list-item class="d-flex">
            <div>받는 사람 : {{ mailType }}</div>
            <v-spacer></v-spacer>
            <v-text-field
              background-color="#a5d6a7"
              style="padding-top: 15px"
              dense
              label="보내는 사람"
              filled
              rounded
              v-model="sender"
            />
          </v-list-item>
          <v-list-item>
            <v-textarea
              background-color="#a5d6a7"
              dense
              label="편지 내용"
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
          <v-btn depressed small color="primary" @click="sendField">게시하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    mailType: String,
    addFlowerToggle: Function,
    addDiamondToggle: Function,
    addHelpCallToggle: Function,
    addReport: Function,
    sending: Function
  },
  data() {
    return {
      dialog: true,
      title: "",
      text: ""
    };
  },
  computd: {
    account() {
      return this.$store.state.account;
    }
  },
  methods: {
    closeField() {
      if (this.mailType === "부대장님") {
        this.addFlowerToggle();
      } else if (this.mailType === "중대장님") {
        this.addDiamondToggle();
      } else if (this.mailType === "국방헬프콜") {
        this.addHelpCallToggle();
      }
      this.dialog = false;
    },
    sendField() {
      if (this.mailType === "부대장님") {
        this.addFlowerToggle();
      } else if (this.mailType === "중대장님") {
        this.addDiamondToggle();
      } else if (this.mailType === "국방헬프콜") {
        this.addHelpCallToggle();
      }
      // 서버에 data 전달하기
      this.dialog = false;
      this.sending();
    }
  }
};
</script>

<style scoped>
</style>
