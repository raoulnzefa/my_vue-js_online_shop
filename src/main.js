import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';
import axios from "axios";
import router from "./config/router";
import {DATABASE_URL} from "./config/config";
import store from "./store/store";

Vue.prototype.$http = axios;
axios.defaults.baseURL = DATABASE_URL;

export const eventBus = new Vue({
  data: {
    page: "User",
    products: [],
    cart: [],
  },
  methods: {
    addProduct(data) {
      this.$http.post('products.json', data)
          .then( () => {
            this.products = [ ...this.products, { ...data, id: this.products.length + 1 + '' }];
            this.$emit('update:products', this.products);
      })
    },
  },
});

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
