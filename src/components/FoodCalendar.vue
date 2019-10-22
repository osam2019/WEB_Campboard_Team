<template>
  <v-sheet height="500">
    <v-calendar type="month" now="2019-10-23" value="2019-01-08" :events="events"></v-calendar>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        name: "불고기\n잡채",
        start: "2019-10-30"
      },
      {
        name: "짜장면\n현미밥",
        start: "2019-10-29"
      },
      {
        name: "고기\n치킨",
        start: "2019-10-28"
      },
      {
        name: "불고기\n한우",
        start: "2019-10-27"
      },
      {
        name: "불고기\n쿠키",
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