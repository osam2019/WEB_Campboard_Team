<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-list>
          <v-list-item>마음의 편지가 전달되었습니다.</v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed small color="primary" @click="closeField">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    sending: Function
  },
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    closeField() {
      this.dialog = false;
      this.sending();
    }
  }
};
</script>

<style>
</style>