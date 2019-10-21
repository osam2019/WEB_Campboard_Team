import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import Vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
