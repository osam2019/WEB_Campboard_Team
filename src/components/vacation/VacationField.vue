<template>
  <v-card class="pa-6" color="secondary" raised>
    <v-row>
      <v-col cols="12">
        <span class="display-1">휴가 추가</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-menu
          v-model="menuStartDate"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="startDate" label="휴가 출발일" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="startDate" @input="menuStartDate = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
          v-model="menuEndDate"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="endDate" label="휴가 복귀일" v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="endDate" @input="menuEndDate = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-text-field name="details-input" label="휴가 종류" id="details-input" v-model="details" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-spacer></v-spacer>
        <v-btn @click="onClickCancel" outlined color="white" class="mr-5">취소하기</v-btn>
        <v-btn @click="onClickOk" raised color="primary">등록하기</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    registerVacation: Function,
    closeVacationField: Function,
    editVacation: Function,
    rightClickedEvent: Object
  },
  data() {
    return {
      startDate: this.rightClickedEvent
        ? this.rightClickedEvent.event.start
        : "",
      endDate: this.rightClickedEvent ? this.rightClickedEvent.event.end : "",
      menuStartDate: false,
      menuEndDate: false,
      details: this.rightClickedEvent
        ? this.rightClickedEvent.event.details
        : ""
    };
  },
  methods: {
    onClickOk() {
      if (this.rightClickedEvent) {
        this.editVacation({
          id: this.rightClickedEvent.event.id,
          details: this.details,
          start: this.startDate,
          end: this.endDate
        });
      } else {
        this.registerVacation({
          details: this.details,
          start: this.startDate,
          end: this.endDate
        });
      }
      this.closeVacationField();
    },
    onClickCancel() {
      console.log;
      this.startDate = "";
      this.endDate = "";
      this.menuStartDate = false;
      this.menuEndDate = false;
      this.details = "";
      this.closeVacationField();
    }
  }
};
</script>

<style>
</style>