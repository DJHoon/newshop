import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home')
const Catergory = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

let routes = [
  {
    path: '',
    redirect: './home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Catergory
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
export default router