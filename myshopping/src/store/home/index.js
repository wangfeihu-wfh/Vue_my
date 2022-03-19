import { reqCategoryList, reqGetBannerList } from '@/api';
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
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    console.log(result);
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data);
    } else {
      throw new Error('list 数据请求错误');
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};
const state = {
  categoryList: [],
  bannerList: [],
};
const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
