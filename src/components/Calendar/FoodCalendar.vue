<template>
  <div>
    <v-btn color="primary" class="ma-2" @click="toggle">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <span
      class="subtitle-2 primary white--text text-center display-1 pa-3"
      style="border-radius: 10px"
    >일정 등록하기</span>
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
      <h1
        class="teal darken-2 white--text text-center display-1 pa-3"
        style="border-radius: 10px"
      >식단표</h1>
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

<style>
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