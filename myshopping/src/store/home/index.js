import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
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
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data);
    } else {
      throw new Error('list 数据请求错误');
    }
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code === 200) {
      commit('REQFLOORLIST', result.data);
    } else {
      throw new Error('floor数据请求错误');
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
  REQFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
