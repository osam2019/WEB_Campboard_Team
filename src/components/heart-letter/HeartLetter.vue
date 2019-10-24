<template>
  <div>
    <v-container>
      <v-card width="600">
        <v-card-title class="display-1 font-weight-bold">마음의 소리</v-card-title>
        <v-card-text class="title">
          이 공간은 여러분의 마음의 편지를 작성할 수 있는 공간입니다. 지금까지 부대에서 힘들었던 점,
          혹은 부대에서 개선했으면 하는 점을 모두 적어 주시면 됩니다. 오른쪽의 편지 버튼을 눌러서
          편지를 보내보세요!
        </v-card-text>
      </v-card>
    </v-container>
    <section>
      <v-speed-dial
        style="position: fixed;top: 10%;right: 10%"
        v-model="fab"
        :direction="'bottom'"
        transition="slide-y-transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab">mdi-email</v-icon>
            <v-icon v-else>mdi-email-plus</v-icon>
          </v-btn>
        </template>
        <div class="mb-5 d-flex flex-column align-center">
          <v-btn fab dark small color="green" @click="addFlowerToggle">
            <v-icon>mdi-account-star</v-icon>
          </v-btn>
          <span style="white-space:nowrap">부대장님께</span>
        </div>
        <div class="mb-5 d-flex flex-column align-center">
          <v-btn fab dark small color="indigo" @click="addDiamondToggle">
            <v-icon>mdi-account-star-outline</v-icon>
          </v-btn>
          <span style="white-space:nowrap">중대장님께</span>
        </div>
        <div class="d-flex flex-column align-center">
          <v-btn fab dark small color="red" @click="addHelpCallToggle">
            <v-icon>mdi-alarm-light-outline</v-icon>
          </v-btn>
          <span style="white-space:nowrap">국방헬프콜</span>
        </div>
      </v-speed-dial>
    </section>
    <section v-if="mailFlowerToggle">
      <letter-new-item :mailType="mailType" :sending="sending" :addFlowerToggle="addFlowerToggle"></letter-new-item>
    </section>
    <section v-else-if="mailDiamondToggle">
      <letter-new-item :mailType="mailType" :sending="sending" :addDiamondToggle="addDiamondToggle"></letter-new-item>
    </section>
    <section v-else-if="mailHelpCallToggle">
      <letter-new-item
        :mailType="mailType"
        :sending="sending"
        :addHelpCallToggle="addHelpCallToggle"
      ></letter-new-item>
    </section>
    <section v-if="sended">
      <send-dialog :sending="sending"></send-dialog>
    </section>
  </div>
</template>

<script>
import LetterNewItem from "./LetterNewItem.vue";
import SendDialog from "./SendDialog.vue";

export default {
  components: {
    LetterNewItem,
    SendDialog
  },
  data() {
    return {
      fab: false,
      mailFlowerToggle: false,
      mailDiamondToggle: false,
      mailHelpCallToggle: false,
      mailType: "",
      sended: false
    };
  },
  methods: {
    addFlowerToggle() {
      this.mailFlowerToggle = !this.mailFlowerToggle;
      this.mailType = "부대장님";
    },
    addDiamondToggle() {
      this.mailDiamondToggle = !this.mailDiamondToggle;
      this.mailType = "중대장님";
    },
    addHelpCallToggle() {
      this.mailHelpCallToggle = !this.mailHelpCallToggle;
      this.mailType = "국방헬프콜";
    },
    sending() {
      this.sended = !this.sended;
    }
  }
};
</script>

<style scoped>
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>