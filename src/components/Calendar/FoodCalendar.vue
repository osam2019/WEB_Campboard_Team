<template>
  <v-card height="500px" class="mb-12">
    <h1 class="teal darken-2 white--text text-center display-1 pa-3" style="border-radius: 10px">식단표</h1>
    <v-calendar type="month" now="2019-10-23" value="2019-10-23" :events="events"></v-calendar>
  </v-card>
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
export default {
  data: () => ({
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
        name: "불고기\n잡채",
        start: "2019-10-25"
      }
    ]
  })
};
</script>