<template>
  <v-layout class="d-flex flex-column">
    <v-card class="ma-1" outlined>
      <user-profile></user-profile>
    </v-card>
    <v-card class="ma-1" outlined>
      <template v-if="account.userType === '분대장'">
        <leader-soldier-menu />
      </template>
      <template v-else-if="account.userType === '분대원'">
        <soldier-menu />
      </template>
      <template v-else-if="account.userType === '간부'">
        <executive-menu />
      </template>
    </v-card>
  </v-layout>
</template>

<script>
import UserProfile from "./UserProfile";
import LeaderSoldierMenu from "./LeaderSoldierMenu";
import SoldierMenu from "./SoldierMenu";
import ExecutiveMenu from "./ExecutiveMenu";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    UserProfile,
    ExecutiveMenu,
    LeaderSoldierMenu,
    SoldierMenu
  },
  computed: {
    account() {
      return this.$store.state.account;
    }
  }
};
</script>

<style>
.menuList {
  margin: 0;
  padding: 0;
}

.menuTitle {
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0;
  border: 1px solid #eee;
}
.link-text {
  color: #828282;
}
</style>