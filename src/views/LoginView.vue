<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="black" dark style="text-align:center">
                <v-toolbar-title>CampBoard</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="군번" name="login" type="text"></v-text-field>

                  <v-text-field id="password" label="패스워드" name="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/mainview">
                  <v-btn color="primary">Login</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <user-login></user-login>
  </v-app>
  <!-- <button class="LoginButton">Login</button> -->
</template>

<script>
import UserLogin from "../components/UserLogin.vue";

export default {
  components: {
    "user-login": UserLogin
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