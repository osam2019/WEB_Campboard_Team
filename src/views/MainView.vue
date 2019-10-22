<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <div style="position:relative; top:-7%; width: 100%; height:100%">
          <Calander></Calander>
          <FoodCalendar></FoodCalendar>
        </div>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar.vue";
import Calander from "../components/Calander.vue";
import FoodCalendar from "../components/FoodCalendar.vue";
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