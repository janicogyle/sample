import { createRouter, createWebHistory } from 'vue-router'
import Inventory from '../views/Inventory.vue'
import Dashboard from '../views/Dashboard.vue'
import LoginTracker from '../views/LoginTracker.vue'
import StockReport from '../views/StockReport.vue'

const routes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
