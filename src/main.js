import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';
import axios from "axios";
import router from "./config/router";
import {DATABASE_URL} from "./config/config";
import store from "./store/store";

Vue.prototype.$http = axios;
axios.defaults.baseURL = DATABASE_URL;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
