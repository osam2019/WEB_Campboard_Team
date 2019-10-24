<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <vacation-calendar />
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import VacationCalendar from "../components/vacation/VacationCalendar";

export default {
  components: { ToolBar, VacationCalendar }
};
</script>

<style>
</style>