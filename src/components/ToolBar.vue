<template>
  <div class="header">
        <div>
            <v-card
                color="grey lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar dense>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
        </div>
  </div>
</template>
<script>
export default {
    
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