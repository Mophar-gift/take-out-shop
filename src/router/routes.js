/**
 * 所有路由配置的数组
 */

import MSite from '@/pages/MSite/MSite';
import Search from '@/pages/Search/Search';
import Order from '@/pages/Order/Order';
import Profile from '@/pages/Profile/Profile';

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
  },
  {
    name: 'Search',
    path: '/search',
    component: Search,
  },
  {
    name: 'Order',
    path: '/order',
    component: Order,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile,
  },
];
