import { createRouter, createWebHistory } from 'vue-router'
import Inventory from '../views/Inventory.vue'
import Dashboard from '../views/Dashboard.vue'
import LoginTracker from '../views/LoginTracker.vue'
import StockReport from '../views/StockReport.vue'
import Login from '../views/Login.vue'
import HelpSupport from '../views/HelpSupport.vue'

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
    path: '/HelpSupport',
    name: 'HelpSupport',
    component: HelpSupport
  },
  
  {
    path: '/Inventory',
    name: 'Inventory',
   component: Inventory
  },

  {
    path: '/StockReport',
    name: 'Stockreport',
   component: StockReport
  },
  
  {
    path: '/LoginTracker',
    name: 'Logintracker',
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
