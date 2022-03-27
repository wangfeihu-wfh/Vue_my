// search的vuex
import { reqGetSearchInfo } from '@/api';
const actions = {
  async getSearchInfo({ commit }, parmas = {}) {
    let result = await reqGetSearchInfo(parmas);
    if (result.code === 200) {
      commit('GETSEARCHINFO', result.data);
    } else {
      throw new Error('searchInfo error');
    }
  },
};
const mutations = {
  GETSEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo;
  },
};
const state = {
  searchInfo: {},
};
// 项目中的getters是为了简化数据
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList || [];
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || [];
  },
  attrsList(state) {
    return state.searchInfo.attrsList || [];
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
