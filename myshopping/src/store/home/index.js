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
    console.log('getBannerList-satrt');
    let result = await reqGetBannerList();
    console.log('getBannerList-end');
    if (result.code === 200) {
      console.log('result');
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
    console.log('GETBANNERLIST');
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
