<template>
  <v-app class="header">
    <!-- Tool-Bar 중앙 및 왼쪽 메뉴버튼 부분 -->
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list-title>
        <router-link to="/mainview">CampBoard</router-link>
      </v-list-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer class="pa-2" v-model="drawer" app>
      <!-- 왼쪽 menu drawer -->
      <!-- MenuList component view -->
      <menu-list></menu-list>
    </v-navigation-drawer>

    <!-- Main -->
    <v-content>
      <v-container class="d-flex flex-column align-items-flex-start fill-height">
        <slot name="main"></slot>
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer app color="primary" class="white--text">
      <span>developer: 박경필, 주경진, 정영훈</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
import MenuList from "./menus/MenuList.vue";

export default {
  components: {
    MenuList
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style scoped>
</style>