// 当前的模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';
// 三级联动接口
export const reqCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', method: 'GET' });
export const reqGetSearchInfo = (params) =>
  requests({ url: '/list', method: 'POST', data: params });
// mock数据的请求
export const reqGetBannerList = () => mockRequests.get('/banner');
export const reqFloorList = () => mockRequests.get('/floor');
