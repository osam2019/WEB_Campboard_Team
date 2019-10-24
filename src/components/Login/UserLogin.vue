<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card style="width:450px" class="elevation-12">
          <v-toolbar color="black" dark style="text-align:center">
            <v-toolbar-title>CampBoard</v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-form>
              <v-field label="군번" v-model="usernum" type="text"></v-field>
              <v-field id="password" label="패스워드" v-model="password" type="password"></v-field>
            </v-form>
          </v-card>
          <v-card-actions>
            <router-link to="/Regist">
              <v-btn color="primary">Regist</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="Login({usernum,password})">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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