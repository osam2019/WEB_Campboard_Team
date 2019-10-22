import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reportId: 1,
    reports: []
  },
  getters: {},
  mutations: {
    addReport(state, { date, name, text }) {
      state.reports.push({ id: state.reportId++, date, name, text });
    },
    removeReport(state, { id }) {
      state.reports.splice(state.reports.findIndex(r => r.id === id), 1);
    }
  },
  actions: {}
});
