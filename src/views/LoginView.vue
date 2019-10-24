<template>
  <v-container>
    <v-layout>
      <v-flex>
        <user-login></user-login>
      </v-flex>
      <!-- <v-flex xs6>
        <Regist />>
      </v-flex>-->
    </v-layout>
  </v-container>
  <!-- <button class="LoginButton">Login</button> -->
</template>

<script>
import UserLogin from "@/components/Login/UserLogin.vue";
//import Regist from "@/components/Login/Regist.vue";
export default {
  components: {
    UserLogin
    //Regist
  }
};
</script>

<style>
</style>