<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <Calander></Calander>
        <FoodCalendar></FoodCalendar>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar.vue";
import Calander from "../components/mainShow/Calendar.vue";
import FoodCalendar from "../components/mainShow/FoodCalendar.vue";
export default {
  components: {
    ToolBar,
    Calander,
    FoodCalendar
  }
};
</script>

<style>
</style>