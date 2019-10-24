import Vue from "vue";
import Vuex from "vuex";
import { router } from "../routes/index";

// mock-up data
import accountDataJSON from "./mock/account.json";
import pointDataJSON from "./mock/point-data.json";
import postListJSON from "./mock/post-list.json";

Vue.use(Vuex);
export const USE_MOCK_UP_DATA = true;

export default new Vuex.Store({
  state: {
    Leaders: USE_MOCK_UP_DATA ? accountDataJSON : [],
    isLogin: false,
    account: null,
    reportId: 1,
    squadMateId: 1,
    reports: [],
    squadMates: [],

    pointData: USE_MOCK_UP_DATA ? pointDataJSON : [],
    headers: [
      { text: "계급", value: "rank" },
      { text: "이름", value: "name" },
      { text: "상점", value: "award" },
      { text: "벌점", value: "penalty" },
      { text: "월간 상점", value: "monthlyAward" },
      { text: "월간 벌점", value: "monthlyPenalty" },
      { text: "사용 상점", value: "usedAward" }
    ],
    logTableHeaders: [
      { text: "수여자 계급", value: "giverRank" },
      { text: "수여자 이름", value: "giverName" },
      { text: "수여 날짜", value: "date" },
      { text: "점수", value: "point" },
      { text: "사유", value: "reason" }
    ],
    // QuestionVuew, ClasBoard에 쓰일 내용들
    postList: USE_MOCK_UP_DATA ? postListJSON : []
  },
  getters: {
    joinSquadMatesAndReport(state) {
      return [...state.squadMates].map(squad => {
        Vue.set(
          squad,
          "reports",
          state.reports
            .filter(r => r.name === squad.name)
            .map(r => ({ date: r.date, rank: r.rank, text: r.text }))
        );
        return squad;
      });
    }
  },
  mutations: {
    //로그인 성공
    isLoginSuccess(state, who) {
      state.isLogin = true;
      console.log(state.account);
      console.log(who);
      state.account = Object.assign({}, who);
      console.log(state.account);
    },
    isLoginError(state) {
      state.isLogin = false;
    },
    addSquadMate(state, { name }) {
      state.squadMates.push({ id: state.squadMateId++, name });
    },
    removeSquadMate(state, { name }) {
      const reportOfMate = state.reports
        .map((r, i) => (r.name === name ? i : -1))
        .filter(idx => idx >= 0);
      reportOfMate.reverse().forEach(idx => state.reports.splice(idx, 1));
      state.squadMates.splice(
        state.squadMates.findIndex(s => s.name === name),
        1
      );
    },
    addReport(state, { date, rank, name, text }) {
      state.reports.push({
        id: state.reportId++,
        date,
        rank,
        name,
        text
      });
    },
    removeReport(state, { id }) {
      const squadMateName = state.reports.splice(
        state.reports.findIndex(r => r.id === id),
        1
      )[0].name;

      if (state.reports.filter(r => r.name === squadMateName).length === 0) {
        state.squadMates.splice(
          state.squadMates.findIndex(s => s.name === squadMateName),
          1
        );
      }
    }
  },
  actions: {
    //로그인 시도!
    Login({ state, commit }, loginObj) {
      //해당 유저 찾기
      let selectedUser = null;

      state.Leaders.forEach(user => {
        if (user.usernum === loginObj.usernum) selectedUser = user;
      });

      if (selectedUser == null) {
        alert("해당 유저가 없습니다!");
        commit("isLoginError");
      } else if (selectedUser.password != loginObj.password) {
        alert("비밀번호가 다릅니다!");
        commit("isLoginError");
      } else {
        commit("isLoginSuccess", selectedUser);
        router.push({ name: "mainview" });
      }
    },
    getPointLogData(_, { id }) {
      if (!USE_MOCK_UP_DATA) {
        // get data from server
      } else {
        const getData = () => import("./mock/point-data-log.json");
        return getData().then(data =>
          Array.prototype.find.call(data.default, d => d.id === id)
        );
      }
    }
  }
});
