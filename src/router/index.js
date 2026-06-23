import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CollectionsPage from '../pages/CollectionsPage.vue'
import DressesPage from '../pages/DressesPage.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import SupportPage from '../pages/SupportPage.vue'
import AboutPage from '../pages/AboutPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',            component: HomePage },
    { path: '/colecoes',    component: CollectionsPage },
    { path: '/vestidos',    component: DressesPage },
    { path: '/checkout',    component: CheckoutPage },
    { path: '/peca/:slug',  component: ProductPage },
    { path: '/contato',     component: ContactPage },
    { path: '/suporte',     component: SupportPage },
    { path: '/sobre',       component: AboutPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'auto' }
    return { top: 0, behavior: 'auto' }
  },
})
