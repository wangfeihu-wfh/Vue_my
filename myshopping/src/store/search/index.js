// search的vuex
// // state仓库是存储数据的地方
// const state = {};
// // mutations:修改state的唯一手段
// const mutations = {};
// // actions:处理action,可以写自己的业务逻辑，包括数据请求等
// const actions = {};
// // getter：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};
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
