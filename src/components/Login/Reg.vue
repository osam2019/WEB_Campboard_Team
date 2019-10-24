<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card style="width:450px">
          <v-toolbar color="primary" dark style="text-align:center">
            <v-toolbar-title>CampBoard</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="군번" v-model="Leader.usernum" type="text"></v-text-field>
              <v-text-field id="password" label="패스워드" v-model="password1" type="password"></v-text-field>
              <v-text-field id="password" label="패스워드확인" v-model="password2" type="password"></v-text-field>
              <v-select :items="items" label="구분" v-model="Leader.userType" outlined></v-select>

              <v-row>
                <v-col cols="4">
                  <template v-if="Leader.userType === '간부'">
                    <v-select :items="rank2" label="계급" v-model="Leader.rank" outlined></v-select>
                  </template>
                  <template v-else>
                    <v-select :items="rank1" label="계급" v-model="Leader.rank" outlined></v-select>
                  </template>
                </v-col>
                <v-col>
                  <v-text-field id="password" label="이름" v-model="Leader.name" type="text"></v-text-field>
                </v-col>
              </v-row>
              <v-text-field id="password" label="소속" v-model="Leader.regiment" type="text"></v-text-field>
              <v-row>
                <v-col>
                  <v-text-field id="password" label="소대" v-model="Leader.subRegiment" type="text"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field id="password" label="생활관" v-model="Leader.room" type="text"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link to="/loginview">
              <v-btn color="primary">돌아가기</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="checkPwd()">Regist</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoginViewVue from "../../views/LoginView.vue";
export default {
  computed: {
    ...mapState(["Leaders"])
  },
  beforeRouteLeave(to, from, next) {
    if (this.usernum === "" || this.password === "") {
      next("/");
    } else {
      next();
    }
  },
  data() {
    return {
      items: ["분대원", "간부", "분대장"],
      rank1: ["병장", "상병", "일병", "이병"],
      rank2: ["대위", "중위", "소위", "상사", "중사", "하사"],
      Leader: {
        rank: "",
        usernum: "",
        password: "",
        userType: "",
        name: "",
        regiment: "",
        subRegiment: "",
        room: ""
      },
      password1: "",
      password2: ""
    };
  },
  methods: {
    checkPwd() {
      console.log(this.Leader);
      var nowobj = this.Leader;
      function checkInValid() {
        return (
          nowobj.rank == "" ||
          nowobj.usernum == "" ||
          nowobj.userType == "" ||
          nowobj.name == "" ||
          nowobj.regiment == "" ||
          nowobj.subRegiment == "" ||
          nowobj.room == ""
        );
      }
      if (checkInValid()) {
        alert("양식을 다 채워주세요!");
        return;
      } else if (this.password1 == this.password2) {
        this.Leader.password = this.password1;
        var newPerson = Object.assign({}, this.Leader);
        console.log(newPerson);
        this.$store.state.Leaders.push(newPerson);
        console.log(this.$store.state.Leaders);
        //this.$router.push({ name: "loginview" });
        return;
      } else {
        alert("패스워드가 다릅니다.");
        return;
      }
    }
  }
};
</script>

<style>
</style>