export const routes = [
  {
    path: "/",
    name: 'entryPage',
    component: () => import("@/views/entryPage/index.vue")
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      isNav: true, //是否需要展示到首页路由导航
      label: '首页' //路由导航页展示按钮名称
    }
  },
  {
    path: "/news",
    name: 'news',
    component: () => import("@/views/news/news.vue"),
    meta: {
      isNav: false, //是否需要展示到首页路由导航
      label: '新闻' //路由导航页展示按钮名称
    }
  }, {
    path: '/tip',
    name: 'tip',
    component: () => import('@/components/Tip/index.vue'),
    meta: {
      isNav: false, //是否需要展示到首页路由导航
      label: '提示' //路由导航页展示按钮名称
    }
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form/index.vue'),
    meta: {
      isNav: true, //是否需要展示到首页路由导航
      label: '表单' //路由导航页展示按钮名称
    }
  },
  {
    path: '/web',
    name: 'web',
    component: () => import('@/views/web/index.vue'),
    meta: {
      isNav: true, //是否需要展示到首页路由导航
      label: 'web' //路由导航页展示按钮名称
    }
  },
  {
    path: '/h5',
    name: 'h5',
    component: () => import('@/views/h5/index.vue'),
    meta: {
      isNav: true, //是否需要展示到首页路由导航
      label: 'h5' //路由导航页展示按钮名称
    }
  }
]