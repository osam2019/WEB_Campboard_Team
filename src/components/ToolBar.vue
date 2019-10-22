<template>
  <v-app class="header">
    <!-- Tool-Bar 중앙 및 왼쪽 메뉴버튼 부분 -->
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CampBoard</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <!-- 왼쪽 menu drawer -->
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <!-- MenuList component view -->
            <menu-list></menu-list>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main -->
    <v-content>
      <v-container class="d-flex flex-column align-items-flex-start fill-height">
        <slot name="main"></slot>
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer app color="primary" class="white--text">
      <span>developer: 박경필, 주경진</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
import MenuList from "./MenuList.vue";

export default {
  components: {
    MenuList
  },
  data: () => ({
    drawer: true
  })
};
</script>

<style scoped>
</style>