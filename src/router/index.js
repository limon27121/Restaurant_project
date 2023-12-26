import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Sign_Up from '../components/Sign_Up.vue'
import Login from '../components/Login.vue'
import Add from '../components/Add.vue'

// import Update from '../components/Update.vue'
// import HomeView from '../views//Update/HomeView.vue'
import HomeView from '@/views/Update/HomeView.vue'
import Update1 from '../views//Update/Update1.vue'





const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'Sign_Up',
    component: Sign_Up
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/update1',
    name: 'update1',
    component: Update1
  },
  { 
    // path: '/update',
   
    path: '/homeview',
    name: 'HomeView',
    component: HomeView,
    props: true,
  },
  { 
    // path: '/update',
   
    path: '/updateview/:id',
    name: 'Update1',
    component: Update1,
    // props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
