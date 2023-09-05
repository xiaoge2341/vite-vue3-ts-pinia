export const routes = [
  {
    path: "/",
    name: 'home',
    component: () => import("@/views/home/home.vue"),
    children: [
      {
        path: '/home',
        name: 'homeChildren',
        component: () => import('@/views/home/children.vue'),
      }
    ]
  }, {
    path: "/news",
    name: 'news',
    component: () => import("@/views/news/news.vue")
  }, {
    path: '/tip',
    name: 'tip',
    component: () => import('@/components/Tip/index.vue')
  }
]