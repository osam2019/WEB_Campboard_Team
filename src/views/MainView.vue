<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <main-page></main-page>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import MainPage from "../components/mainShow/MainPage";

export default {
  components: {
    ToolBar,
    MainPage
  }
};
</script>

<style>
</style>