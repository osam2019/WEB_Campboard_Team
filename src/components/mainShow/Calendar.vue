<template>
  <div style="width: 70%">
    <template v-if="account.userType === '간부'">
      <v-btn color="primary" class="ma-2" @click="toggle">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <span
        class="subtitle-2 primary white--text text-center display-1 pa-3"
        style="border-radius: 10px"
      >일정 등록하기</span>
      <v-scroll-y-transition>
        <template>
          <v-card
            v-show="display"
            raised
            style="position:absolute; z-index:30;"
            transition="scroll-y-transition"
          >
            <add-todo :addEvent="sendInfo"></add-todo>
          </v-card>
        </template>
      </v-scroll-y-transition>
    </template>

    <h1
      class="teal darken-2 white--text text-center display-1 pa-3"
      style="border-radius: 10px"
    >주간 일정</h1>
    <v-sheet height="400">
      <v-calendar
        ref="calendar"
        :now="today"
        :value="today"
        :events="events"
        color="primary"
        type="week"
        event-color="primary"
        @click:event="del"
      >
        <!-- the events at the top (all-day) -->
        <template v-slot:day-header="{ date }">
          <template v-for="event in eventsMap[date]">
            <!-- all day events don't have time -->
            <div v-if="!event.time" :key="event.title" class="my-event" v-html="event.title"></div>
          </template>
        </template>
        <!-- the events at the bottom (timed) -->
        <template v-slot:day-body="{ date, timeToY, minutesToPixels }">
          <div v-for="(event, index) in  eventsMap[date]" :key="index" class="my-event with-time">
            <!-- timed events -->
            <!-- <div
              
              v-html="event.title"
            ></div>-->
          </div>
        </template>
      </v-calendar>
    </v-sheet>
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
    display: false,
    today: "2019-10-22",
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
    ],
    info: {}
  }),
  methods: {
    del(event) {
      if (this.$store.state.account != "간부") return;
      const idx = this.events.indexOf(event.event);
      if (idx > -1) this.events.splice(idx, 1);
      console.log(event);
    },
    toggle() {
      this.display = !this.display;
    },
    sendInfo(name, date, start, end) {
      if (!this.display) {
        return;
      }
      if (name === "" || date == "" || start === "" || end === "") {
        alert("알맞은 시간과 내용을 입력해주세요");
        return;
      } else if (start > end) {
        console.log(start);
        console.log(end);
        alert("시작시간이 끝나는 시간보다 클 수 없습니다");
        return;
      }

      console.log(start);
      console.log(end);
      console.log(start > end);

      function makeStr(date, str) {
        return date + " " + str;
      }
      start = makeStr(date, start);
      end = makeStr(date, end);
      this.events.unshift({ name, start, end });
      this.display = false;
    }
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  }
};
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>