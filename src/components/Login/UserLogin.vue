<template>
  <v-app class="header">
    <v-container class="fill-height">
      <v-row>
        <v-col class="d-flex flex-column justify-center">
          <v-layout class="d-flex justify-center mb-10">
            <img style="left:50%;width:200px;height:240px" src="../../asset/campboard.png" />
          </v-layout>
          <div class="d-flex justify-center">
            <v-card style="width:450px">
              <v-toolbar color="primary" dark style="text-align:center">
                <v-toolbar-title>CampBoard</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="군번" v-model="usernum" type="text"></v-text-field>
                  <v-text-field id="password" label="패스워드" v-model="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <router-link to="/register">
                  <v-btn color="primary">Register</v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="Login({usernum,password})">Login</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      usernum: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(["Login"])
  }
};
</script>

<style>
</style>