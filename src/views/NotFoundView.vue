<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        404 Error: 존재하지 않는 페이지입니다.
        <router-link to="/">되돌아기기</router-link>
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";

export default {
  components: { ToolBar }
};
</script>

<style>
</style>