import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: {
      userType: "분대장",
      rank: "상병",
      name: "강민석",
      regiment: "작전지원중대",
      subRegiment: "1소대",
      room: "5생활관"
    },

    reportId: 1,
    squadMateId: 1,
    reports: [],
    squadMates: [],
    // 로그인 후 user 정보
    userName: "강민석",
    userLevel: "상병",
    userAuth: "분대장"
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
  actions: {}
});
