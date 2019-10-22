<template>
  <v-card raised>
    <v-list>
      <v-list-item>
        <v-card-title class="font-weight-bold display-1">오늘은 무슨 일이 있었나요?</v-card-title>
      </v-list-item>
      <v-list-item>
        <v-card-subtitle>오늘 분대원의 하루를 기록해주세요.</v-card-subtitle>
      </v-list-item>
      <v-list-item>
        <v-container class="pa-0 ma-0">
          <v-row>
            <v-col cols="3" class="pb-0 pt-0">
              <v-text-field dense label="계급" filled rounded v-model="rank" />
            </v-col>
            <v-col cols="5" class="pb-0 pt-0">
              <v-text-field dense label="이름" filled rounded v-model="name" />
            </v-col>
          </v-row>
        </v-container>
      </v-list-item>
      <v-list-item>
        <v-textarea dense label="특이사항" filled rounded auto-grow v-model="text" />
      </v-list-item>
      <v-list-item>
        <v-spacer />
        <v-btn color="primary" raised @click="onPostReport">게시하기</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      rank: "",
      name: "",
      text: ""
    };
  },
  computed: {
    squadMates() {
      return this.$store.state.squadMates;
    }
  },
  methods: {
    onPostReport() {
      this.$store.commit("addReport", {
        date: new Date().toISOString().substring(0, 10),
        squadMateId: 1,
        rank: this.rank,
        name: this.name,
        text: this.text
      });

      if (!this.squadMates.find(s => s.name === this.name)) {
        this.$store.commit("addSquadMate", {
          rank: this.rank,
          name: this.name
        });
      }

      this.rank = "";
      this.name = "";
      this.text = "";
    }
  }
};
</script>

<style>
</style>