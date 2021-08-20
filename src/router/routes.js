/**
 * 所有路由配置的数组
 */

import MSite from '@/pages/MSite/MSite';
import Search from '@/pages/Search/Search';
import Order from '@/pages/Order/Order';
import Profile from '@/pages/Profile/Profile';
import Login from '@/pages/Login/Login';

export default [
  // --- 一级路由
  {
    path: '/',
    redirect: '/msite',
  },
  {
    name: 'MSite',
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    name: 'Search',
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    name: 'Order',
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
];
