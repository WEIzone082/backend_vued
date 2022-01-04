import Vue from 'vue'
import VueRouter from 'vue-router'
import Art from '../views/art.vue'
import Course from '../views/course.vue'
import Course_Update from '../views/course_update.vue'
import Members from '../views/member_management.vue'
import Products from '../views/products.vue'
import Orders from '../views/order_management.vue'
import Order_Details from '../views/order_details.vue'

Vue.use(VueRouter)

const routes = [

  { 
    path: '/art',
    name: 'art',
    component: Art
  },

  { 
    path: '/course',
    name: 'course',
    component: Course
  },

  {
    path: '/course/:name',
    name: 'course_update',
    component: Course_Update
  },

  { 
    path: '/',
    name: 'members',
    component: Members
  },

  { 
    path: '/products',
    name: 'products',
    component: Products
  },

  { 
    path: '/orders',
    name: 'orders',
    component: Orders
  },

  { 
    path: '/orders/:id',
    name: 'order_details',
    component: Order_Details,
    // updated 0103, set props to true to make id of the page readable
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
