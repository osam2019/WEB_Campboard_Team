<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <question-post />
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import QuestionPost from "../components/question-board/QuestionPost";

export default {
  components: {
    ToolBar,
    QuestionPost
  }
};
</script>

<style>
</style>