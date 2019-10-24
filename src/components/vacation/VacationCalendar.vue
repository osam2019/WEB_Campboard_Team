<template>
  <v-layout style="width: 100%;">
    <v-card
      class="pl-4 pr-4 white--text"
      color="secondary"
      outlined
      elevation="2"
      :style="`position: fixed; top: ${clickedEventPos.y}px; left: ${clickedEventPos.x}px; z-index:40`"
      v-show="detailShown"
    >
      <span>{{clickedEventDetails}}</span>
    </v-card>
    <v-menu
      fixed
      :position-x="rightClickedEventPos.x"
      :position-y="rightClickedEventPos.y"
      v-model="menuShown"
      absolute
      offset-y
    >
      <v-list>
        <v-list-item @click="openVacationField()">
          <v-list-item-title>수정하기</v-list-item-title>
        </v-list-item>
        <v-list-item @click="removeVacation({id:rightClickedEvent.event.id})">
          <v-list-item-title>삭제하기</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      color="primary"
      @click="openVacationField()"
      fab
      fixed
      style="z-index:40; bottom: 8%; right: 4%"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-overlay :value="vacationFieldShown">
      <vacation-field
        :registerVacation="registerVacation"
        :editVacation="editVacation"
        :closeVacationField="closeVacationField"
        :rightClickedEvent="rightClickedEvent"
      />
    </v-overlay>
    <v-layout class="d-flex align-center justify-center mr-10">
      <v-btn fab @click="moveToPreviousMonth" icon>
        <v-icon size="100">mdi-chevron-left</v-icon>
      </v-btn>
    </v-layout>
    <v-layout class="d-flex flex-column" style="width: 90%;">
      <v-layout class="flex-grow-0 pb-2 d-flex align-center">
        <v-layout class="display-1" style="width: 10rem">{{calendarYear}}년 {{calendarMonth}}월</v-layout>
        <v-spacer></v-spacer>
        <div style="width:20%">
          <v-text-field
            v-model="search"
            name="search-soldier"
            label="인원을 검색하세요."
            id="search-soldier"
          ></v-text-field>
        </div>
      </v-layout>
      <v-card class="flex-grow-1" raised style="width: 100%">
        <v-sheet class="fill-height" style="width: 100%">
          <v-calendar
            :key="updateKey"
            ref="calendar"
            type="month"
            locale="ko-kr"
            :day-format="(d) => d.day"
            :month-format="() => ''"
            :now="today"
            :event-color="getEventColor"
            v-model="start"
            :events="searchedEvents"
            @contextmenu:event="showMenu"
            @click:event="showVacationDetails"
            @mouseleave:event="hideVacationDetails"
          ></v-calendar>
        </v-sheet>
      </v-card>
    </v-layout>
    <v-layout class="d-flex align-center justify-center ml-10">
      <v-btn fab @click="moveToNextMonth" icon>
        <v-icon size="100">mdi-chevron-right</v-icon>
      </v-btn>
    </v-layout>
  </v-layout>
</template>

<script>
import Vue from "vue";
import VacationField from "./VacationField";

export default {
  components: {
    VacationField
  },
  data() {
    return {
      vacationFieldShown: false,
      search: "",
      calendarYear: new Date().getYear() + 1900,
      calendarMonth: new Date().getMonth() + 1,
      start: "",
      detailShown: false,
      menuShown: false,
      clickedEvent: null,
      rightClickedEvent: null,
      eventId: 7,
      events: [
        {
          id: 1,
          name: "병장 정영훈",
          details: "연가2일 & 포상8일",
          start: "2019-10-01",
          end: "2019-10-10"
        },
        {
          id: 2,
          name: "병장 홍길동",
          details: "연가2일 & 포상8일",
          start: "2019-10-01",
          end: "2019-10-10"
        },
        {
          id: 3,
          name: "일병 주경진",
          details: "연가2일 & 포상8일",
          start: "2019-10-01",
          end: "2019-10-10"
        },
        {
          id: 4,
          name: "상병 정상병",
          details: "연가2일 & 포상8일",
          start: "2019-10-01",
          end: "2019-10-10"
        },
        {
          id: 5,
          name: "이병 김신병",
          details: "연가2일 & 포상8일",
          start: "2019-10-01",
          end: "2019-10-10"
        },
        {
          id: 6,
          name: "병장 고전역",
          details: "연가2일 & 포상8일",
          start: "2019-10-01",
          end: "2019-10-10"
        }
      ],
      updateKey: 0
    };
  },
  computed: {
    today() {
      const t = new Date();
      return `${t.getYear() + 1900}-${
        t.getMonth() < 9 ? "0" : ""
      }${t.getMonth() + 1}-${t.getDate() < 10 ? "0" : ""}${t.getDate()}`;
    },
    searchedEvents() {
      const trimmed = this.search.trim();
      return this.events
        .filter(e => e.name.includes(trimmed))
        .sort((a, b) => a.id < b.id);
    },
    clickedEventDetails() {
      return this.clickedEvent ? this.clickedEvent.event.details : "";
    },
    clickedEventPos() {
      return this.clickedEvent
        ? {
            x: this.clickedEvent.nativeEvent.pageX,
            y: this.clickedEvent.nativeEvent.pageY
          }
        : {};
    },
    rightClickedEventPos() {
      return this.rightClickedEvent
        ? {
            x: this.rightClickedEvent.nativeEvent.pageX,
            y: this.rightClickedEvent.nativeEvent.pageY
          }
        : {};
    },
    account() {
      return this.$store.state.account;
    }
  },
  methods: {
    registerVacation({ details, start, end }) {
      this.events.push({
        id: this.eventId++,
        name: this.account.rank + " " + this.account.name,
        start,
        end,
        details
      });
    },
    removeVacation({ id }) {
      this.events.splice(this.events.findIndex(e => e.id === id), 1);
    },
    editVacation({ id, details, start, end }) {
      const editEvent = this.events.find(e => e.id === id);
      editEvent.start = start;
      editEvent.end = end;
      editEvent.details = details;
      this.updateKey++;
    },
    closeVacationField() {
      this.vacationFieldShown = false;
    },
    openVacationField() {
      this.vacationFieldShown = true;
    },
    showVacationDetails(e) {
      console.log(e);
      this.detailShown = true;
      this.clickedEvent = e;
    },
    hideVacationDetails(e) {
      this.detailShown = false;
      this.clickedEvent = null;
    },
    showMenu(e) {
      this.menuShown = true;
      this.rightClickedEvent = e;
    },
    moveToPreviousMonth() {
      if (this.calendarMonth === 1) {
        this.calendarMonth = 12;
        this.calendarYear--;
      } else {
        this.calendarMonth -= 1;
      }
      this.$refs.calendar.prev();
    },
    moveToNextMonth() {
      if (this.calendarMonth === 12) {
        this.calendarMonth = 1;
        this.calendarYear++;
      } else {
        this.calendarMonth += 1;
      }
      this.$refs.calendar.next();
    },
    getEventColor(event) {
      const randomColors = [
        "red",
        "pink",
        "purple",
        "deep-purple",
        "indigo",
        "blue",
        "light-blue",
        "cyan",
        "teal",
        "green",
        "light-green",
        "lime",
        "yellow",
        "amber",
        "orange",
        "deep-orange",
        "brown",
        "blue-grey"
      ];
      if (!event.color) {
        event.color =
          randomColors[Math.floor(Math.random() * randomColors.length)];
      }
      return event.color;
    }
  }
};
</script>

<style>
.v-calendar-weekly__head {
  background-color: #009688;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
  background-color: transparent !important;
  color: white !important;
  border-right: none !important;
  font-size: 1.2rem !important;
}
.v-calendar-weekly__day-label {
  text-align: left;
}
</style>