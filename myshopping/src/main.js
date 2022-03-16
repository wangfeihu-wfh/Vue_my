import Vue from 'vue';
import App from './App.vue';
import TypeNav from '@/pages/Home/TypeNav/index';
import router from '@/router/index';
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
import { reqCategoryList } from '@/api';
let ResData = reqCategoryList();
console.log(ResData);
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
