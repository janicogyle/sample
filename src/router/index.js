import { createRouter, createWebHistory } from 'vue-router'
import Inventory from '../views/Inventory.vue'
import Dashboard from '../views/Dashboard.vue'
import LoginTracker from '../views/LoginTracker.vue'
import StockReport from '../views/StockReport.vue'
import Login from '../views/Login.vue'

const routes = [

  {
    path: '/',
    redirect: 'Login',
    meta: { layout: 'empty' }
   
  },

  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Inventory',
    name: 'Inventory',
   component: Inventory
  },

  {
    path: '/StockReport',
    name: 'stockkreport',
   component: StockReport
  },
  
  {
    path: '/LoginTracker',
    name: 'logintracker',
   component: LoginTracker
  },
 
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' }
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
