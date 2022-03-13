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
export default new VueRouter({
  //配置路由
  routes: [
    { path: '/home', component: Home, meta: { show: true } },
    { path: '/search/:keyWord', component: Search, meta: { show: true } },
    { path: '/login', component: Login, meta: { show: false } },
    { path: '/register', component: Register, meta: { show: false } },
    // 重定向
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
