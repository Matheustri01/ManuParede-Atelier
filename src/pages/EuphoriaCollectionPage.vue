<script setup>
import CollectionStorePage from '../components/CollectionStorePage.vue'

const products = [
  { slug: 'vestido-iris', name: 'Vestido Íris', price: 1890, priceLabel: 'R$ 1.890', category: 'Longo', tag: 'Novo', image: 'https://picsum.photos/seed/dress-iris-mp/800/1200' },
  { slug: 'vestido-celeste', name: 'Vestido Celeste', price: 2240, priceLabel: 'R$ 2.240', category: 'Longo', tag: 'Exclusivo', image: 'https://picsum.photos/seed/dress-celeste-mp/800/1200' },
  { slug: 'vestido-nuvem', name: 'Vestido Nuvem', price: 2850, priceLabel: 'R$ 2.850', category: 'Cerimônia', tag: null, image: 'https://picsum.photos/seed/dress-nuvem-mp/800/1200' },
  { slug: 'vestido-aurora', name: 'Vestido Aurora', price: 1650, priceLabel: 'R$ 1.650', category: 'Festa', tag: null, image: 'https://picsum.photos/seed/dress-aurora-mp/800/1200' },
  { slug: 'vestido-seraphine', name: 'Vestido Seraphine', price: 2890, priceLabel: 'R$ 2.890', category: 'Gala', tag: 'Última peça', image: 'https://picsum.photos/seed/dress-seraphine-mp/800/1200' },
  { slug: 'vestido-lumiere', name: 'Vestido Lumière', price: 1990, priceLabel: 'R$ 1.990', category: 'Festa', tag: 'Novo', image: 'https://picsum.photos/seed/dress-lumiere-mp/800/1200' },
]
</script>

<template>
  <CollectionStorePage
    title="Euphoria"
    description="Uma coleção sobre presença, movimento e a alegria de ocupar o próprio espaço."
    hero-image="/images/home-hero-couture.png"
    hero-alt="Vestido marfim da coleção Euphoria"
    hero-position="center center"
    :products="products"
  />
</template>
