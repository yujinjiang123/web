import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: () => import('@/views/login')
    },{
      path: '/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: () => import('@/views/login')
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        title:"首页"
      },
      component: () => import('@/views/home')
    },
    // {
    //   path: "/",
    //   component: resolve => require(["@/views/components/Layout"], resolve),
    //   iconCls: "iconfont icon-vote", // 图标样式class
    //   children: [
    //     {
    //       path: "/program/vote/pk",
    //       component: resolve =>
    //         require(["@/views/programManage/VotePKManage"], resolve),
    //       name: "program-votepk",
    //       meta: {
    //         title: "PK投票管理",
    //         iconCls: "iconfont icon-vote", // 图标样式class
    //         roles: ["PROGRAM_ADMIN"]
    //       }
    //     }
    //   ],
    //   hidden: true
    // },
    {
      path: '/personalCenter',
      name:'personalCenter',
      component: () => import('@/views/personalCenter'),
      children:[
        {
          path:"/personalCenter/myData",
          component:()=> import('@/views/myData'),
          name: 'my-data',
        },
        {
          path:"/personalCenter/myCollection",
          component:()=> import('@/views/myCollection'),
          name: 'my-collection',
        },
        {
          path:"/personalCenter/myBlog",
          component:()=> import('@/views/myBlog'),
          name: 'my-blog',
        },
        {
          path:"/personalCenter/myFocus",
          component:()=> import('@/views/myFocus'),
          name: 'my-focus',
        },
        {
          path:"/personalCenter/myFans",
          component:()=> import('@/views/myFans'),
          name: 'my-fans',
        }
      ]
    },
    {
      path: '/tranformPassword',
      name: 'rePassword',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/tranformPassword')
    },
    {
      path: '/editor/markdown',
      name: 'markdown',
      meta: {
        hideInMenu: true
      },
      component: () => import('@/views/editor/markdown')
    },
    {
      path:"/test",
      name:"test",
      component:()=>import("@/views/top")
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
    },
  ]
})
