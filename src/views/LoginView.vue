<template>
  <v-app class="header">
    <user-login></user-login>
  </v-app>
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