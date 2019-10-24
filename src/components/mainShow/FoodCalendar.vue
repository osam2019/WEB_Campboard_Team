<template>
  <div style="width: 70%">
    <v-layout class="d-flex align-center mb-2">
      <span class="display-1 font-weight-bold mr-4">식단표</span>
      <template v-if="account.userType === '간부'">
        <v-menu
          style="z-index: 30;"
          v-model="display"
          :close-on-content-click="false"
          transition="scroll-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn ref="registerBtn" rounded color="primary" @click="toggle">+ 식단 등록하기</v-btn>
          </template>
          <add-food :addFood="addFood" :toggle="toggle"></add-food>
        </v-menu>
      </template>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" outlined color="primary" @click="prevCalendar">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn outlined color="primary" @click="nextCalendar">
        <v-icon large>mdi-chevron-right</v-icon>
      </v-btn>
    </v-layout>
    <v-card raised class="mb-12">
      <v-calendar
        ref="calendar"
        v-model="start"
        @click:event="removeEvent"
        type="month"
        now="2019-10-23"
        value="2019-10-23"
        :event-height="120"
        :event-color="() => 'secondary'"
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
    start: new Date().toISOString().substr(0, 10),
    eventId: 7,
    events: [
      {
        id: 1,
        name: "영양밥<br>육개장<br>야채튀김<br>가지볶음<br>배추김치",
        start: "2019-10-30"
      },
      {
        id: 2,
        name: "영양밥<br>육개장<br>야채튀김<br>가지볶음<br>배추김치",
        start: "2019-10-29"
      },
      {
        id: 3,
        name: "영양밥<br>육개장<br>야채튀김<br>가지볶음<br>배추김치",
        start: "2019-10-28"
      },
      {
        id: 4,
        name: "영양밥<br>육개장<br>야채튀김<br>가지볶음<br>배추김치",
        start: "2019-10-27"
      },
      {
        id: 5,
        name: "영양밥<br>육개장<br>야채튀김<br>가지볶음<br>배추김치",
        start: "2019-10-26"
      },
      {
        id: 6,
        name: "영양밥<br>육개장<br>야채튀김<br>가지볶음<br>배추김치",
        start: "2019-10-25"
      }
    ]
  }),
  methods: {
    prevCalendar() {
      this.$refs.calendar.prev();
    },
    nextCalendar() {
      this.$refs.calendar.next();
    },
    removeEvent({ event }) {
      const ans = confirm("삭제하시겠습니까?");
      if (!ans) {
        return;
      }

      const idx = this.events.findIndex(e => e.id === event.id);
      if (idx > -1) {
        this.events.splice(idx, 1);
      }
    },
    addFood({ name, date }) {
      this.events.push({ id: this.eventId++, name, start: date });
    },
    toggle() {
      this.display = !this.display;
    }
  }
};
</script>