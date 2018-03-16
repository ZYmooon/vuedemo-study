import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
//创建一个store仓库,导出到外部
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    }
  },
  actions: {
    //context:承接上下文的作用
    increment(context) {
      context.commit("increment");
    },
    decrease(context) {
      context.commit("decrease");
    }
  },
  getters: {
    getState(state) {
      return state.count > 0 ? state.count : 0;
    }
  }
});
