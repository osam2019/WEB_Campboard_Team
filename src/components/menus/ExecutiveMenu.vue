<template>
  <v-list nav dense>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "부대 일정 관리", icon: "mdi-folder" },
        { text: "식단표 관리", icon: "mdi-account-multiple" },
        { text: "부대 QnA", icon: "mdi-history" },
        { text: "중대근무 관리", icon: "mdi-check-circle" },
        { text: "상벌점 관리", icon: "mdi-upload" },
        { text: "마음의 소리함", icon: "mdi-cloud-upload" }
      ]
    };
  }
};
</script>

<style>
</style>