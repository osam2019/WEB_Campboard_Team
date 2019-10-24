<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style>
/* Calendar Style */
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

.theme--light.v-calendar-daily .v-calendar-daily__intervals-head {
  border-bottom: #e0e0e0 1px solid;
}

.theme--light.v-calendar-daily .v-calendar-daily_head-weekday {
  font-size: 1.2rem;
  color: white !important;
  margin-bottom: 1rem;
}

.theme--light.v-calendar-daily .v-calendar-daily_head-day {
  background-color: #009688;
  padding-top: 0.8rem;
  border-right: transparent !important;
}

.v-btn.v-btn--depressed.v-btn--fab.v-btn--round.theme--light.v-size--default {
  height: 40px;
  width: 40px;
}

.v-calendar-daily_head-day-label {
  margin-bottom: 0.5rem;
}

.v-calendar-daily__scroll-area::-webkit-scrollbar {
  display: none;
}
</style>