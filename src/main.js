import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index.js";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DatetimePicker from "vuetify-datetime-picker";

Vue.use(DatetimePicker);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  vuetify,
  router
}).$mount("#app");
