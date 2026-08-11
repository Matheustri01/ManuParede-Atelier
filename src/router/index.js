import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CollectionsPage from '../pages/CollectionsPage.vue'
import DressesPage from '../pages/DressesPage.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import EuphoriaCollectionPage from '../pages/EuphoriaCollectionPage.vue'
import PoesiaCosturadaCollectionPage from '../pages/PoesiaCosturadaCollectionPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',            component: HomePage },
    { path: '/colecoes',    component: CollectionsPage },
    { path: '/colecoes/euphoria', component: EuphoriaCollectionPage },
    { path: '/colecoes/poesia-costurada', component: PoesiaCosturadaCollectionPage },
    { path: '/vestidos',    component: DressesPage },
    { path: '/checkout',    component: CheckoutPage },
    { path: '/peca/:slug',  component: ProductPage },
    { path: '/contato',     component: ContactPage },
    { path: '/sobre',       component: AboutPage },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'auto' }
    return { top: 0, behavior: 'auto' }
  },
})
