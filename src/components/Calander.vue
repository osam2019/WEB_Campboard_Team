<template>
  <div>
    <v-btn color="primary" class="ma-2" @click="toggle">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-scroll-y-transition>
      <v-card raised style="position: absolute; z-index: 30" v-show="display">
        <span>일정 등록하기</span>
        <add-todo :addEvent="sendInfo"></add-todo>
      </v-card>
    </v-scroll-y-transition>

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
        @click:time="remove(event)"
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
          <div
            v-for="(event, index) in  eventsMap[date]"
            @click="remove(event)"
            :key="index"
            class="my-event with-time"
          >
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
    remove(index) {
      console.log(index);
    },
    test() {
      console.log(this.events);
      console.log(this);
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
      }

      console.log(end);
      function makeStr(date, str) {
        console.log(date);
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