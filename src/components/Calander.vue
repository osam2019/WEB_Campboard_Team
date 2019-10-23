<template>
  <v-content sm="6" md="8">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="8">
        <div>
          <v-btn icon @click="toggle">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <span>등록하기</span>
        </div>
        <v-col class="mb-10">
          <add-todo v-show="display" :addEvent="sendInfo"></add-todo>
        </v-col>
        <v-sheet height="400">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="events"
            color="primary"
            type="week"
          >
            <!-- the events at the top (all-day) -->
            <template v-slot:day-header="{ date }">
              <template v-for="event in eventsMap[date]">
                <!-- all day events don't have time -->
                <div
                  v-if="!event.time"
                  :key="event.title"
                  class="my-event"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
            <!-- the events at the bottom (timed) -->
            <template v-slot:day-body="{ date, timeToY, minutesToPixels }">
              <template v-for="event in eventsMap[date]">
                <!-- timed events -->
                <div
                  v-if="event.time"
                  :key="event.title"
                  :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                  class="my-event with-time"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-content>
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
        start: "2019-10-22 22:00",
        end: "2019-10-23 07:00"
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
    test() {
      console.log(this);
    },
    toggle() {
      this.display = true;
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
      this.events.push({ name, start, end });
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