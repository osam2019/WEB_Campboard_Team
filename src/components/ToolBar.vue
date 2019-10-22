<template>
  <div class="header">
        <v-navigation-drawer
        v-model="drawerRight"
        app
        clipped
        right
        >
        <v-list dense>
            <v-list-item @click.stop="right = !right">
            <v-list-item-action>
                <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>Open Temporary Drawer</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
        <v-app-bar
        app
        clipped-right
        color="blue-grey"
        dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
        </v-app-bar>

  </div>
</template>
<script>
export default {
    data: () => ({
        drawerRight: null,
    }),
}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
/* .header .router-link-exact-active {
    color: #35495e;
} */
/* .header a {
    color: white;
} */
</style>