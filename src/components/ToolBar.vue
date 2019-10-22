<template>
  <div class="header">
        <!-- Tool-Bar 중앙 및 왼쪽 메뉴버튼 부분 -->
        <v-app-bar
        app
        clipped-right
        color="teal"
        dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>CampBoard</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
            <v-navigation-drawer
            v-model="drawer"
           
            app
        >
        <!-- 왼쪽 menu drawer -->
        <v-list dense >
            <v-list-item >
                <v-list-item-content >
                    <!-- MenuList component view -->
                    <menu-list></menu-list>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
        <!-- left 이 아래 부분 무슨기능하는거지? -->
        <v-navigation-drawer
            v-model="left"
            fixed
            temporary
        ></v-navigation-drawer>
       <!-- list -->

        <!-- Footer -->
        <v-footer
        app
        color="blue-grey"
        class="white--text"
        >
            <span>developer: 박경필, 주경진</span>
            <v-spacer></v-spacer>
            <span>&copy; 2019</span>
        </v-footer>

  </div>
</template>
<script>
import MenuList from './MenuList.vue';

export default {
    components: {
        MenuList,
    },
    data: () => ({
        drawer: null,
        left: false,
        
    }),
}
</script>

<style scoped>

</style>