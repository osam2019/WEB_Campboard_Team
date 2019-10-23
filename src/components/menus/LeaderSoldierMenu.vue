<template>
  <v-list nav dense>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item router :to="{name:item.to}" exact>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "분대장 수첩", icon: "mdi-folder", to: "LeaderNoteView" },
        {
          text: "생활관 게시판",
          icon: "mdi-account-multiple",
          to: "ClassBoard"
        },
        { text: "생활관 Talk", icon: "mdi-star", to: "/" },
        { text: "부대 QnA", icon: "mdi-history", to: "questionboard" },
        { text: "중대근무 일정", icon: "mdi-check-circle", to: "/" },
        { text: "상벌점 현황", icon: "mdi-upload", to: "PointView" },
        { text: "마음의 소리함", icon: "mdi-cloud-upload", to: "/" }
      ]
    };
  }
};
</script>

<style>
</style>