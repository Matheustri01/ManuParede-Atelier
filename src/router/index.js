import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CollectionsPage from '../pages/CollectionsPage.vue'
import DressesPage from '../pages/DressesPage.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',         component: HomePage },
    { path: '/colecoes', component: CollectionsPage },
    { path: '/vestidos', component: DressesPage,   meta: { navLight: true } },
    { path: '/checkout', component: CheckoutPage,  meta: { navLight: true } },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})
