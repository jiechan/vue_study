import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Idle from './views/Idle.vue'
import ScanIDCard from './views/ScanIDCard.vue'
import ScanFace from './views/ScanFace.vue'
import LicenseList from './views/LicenseList.vue'
import Printing from './views/Printing.vue'
import Finished from './views/Finished.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Idle',
      component: Idle
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/scanface',
      name: 'ScanFace',
      component: ScanFace
    },
    {
      path: '/licenselist',
      name: 'LicenseList',
      component: LicenseList
    },
    {
      path: '/printing',
      name: 'Printing',
      component: Printing
    },
    {
      path: '/finished',
      name: 'Finished',
      component: Finished
    },
    {
      path: '/scanidcard',
      name: 'ScanIDCard',
      component: ScanIDCard
    }
  ]
})
