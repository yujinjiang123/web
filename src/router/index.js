import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/editor/markdown',
      name: 'markdown',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/markdown/markdown')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('@/views/roomdisplay')
    },
    {
      path: '/401',
      name: 'error_401',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/error-page/401')
    },
    {
      path: '/500',
      name: 'error_500',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/error-page/500')
    },
    {
      path: '*',
      name: 'error_404',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/error-page/404')
    }
  ]
})
