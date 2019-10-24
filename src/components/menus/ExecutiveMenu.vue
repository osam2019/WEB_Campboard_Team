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
<<<<<<< HEAD
        { text: "부대 QnA", icon: "mdi-history", to: "/" },
        { text: "중대근무 관리", icon: "mdi-check-circle", to: "/" },
        { text: "상벌점 관리", icon: "mdi-upload", to: "/" },
        { text: "마음의 소리함", icon: "mdi-cloud-upload", to: "/" },
        { text: "휴가 현황", icon: "mdi-cloud-upload", to: "Vacation" }
=======
        { text: "부대 일정 관리", icon: "mdi-folder", to: "/" },
        { text: "식단표 관리", icon: "mdi-account-multiple", to: "/" },
        { text: "부대 QnA", icon: "mdi-history", to: "questionboard" },
        { text: "중대근무 관리", icon: "mdi-check-circle", to: "/" },
        { text: "상벌점 관리", icon: "mdi-upload", to: "/" },
        { text: "마음의 소리함", icon: "mdi-cloud-upload", to: "heartletter" }
>>>>>>> f4a48b9c34a9f14d75601277874f6e6a27dba9c2
      ]
    };
  }
};
</script>

<style>
</style>