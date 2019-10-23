<template>
  <v-layout class="d-flex flex-column">
    <v-card class="ma-1" outlined>
      <user-profile></user-profile>
    </v-card>
    <v-card class="ma-1" outlined>
      <template v-if="type === '분대장'">
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
      <template v-else-if="type === '분대원'"></template>
      <template v-else-if="type === '간부'"></template>
      <template v-else>외부사람</template>
    </v-card>
  </v-layout>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  data() {
    return {
      type: "분대원",
      items: [
        { text: "분대장 수첩", icon: "mdi-folder" },
        { text: "생활관 게시판", icon: "mdi-account-multiple" },
        { text: "생활관 Talk", icon: "mdi-star" },
        { text: "부대 QnA", icon: "mdi-history" },
        { text: "중대근무 일정", icon: "mdi-check-circle" },
        { text: "상벌점 현황", icon: "mdi-upload" },
        { text: "마음의 소리함", icon: "mdi-cloud-upload" }
      ]
    };
  }
};
</script>

<style>
.menuList {
  margin: 0;
  padding: 0;
}

.menuTitle {
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0;
  border: 1px solid #eee;
}
.link-text {
  color: #828282;
}
</style>