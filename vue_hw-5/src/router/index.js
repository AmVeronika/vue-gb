import Vue from 'vue'
import Router from 'vue-router'

import pageHome from "../pages/pageHome";
import pageDashboard from "../pages/pageDashboard";
import pageHello from "../pages/pageHello";
import noPage from "../pages/noPage";

Vue.use(Router)
const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/home',
         name: 'pagehome',
         component: pageHome
      },
      {
         path: '/dashboard',
         name: 'pagedashboard',
         component: pageDashboard
      },
      {
         path: '/dashboard/:page',
         name: 'pagedashboards',
         component: pageDashboard
      },
      {
         path: '/hello',
         name: 'pagehello',
         component: pageHello
      },
      {
         path: '/404',
         name: 'nopage',
         component: noPage
      },
      {
         path: '*',
         redirect: { name: 'nopage' }
      },
   ]
});
// router.beforeEach((to, from, next) => {
//    if (to.path == '/dashboard') {
//       next({ path: '/dashboard/1' })
//    } else {
//       next()
//    }

// });
export default router;