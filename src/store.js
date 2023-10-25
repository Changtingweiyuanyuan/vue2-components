import Vue from "vue";
import Vuex from "vuex";
import intro from "@/pages/intro/store/index";
import demo from "@/pages/demo/store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    intro,
    demo,
  },
});
