import Vue from 'vue'
import store from '../store'
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
      //Добавление данных
      {
         path: '/add/payment/:category*',
         name: 'autoDataPay',
         component: pageDashboard,
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
router.beforeEach((to, from, next) => {
   if (to.path == '/dashboard') {
      // При открытии отображается крайняя страница с данными 
      next({ path: `/dashboard/${store.state.currentPage}` })
   } else {
      next()
   }
});
// router.beforeResolve((to, from, next) => {
//    if (to.name == 'autoDataPay') {
//       // При открытии отображается крайняя страница с данными 
//       next({ name: `autoDataPay` })
//    } else {
//       next()
//    }
// })
export default router;