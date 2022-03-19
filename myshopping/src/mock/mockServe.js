// 先引入mockjs模块
import Mock from 'mockjs';
// webpack图片和JSON数据格式是默认对外暴露
import banner from './banner.json';
import floor from './floor.json';

// mock数据:请求的地址，请求的数据
Mock.mock('/mock/banner', { code: 200, data: banner });
Mock.mock('/mock/floor', { code: 200, data: floor });
