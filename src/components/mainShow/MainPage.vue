<template>
  <div class="d-flex flex-column align-center pt-4" style="width: 80%;">
    <schedule-calendar class="mb-10"></schedule-calendar>
    <food-calendar></food-calendar>
  </div>
</template>

<script>
import ScheduleCalendar from "./ScheduleCalendar";
import FoodCalendar from "./FoodCalendar";

export default {
  components: {
    ScheduleCalendar,
    FoodCalendar
  }
};
</script>

<style>
</style>