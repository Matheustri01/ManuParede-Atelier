<script setup>
import CollectionStorePage from '../components/CollectionStorePage.vue'

const products = [
  { slug: 'vestido-onyx', name: 'Vestido Onyx', price: 1450, priceLabel: 'R$ 1.450', category: 'Coquetel', tag: null, image: 'https://picsum.photos/seed/dress-onyx-mp/800/1200' },
  { slug: 'vestido-garnet', name: 'Vestido Garnet', price: 1780, priceLabel: 'R$ 1.780', category: 'Festa', tag: 'Exclusivo', image: 'https://picsum.photos/seed/dress-garnet-mp/800/1200' },
  { slug: 'vestido-perle', name: 'Vestido Perle', price: 2120, priceLabel: 'R$ 2.120', category: 'Coquetel', tag: null, image: 'https://picsum.photos/seed/dress-perle-mp/800/1200' },
  { slug: 'vestido-eden', name: 'Vestido Eden', price: 3200, priceLabel: 'R$ 3.200', category: 'Sob medida', tag: 'Atemporal', image: 'https://picsum.photos/seed/dress-eden-mp/800/1200' },
  { slug: 'vestido-valence', name: 'Vestido Valence', price: 2650, priceLabel: 'R$ 2.650', category: 'Longo', tag: null, image: 'https://picsum.photos/seed/dress-valence-mp/800/1200' },
  { slug: 'vestido-marcella', name: 'Vestido Marcella', price: 2980, priceLabel: 'R$ 2.980', category: 'Sob medida', tag: 'Atemporal', image: 'https://picsum.photos/seed/dress-marcella-mp/800/1200' },
]
</script>

<template>
  <CollectionStorePage
    title="Poesia Costurada"
    description="Silhuetas que transformam memória em matéria, construídas ponto a ponto no atelier."
    hero-image="/images/euphoria-atelier.png"
    hero-alt="Criação artesanal da coleção Poesia Costurada"
    hero-position="42% center"
    :products="products"
  />
</template>
