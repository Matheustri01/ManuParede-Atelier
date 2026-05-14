<script setup>
const products = [
  {
    name: 'Vestido Íris',
    price: 'R$ 1.890',
    collection: 'Verão 2025',
    image: 'https://picsum.photos/seed/dress-iris-mp/400/600',
    tag: 'Novo',
  },
  {
    name: 'Vestido Celeste',
    price: 'R$ 2.240',
    collection: 'Verão 2025',
    image: 'https://picsum.photos/seed/dress-celeste-mp/400/600',
    tag: 'Exclusivo',
  },
  {
    name: 'Vestido Aurora',
    price: 'R$ 1.650',
    collection: 'Coleção Permanente',
    image: 'https://picsum.photos/seed/dress-aurora-mp/400/600',
    tag: null,
  },
  {
    name: 'Vestido Seraphine',
    price: 'R$ 2.890',
    collection: 'Verão 2025',
    image: 'https://picsum.photos/seed/dress-seraphine-mp/400/600',
    tag: 'Último',
  },
]
</script>

<template>
  <section class="products" id="vestidos">
    <div class="container">
      <div class="products__header">
        <span class="label-caps products__eyebrow">Novidades</span>
        <h2 class="display-lg">A Coleção</h2>
      </div>

      <div class="products__grid">
        <article v-for="product in products" :key="product.name" class="product-card">
          <div class="product-card__image-wrap">
            <img :src="product.image" :alt="product.name" class="product-card__image" loading="lazy" />
            <span v-if="product.tag" class="product-card__tag label-caps">{{ product.tag }}</span>
            <div class="product-card__actions">
              <a href="#" class="btn-primary product-card__btn">Ver Peça</a>
            </div>
          </div>
          <div class="product-card__info">
            <span class="label-caps product-card__collection">{{ product.collection }}</span>
            <h3 class="headline-md product-card__name">{{ product.name }}</h3>
            <span class="body-md product-card__price">{{ product.price }}</span>
          </div>
        </article>
      </div>

      <div class="products__footer">
        <a href="#" class="btn-secondary btn-secondary--onyx">Ver Toda a Coleção</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  padding: var(--section-gap) 0;
  background: var(--surface);
}

.products__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 56px;
}

.products__eyebrow {
  color: var(--gold-leaf);
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gutter);
}

/* Product Card */
.product-card {
  display: flex;
  flex-direction: column;
}

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.96) sepia(0.06);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card:hover .product-card__image {
  transform: scale(1.04);
}

.product-card__tag {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--gold-leaf);
  color: var(--onyx);
  padding: 5px 12px;
  font-size: 9px;
  letter-spacing: 0.22em;
}

.product-card__actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card:hover .product-card__actions {
  transform: translateY(0);
}

.product-card__btn {
  padding: 12px 28px;
  font-size: 11px;
  letter-spacing: 0.14em;
}

.product-card__info {
  padding: 18px 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.product-card__collection {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.22em;
}

.product-card__name {
  font-size: 19px;
  color: var(--onyx);
}

.product-card__price {
  color: var(--on-surface-variant);
}

.products__footer {
  margin-top: 64px;
  display: flex;
  justify-content: center;
}

@media (max-width: 1100px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .products__grid {
    grid-template-columns: 1fr;
    max-width: 340px;
    margin: 0 auto;
  }
}
</style>
