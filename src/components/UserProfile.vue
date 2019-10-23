<template>
  <!-- <v-list class="d-flex flex-column pa-7">
    <v-list-item class="d-flex justify-center">
      <v-list-item-avatar size="100">
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-list-item>{{ account.rank }} {{account.name}}</v-list-item>
    <v-list-item>{{ account.regiment }} {{account.subRegiment}}</v-list-item>
    <v-list-item>{{account.room}}</v-list-item>
    <v-list-item>{{account.userType}}</v-list-item>
  </v-list>-->
  <v-container class="pl-9 pr-9 d-flex flex-column justify-center">
    <v-row class="align-self-center">
      <v-col class="title font-weight-bold">
        <v-avatar size="100">
          <v-img class="card-img" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
    <v-row class="align-self-center">
      <v-col class="title font-weight-bold">{{ account.rank }} {{account.name}}</v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex align-items-center">
        <v-icon class="mr-3">mdi-map-marker</v-icon>
        <div>
          <span>{{ account.regiment }}</span>
          <div>{{account.subRegiment}}</div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex align-items-center">
        <v-icon class="mr-3">mdi-home</v-icon>
        <span>{{account.room}}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex align-items-center">
        <v-icon class="mr-3">mdi-clipboard-account-outline</v-icon>
        <span>{{account.userType}}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    account() {
      return this.$store.state.account;
    }
  }
};
</script>

<style scoped>
.user-container {
  font-size: 15px;
}
.v-list-item {
  display: inline-block;
}
.user-description {
  padding-left: 15px;
  display: inline-block;
}
</style>