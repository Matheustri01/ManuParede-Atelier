<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  heroImage: { type: String, required: true },
  heroAlt: { type: String, required: true },
  heroPosition: { type: String, default: 'center center' },
  products: { type: Array, required: true },
})

const sortBy = ref('destaques')

const sortedProducts = computed(() => {
  if (sortBy.value === 'menor-preco') return [...props.products].sort((a, b) => a.price - b.price)
  if (sortBy.value === 'maior-preco') return [...props.products].sort((a, b) => b.price - a.price)
  return props.products
})
</script>

<template>
  <main class="collection-shop">
    <section class="collection-shop__hero" data-nav-dark>
      <img
        :src="heroImage"
        :alt="heroAlt"
        class="collection-shop__hero-image"
        :style="{ objectPosition: heroPosition }"
      />
      <span class="collection-shop__hero-overlay" aria-hidden="true"></span>

      <nav class="collection-shop__crumb container" aria-label="Navegação estrutural">
        <RouterLink to="/" class="collection-shop__crumb-link">Início</RouterLink>
        <span>—</span>
        <RouterLink to="/colecoes" class="collection-shop__crumb-link">Coleções</RouterLink>
        <span>—</span>
        <span>{{ title }}</span>
      </nav>

      <div class="collection-shop__hero-content container">
        <span class="collection-shop__eyebrow">Coleção 2026</span>
        <h1 class="collection-shop__title">{{ title }}</h1>
        <p class="collection-shop__description">{{ description }}</p>
        <a href="#pecas" class="collection-shop__hero-link">ver peças</a>
      </div>
    </section>

    <section id="pecas" class="collection-shop__catalog container" aria-labelledby="catalog-title">
      <header class="collection-shop__catalog-header">
        <div>
          <span class="collection-shop__catalog-label">Disponíveis agora</span>
          <h2 id="catalog-title" class="collection-shop__catalog-title">Peças da coleção</h2>
        </div>

        <div class="collection-shop__toolbar">
          <span>{{ products.length }} peças</span>
          <label class="collection-shop__sort">
            <span class="sr-only">Ordenar produtos</span>
            <select v-model="sortBy">
              <option value="destaques">Destaques</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
            <svg viewBox="0 0 12 7" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>
          </label>
        </div>
      </header>

      <div class="collection-shop__grid">
        <article v-for="product in sortedProducts" :key="product.slug" class="shop-card">
          <RouterLink :to="`/peca/${product.slug}`" class="shop-card__image-link">
            <img :src="product.image" :alt="product.name" class="shop-card__image" loading="lazy" />
            <span v-if="product.tag" class="shop-card__tag">{{ product.tag }}</span>
            <span class="shop-card__view">ver peça</span>
          </RouterLink>

          <div class="shop-card__info">
            <div>
              <span class="shop-card__category">{{ product.category }}</span>
              <h3 class="shop-card__name">
                <RouterLink :to="`/peca/${product.slug}`">{{ product.name }}</RouterLink>
              </h3>
            </div>
            <span class="shop-card__price">{{ product.priceLabel }}</span>
          </div>
        </article>
      </div>
    </section>

    <aside class="collection-shop__services" aria-label="Serviços do atelier">
      <div class="collection-shop__services-inner container">
        <div>
          <span class="collection-shop__service-number">01</span>
          <h3>Ajustes personalizados</h3>
          <p>Cada peça pode ser adaptada às suas medidas.</p>
        </div>
        <div>
          <span class="collection-shop__service-number">02</span>
          <h3>Entrega para todo o Brasil</h3>
          <p>Envio cuidadoso e acompanhamento do pedido.</p>
        </div>
        <div>
          <span class="collection-shop__service-number">03</span>
          <h3>Atendimento do atelier</h3>
          <p>Orientação para escolher modelo e tamanho.</p>
        </div>
      </div>
    </aside>
  </main>
</template>

<style scoped>
.collection-shop {
  background: #fff;
  color: var(--onyx);
}

.collection-shop__hero {
  position: relative;
  min-height: 680px;
  height: 78svh;
  overflow: hidden;
  color: var(--ivory);
}

.collection-shop__hero-image,
.collection-shop__hero-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.collection-shop__hero-image {
  object-fit: cover;
  filter: saturate(0.88) contrast(1.04) brightness(0.78);
}

.collection-shop__hero-overlay {
  background: linear-gradient(180deg, rgba(8, 8, 8, 0.28), rgba(8, 8, 8, 0.1) 42%, rgba(8, 8, 8, 0.62));
}

.collection-shop__crumb {
  position: relative;
  z-index: 1;
  padding-top: 112px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(250, 246, 240, 0.62);
}

.collection-shop__crumb-link { transition: color 0.25s ease; }
.collection-shop__crumb-link:hover { color: var(--ivory); }

.collection-shop__hero-content {
  position: relative;
  z-index: 1;
  height: calc(100% - 132px);
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 18px;
}

.collection-shop__eyebrow,
.collection-shop__hero-link,
.collection-shop__catalog-label,
.shop-card__category,
.shop-card__tag,
.shop-card__view,
.collection-shop__service-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.collection-shop__eyebrow { color: rgba(250, 246, 240, 0.72); }

.collection-shop__title {
  max-width: 1000px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(60px, 8vw, 118px);
  font-weight: 400;
  line-height: 0.92;
  letter-spacing: -0.035em;
}

.collection-shop__description {
  max-width: 480px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(250, 246, 240, 0.76);
}

.collection-shop__hero-link {
  margin-top: 5px;
  padding-bottom: 7px;
  border-bottom: 1px solid currentColor;
}

.collection-shop__catalog {
  padding-top: 112px;
  padding-bottom: 130px;
}

.collection-shop__catalog-header {
  margin-bottom: 48px;
  padding-bottom: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  border-bottom: 1px solid rgba(10, 10, 10, 0.14);
}

.collection-shop__catalog-label { color: rgba(10, 10, 10, 0.45); }

.collection-shop__catalog-title {
  margin-top: 12px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(38px, 4vw, 58px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.025em;
}

.collection-shop__toolbar {
  display: flex;
  align-items: center;
  gap: 26px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(10, 10, 10, 0.55);
}

.collection-shop__sort { position: relative; }

.collection-shop__sort select {
  min-width: 170px;
  padding: 10px 34px 10px 13px;
  appearance: none;
  border: 1px solid rgba(10, 10, 10, 0.18);
  border-radius: 0;
  background: #fff;
  color: var(--onyx);
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.collection-shop__sort svg {
  position: absolute;
  top: 50%;
  right: 12px;
  width: 11px;
  fill: none;
  stroke: currentColor;
  transform: translateY(-50%);
  pointer-events: none;
}

.collection-shop__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 62px 24px;
}

.shop-card__image-link {
  position: relative;
  display: block;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  background: var(--surface-container);
}

.shop-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
}

.shop-card:hover .shop-card__image { transform: scale(1.025); filter: brightness(0.78); }

.shop-card__tag {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 10px;
  background: var(--ivory);
  color: var(--onyx);
}

.shop-card__view {
  position: absolute;
  bottom: 24px;
  left: 50%;
  padding-bottom: 6px;
  color: var(--ivory);
  border-bottom: 1px solid currentColor;
  opacity: 0;
  transform: translate(-50%, 10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.shop-card:hover .shop-card__view { opacity: 1; transform: translate(-50%, 0); }

.shop-card__info {
  padding-top: 17px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.shop-card__category { color: rgba(10, 10, 10, 0.44); }

.shop-card__name {
  margin-top: 7px;
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.25;
}

.shop-card__price {
  padding-top: 18px;
  flex-shrink: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.collection-shop__services { background: var(--ivory); }

.collection-shop__services-inner {
  padding-top: 64px;
  padding-bottom: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.collection-shop__services-inner > div {
  min-height: 140px;
  padding: 0 42px;
  border-left: 1px solid rgba(10, 10, 10, 0.12);
}

.collection-shop__services-inner > div:first-child { padding-left: 0; border-left: 0; }
.collection-shop__service-number { color: rgba(10, 10, 10, 0.35); }

.collection-shop__services h3 {
  margin: 23px 0 9px;
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 400;
}

.collection-shop__services p {
  max-width: 280px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(10, 10, 10, 0.58);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .collection-shop__hero { min-height: 620px; }
  .collection-shop__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .collection-shop__services-inner { grid-template-columns: 1fr; }
  .collection-shop__services-inner > div {
    min-height: 0;
    padding: 32px 0;
    border-top: 1px solid rgba(10, 10, 10, 0.12);
    border-left: 0;
  }
  .collection-shop__services-inner > div:first-child { border-top: 0; }
}

@media (max-width: 600px) {
  .collection-shop__hero { height: 82svh; }
  .collection-shop__crumb { padding-top: 92px; }
  .collection-shop__hero-content { height: calc(100% - 112px); padding-bottom: 42px; }
  .collection-shop__title { font-size: clamp(52px, 17vw, 72px); }
  .collection-shop__catalog { padding-top: 80px; padding-bottom: 90px; }
  .collection-shop__catalog-header { align-items: flex-start; flex-direction: column; }
  .collection-shop__toolbar { width: 100%; justify-content: space-between; }
  .collection-shop__sort select { min-width: 150px; }
  .collection-shop__grid { grid-template-columns: 1fr; gap: 48px; }
  .shop-card__image-link { aspect-ratio: 4 / 5; }
}

@media (prefers-reduced-motion: reduce) {
  .shop-card__image,
  .shop-card__view { transition: none; }
}
</style>
