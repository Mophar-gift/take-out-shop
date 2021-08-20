import Vue from 'vue';
// 引入第三方库
import 'lib-flexible';
// 引入自定义库
import App from './App.vue';
import router from './router';
import Header from './components/Header/Header'

Vue.config.productionTip = false;

// 注册全局组件Header
Vue.component('Header', Header)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
