<template>
  <div>
    <tool-bar>
      <template v-slot:main>
        <point-table />
      </template>
    </tool-bar>
  </div>
</template>

<script>
import ToolBar from "../components/ToolBar";
import PointTable from "../components/point-board/PointTable";

export default {
  components: { ToolBar, PointTable }
};
</script>

<style>
</style>