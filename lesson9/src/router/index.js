import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'




Vue.use(Router)
const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/home',
         name: 'pagehome',
         component: ()=> import('../pages/pageHome')
      },
      {
         path: '/dashboard',
         name: 'pagedashboard',
         component: ()=> import('../pages/pageDashboard')
      },
      {
         path: '/dashboard/:page',
         name: 'pagedashboards',
         component: ()=> import('../pages/pageDashboard')
      },
      {
         path: '/hello',
         name: 'pagehello',
         component: ()=> import('../pages/pageHello')
      },
      //Добавление данных
      {
         path: '/add/payment/:category*',
         name: 'autoDataPay',
         component: ()=> import('../pages/pageDashboard')
      },
      {
         path: '/edit/payment/:category*',
         name: 'editDataPay',
         component: ()=> import('../pages/pageDashboard')
      },
      {
         path: '/404',
         name: 'nopage',
         component: ()=> import('../pages/noPage')
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
export default router;