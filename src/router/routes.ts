
// 引入创建路由模式 history模式
import Layout from '../layout/index.vue'
// 引入路由各页面配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Layout,
    name: 'layout',
    children: [
      {
        path: '/home',
        component: () => import('../views/home/index.vue'),
        name: 'home'
      },
      {
        path: '/mine',
        component: () => import('../views/mine/index.vue'),
        name: 'mine'
      }
    ]
  },

]

export default routes;