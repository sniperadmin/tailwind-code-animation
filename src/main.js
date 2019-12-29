import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/main.css";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.prototype.$bus = new Vue({});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
