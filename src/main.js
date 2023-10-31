import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
// import "./scss/base.scss"; 

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
