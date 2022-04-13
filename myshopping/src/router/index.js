// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
import Search from '@/pages/Search/index.vue';
import Detail from '@/pages/Detail/index.vue'
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push\replace
// 第一个参数，告诉原来的push方法往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      () => {},
      () => {}
    );
  }
};
export default new VueRouter({
  //配置路由
  routes: [
    {
      path:'/detail/:goodId',
      component: Detail,
      meta: {show: true}
    },
    {
      path: '/home',
      component: Home,
      meta: { show: true },
    },
    {
      path: '/search',
      component: Search,
      meta: { show: true },
      name: 'search',
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
    },
    // 重定向
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
