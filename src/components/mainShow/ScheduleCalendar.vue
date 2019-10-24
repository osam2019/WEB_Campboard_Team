<template>
  <div style="width: 70%">
    <v-layout class="d-flex align-center mb-2">
      <span class="display-1 font-weight-bold mr-4">일정표</span>
      <template v-if="account.userType === '간부'">
        <v-menu
          style="z-index: 30;"
          v-model="display"
          :close-on-content-click="false"
          transition="scroll-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn ref="registerBtn" rounded color="primary" @click="toggle">+ 일정 등록하기</v-btn>
          </template>
          <add-todo :addEvent="addEvent"></add-todo>
        </v-menu>
      </template>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" outlined color="primary" @click="prevCalendar">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn class="mr-5" outlined color="primary" @click="nextCalendar">
        <v-icon large>mdi-chevron-right</v-icon>
      </v-btn>
      <div style="width: 10%">
        <v-select color="primary" :items="calendarTypes" label="달력 형태" v-model="calendarType"></v-select>
      </div>
    </v-layout>
    <v-card raised height="400">
      <v-calendar
        ref="calendar"
        v-model="start"
        :now="today"
        :value="today"
        :events="events"
        :interval-format="(d) => `${d.hour}시`"
        locale="ko-kr"
        :type="calendarType"
        event-color="primary"
        @click:event="del"
      ></v-calendar>
    </v-card>
  </div>
</template>
<script>
import AddTodo from "./AddTodo.vue";

export default {
  computed: {
    account() {
      return this.$store.state.account;
    }
  },
  components: {
    AddTodo
  },
  data: () => ({
    start: new Date()
      .toISOString()
      .substr(0, 16)
      .replace("T", " "),
    display: false,
    calendarType: "week",
    calendarTypes: [
      {
        text: "월",
        value: "month"
      },
      {
        text: "주",
        value: "week"
      }
    ],
    today: new Date()
      .toISOString()
      .substr(0, 16)
      .replace("T", " "),
    events: [
      {
        name: "취침",
        start: "2019-10-21 22:00",
        end: "2019-10-22 07:00"
      },
      {
        name: "취침",
        start: "2019-10-23 22:00",
        end: "2019-10-24 07:00"
      },
      {
        name: "취침",
        start: "2019-10-24 22:00",
        end: "2019-10-25 07:00"
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
    del(event) {
      if (this.$store.state.account != "간부") return;
      const idx = this.events.indexOf(event.event);
      if (idx > -1) this.events.splice(idx, 1);
      console.log(event);
    },
    toggle() {
      this.display = !this.display;
    },
    addEvent({ name, start, end }) {
      if (name === "" || start === "" || end === "") {
        alert("알맞은 시간과 내용을 입력해주세요");
        return;
      } else if (new Date(start) > new Date(end)) {
        alert("시작시간이 끝나는 시간보다 클 수 없습니다");
        return;
      }
      const startStr = new Date(start)
        .toISOString()
        .substr(0, 16)
        .replace("T", " ");
      const endStr = new Date(end)
        .toISOString()
        .substr(0, 16)
        .replace("T", " ");
      this.events.push({ name, start: startStr, end: endStr });
      this.display = false;
    }
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  }
};
</script>

<style >
</style>