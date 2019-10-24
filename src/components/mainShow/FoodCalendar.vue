<template>
  <div style="width: 70%">
    <v-layout class="d-flex align-center mb-2">
      <span class="display-1 font-weight-bold mr-4">식단표</span>
      <template v-if="account.userType === '간부'">
        <v-btn rounded color="primary" @click="toggle">+ 일정 등록하기</v-btn>
      </template>
    </v-layout>
    <v-scroll-y-transition>
      <v-card
        raised
        style="position:absolute; z-index:30;"
        v-show="display"
        transition="scroll-y-transition"
      >
        <AddFood :addEvent="AddFood"></AddFood>
      </v-card>
    </v-scroll-y-transition>
    <v-card height="500px" class="mb-12">
      <v-calendar
        @click:event="del"
        type="month"
        now="2019-10-23"
        value="2019-10-23"
        :events="events"
      ></v-calendar>
    </v-card>
  </div>
</template>

<style scoped>
.v-calendar .v-event.v-event-end {
  text-align: center;
  position: relative !important;
  top: -10px !important;
  height: 60px !important;
}
</style>
<script>
import AddFood from "./AddFood.vue";
export default {
  computed: {
    account() {
      return this.$store.state.account;
    }
  },
  components: {
    AddFood
  },
  data: () => ({
    display: false,
    events: [
      {
        name: "불고기<br>잡채",
        start: "2019-10-30"
      },
      {
        name: "짜장면<br>현미밥",
        start: "2019-10-29"
      },
      {
        name: "고기<br>치킨",
        start: "2019-10-28"
      },
      {
        name: "불고기<br>한우",
        start: "2019-10-27"
      },
      {
        name: "불고기<br>쿠키",
        start: "2019-10-26"
      },
      {
        name: "불고기<br>잡채",
        start: "2019-10-25"
      }
    ]
  }),
  methods: {
    del(event) {
      if (this.$store.state.account != "간부") return;
      const idx = this.events.indexOf(event.event);
      if (idx > -1) this.events.splice(idx, 1);
    },
    AddFood(name, start) {
      if (this.events.findIndex(i => i.start == start) == -1) {
        console.log(this.events.findIndex(i => i.start == start));
        this.events.push({ name, start });
      } else {
        console.log(this.events.findIndex(i => i.start == start));
        this.events[this.events.findIndex(i => i.start == start)].name +=
          "<br>" + name;
      }
    },
    toggle() {
      this.display = !this.display;
    }
  }
};
</script>