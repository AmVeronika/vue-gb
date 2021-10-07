import Vue from 'vue'
import Router from 'vue-router'

import pageHome from "../pages/pageHome";
import pageDashboard from "../pages/pageDashboard";
import pageHello from "../pages/pageHello";


Vue.use(Router)

export default new Router({
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
         path: '/hello',
         name: 'pagehello',
         component: pageHello
      },
   ]
})