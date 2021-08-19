/**
 * 路由器对象模块
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

Vue.use(VueRouter);

export default new VueRouter({
  // 配置路由模式为 history
  mode: 'history',
  // 配置路由路径
  routes,
});
