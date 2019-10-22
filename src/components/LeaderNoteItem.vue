<template>
  <v-card style="margin: 0 auto; width: 50rem" raised>
    <v-list>
      <template v-if="!edit">
        <v-list-item>
          <v-card-title class="font-weight-bold title">{{report.date}} {{report.name}}</v-card-title>
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
          <v-text-field dense label="분대원 이름" filled rounded v-model="name" />
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
</template>

<script>
export default {
  props: {
    report: Object
  },
  data() {
    return {
      edit: false,
      name: this.report.name,
      text: this.report.text
    };
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
      this.name = this.report.name;
      this.text = this.report.text;
    },
    onSave() {
      this.report.name = this.name;
      this.report.text = this.text;
      this.toggleEdit();
    },
    onRemove() {
      this.$store.commit("removeReport", { id: this.report.id });
    }
  }
};
</script>

<style>
</style>