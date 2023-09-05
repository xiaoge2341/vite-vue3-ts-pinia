import * as VueRouter from 'vue-router'
import { routes } from './routes'

const router = VueRouter.createRouter({
  routes: routes,
  history: VueRouter.createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const isAuth = true
  if (isAuth || to.name === "tip") {
    next()
  }
  else {
    next({ path: "/tip" });
  }
});

export default router
