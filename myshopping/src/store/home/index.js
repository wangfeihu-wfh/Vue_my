import { reqCategoryList } from '@/api';
// home的vuex
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data);
    } else {
      throw new Error('数据请求失败');
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const state = {
  categoryList: [],
};
const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
