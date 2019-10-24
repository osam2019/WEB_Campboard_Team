<template>
  <v-card width="500" class="pa-5">
    <v-container>
      <v-row>
        <v-col class="display-1" cols="12">일정 등록</v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-dialog
            @click:outside="modal=false"
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="date" label="등록할 식단의 날짜를 선택하세요" prepend-icon="event" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">취소</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">선택</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list>
            <v-list-item>
              <v-list-item-title>식단을 선택하세요.</v-list-item-title>
              <v-spacer></v-spacer>
              <v-btn @click="addFieldForFoodList" small icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item>
            <v-list-item v-for="food in foodList" :key="food.id">
              <v-text-field
                v-model="food.value"
                name="details-input"
                label="식단"
                id="details-input"
                append-icon="mdi-minus"
                @click:append="removeFieldForFoodList({id:food.id})"
              />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex">
          <v-spacer></v-spacer>
          <v-btn @click="onRegister" raised color="primary">등록하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    addFood: Function,
    toggle: Function
  },
  data() {
    return {
      foodId: 2,
      foodList: [{ id: 1, value: "" }],
      date: "",
      modal: false
    };
  },
  methods: {
    addFieldForFoodList() {
      this.foodList.push({ id: this.foodId++, value: "" });
    },
    removeFieldForFoodList({ id }) {
      this.foodList.splice(this.foodList.findIndex(f => f.id === id), 1);
    },
    onRegister() {
      this.addFood({
        date: this.date,
        name: this.foodList.map(f => f.value).join("<br/>")
      });
      this.toggle();
    }
  }
};
//overlay 통신, 데이터 통신 - start, emnd, title
</script>