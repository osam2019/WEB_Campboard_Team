<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <v-container class="fill-height" style="width: 100%;">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8" class="mb-12">
              <Calander></Calander>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8">
              <FoodCalendar></FoodCalendar>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar.vue";
import Calander from "../components/Calendar/Calendar.vue";
import FoodCalendar from "../components/Calendar/FoodCalendar.vue";
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