<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <section>
          <v-speed-dial
            style="position: absolute;left: 50%"
            v-model="fab"
            :direction="'bottom'"
            :transition="'scale'"
          >
            <template v-slot:activator>
              <v-btn v-model="fab" color="blue darken-2" dark fab>
                <v-icon v-if="fab">mdi-email</v-icon>
                <v-icon v-else>mdi-email-plus</v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="green" @click="addFlowerToggle">
              <v-icon>mdi-account-star</v-icon>
            </v-btn>
            <span style="white-space:nowrap">부대장님께</span>
            <v-btn fab dark small color="indigo" @click="addDiamondToggle">
              <v-icon>mdi-account-star-outline</v-icon>
            </v-btn>
            <span style="white-space:nowrap">중대장님께</span>
            <v-btn fab dark small color="red" @click="addHelpCallToggle">
              <v-icon>mdi-alarm-light-outline</v-icon>
            </v-btn>
            <span style="white-space:nowrap">국방헬프콜</span>
          </v-speed-dial>
        </section>
        <section v-if="mailFlowerToggle">
          <letter-new-item
            :mailType="mailType"
            :sending="sending"
            :addFlowerToggle="addFlowerToggle"
          ></letter-new-item>
        </section>
        <section v-else-if="mailDiamondToggle">
          <letter-new-item
            :mailType="mailType"
            :sending="sending"
            :addDiamondToggle="addDiamondToggle"
          ></letter-new-item>
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
      </template>
    </tool-bar>
  </div>
</template>  

<script>
import ToolBar from "../components/ToolBar.vue";
import LetterNewItem from "../components/heart-letter/LetterNewItem.vue";
import SendDialog from "../components/heart-letter/SendDialog.vue";

export default {
  components: {
    ToolBar,
    LetterNewItem,
    SendDialog
  },
  data() {
    return {
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