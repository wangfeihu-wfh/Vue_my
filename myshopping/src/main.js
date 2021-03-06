import Vue from 'vue';
import App from './App.vue';
import TypeNav from '@/components/TypeNav/index';
import router from '@/router/index';
import store from '@/store/index';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination/index'
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  //   注册仓库：组件实例身上会多了一个$store属性
  store,
}).$mount('#app');
