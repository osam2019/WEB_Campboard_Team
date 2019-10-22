<template>
  <v-expand-transition>
    <v-card v-show="expand" raised>
      <v-list>
        <template v-if="!edit">
          <v-list-item>
            <v-card-title
              class="font-weight-bold title"
            >{{report.date}} {{report.rank}} {{report.name}}</v-card-title>
          </v-list-item>
          <v-list-item>
            <v-card-text>{{report.text}}</v-card-text>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item>
            <v-card-title class="font-weight-bold title">{{report.date}}</v-card-title>
          </v-list-item>
          <v-list-item>
            <v-container class="pa-0 ma-0">
              <v-row>
                <v-col cols="3" class="pb-0 pt-0">
                  <v-text-field dense label="분대원 계급" filled rounded v-model="rank" />
                </v-col>
                <v-col cols="5" class="pb-0 pt-0">
                  <v-text-field dense label="분대원 이름" filled rounded v-model="name" />
                </v-col>
              </v-row>
            </v-container>
          </v-list-item>
          <v-list-item>
            <v-textarea dense label="특이사항" filled rounded auto-grow v-model="text" />
          </v-list-item>
        </template>
        <v-list-item>
          <v-spacer />
          <template v-if="!edit">
            <v-btn class="mr-2" color="primary" raised @click="toggleEdit">수정하기</v-btn>
            <v-btn color="secondary" raised @click="onRemove">삭제하기</v-btn>
          </template>
          <template v-else>
            <v-btn class="mr-2" color="primary" outlined @click="toggleEdit">취소하기</v-btn>
            <v-btn color="primary" raised @click="onSave">저장하기</v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-expand-transition>
</template>

<script>
export default {
  props: {
    report: Object
  },
  data() {
    return {
      edit: false,
      rank: this.report.rank,
      name: this.report.name,
      text: this.report.text,
      expand: false
    };
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
      this.rank = this.report.rank;
      this.name = this.report.name;
      this.text = this.report.text;
    },
    onSave() {
      this.report.rank = this.rank;
      this.report.name = this.name;
      this.report.text = this.text;
      this.toggleEdit();
    },
    onRemove() {
      this.$store.commit("removeReport", { id: this.report.id });
    }
  },
  created() {
    setTimeout(() => {
      this.expand = true;
    });
  }
};
</script>

<style>
</style>