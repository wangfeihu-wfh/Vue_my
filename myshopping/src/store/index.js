import Vue from 'vue';
import Vuex from 'vuex';
// 要使用插件一次
Vue.use(Vuex);
// // state仓库是存储数据的地方
// const state = {};
// // mutations:修改state的唯一手段
// const mutations = {};
// // actions:处理action,可以写自己的业务逻辑，包括数据请求等
// const actions = {};
// // getter：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};
import home from './home';
import search from './search';
export default new Vuex.Store({
  modules: {
    home,
    search,
  },
});
