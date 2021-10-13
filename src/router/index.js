import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Image from '../views/images.vue'
import AddImage from '../views/addimage.vue'
import Account from '../views/account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image',
    name: 'image',
    component: Image
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/image/add',
    name: 'add-image',
    component: AddImage
  }

]

const router = new VueRouter({
  routes
})

export default router
