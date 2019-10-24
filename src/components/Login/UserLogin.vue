<template>
  <div>
    <v-card class="elevation-12">
      <v-toolbar color="black" dark style="text-align:center">
        <v-toolbar-title>CampBoard</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="군번" v-model="usernum" type="text"></v-text-field>
          <v-text-field id="password" label="패스워드" v-model="password" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <router-link to="/mainview">
          <v-btn color="primary">Login</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (this.usernum === "" || this.password === "") {
      next("/");
    } else {
      next();
    }
  },
  data() {
    return {
      usernum: "",
      password: ""
    };
  }
};
</script>

<style>
</style>