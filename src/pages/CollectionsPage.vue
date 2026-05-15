<script setup>
import { ref, computed } from 'vue'
import NewsletterSection from '../components/NewsletterSection.vue'

const filters = [
  { label: 'Todas', value: 'todas' },
  { label: 'Casamentos', value: 'Casamentos' },
  { label: 'Formaturas', value: 'Formaturas' },
  { label: 'Festas & Coquetéis', value: 'Festas & Coquetéis' },
  { label: 'Coleção Permanente', value: 'Coleção Permanente' },
]

const activeFilter = ref('todas')

const allProducts = [
  { name: 'Vestido Íris',      price: 'R$ 1.890', category: 'Casamentos',         image: 'https://picsum.photos/seed/dress-iris-mp/400/600',      tag: 'Novo' },
  { name: 'Vestido Celeste',   price: 'R$ 2.240', category: 'Casamentos',         image: 'https://picsum.photos/seed/dress-celeste-mp/400/600',   tag: 'Exclusivo' },
  { name: 'Vestido Nuvem',     price: 'R$ 2.850', category: 'Casamentos',         image: 'https://picsum.photos/seed/dress-nuvem-mp/400/600',     tag: null },
  { name: 'Vestido Aurora',    price: 'R$ 1.650', category: 'Formaturas',         image: 'https://picsum.photos/seed/dress-aurora-mp/400/600',    tag: null },
  { name: 'Vestido Seraphine', price: 'R$ 2.890', category: 'Formaturas',         image: 'https://picsum.photos/seed/dress-seraphine-mp/400/600', tag: 'Último' },
  { name: 'Vestido Lumière',   price: 'R$ 1.990', category: 'Formaturas',         image: 'https://picsum.photos/seed/dress-lumiere-mp/400/600',   tag: 'Novo' },
  { name: 'Vestido Onyx',      price: 'R$ 1.450', category: 'Festas & Coquetéis', image: 'https://picsum.photos/seed/dress-onyx-mp/400/600',      tag: null },
  { name: 'Vestido Garnet',    price: 'R$ 1.780', category: 'Festas & Coquetéis', image: 'https://picsum.photos/seed/dress-garnet-mp/400/600',    tag: 'Exclusivo' },
  { name: 'Vestido Perle',     price: 'R$ 2.120', category: 'Festas & Coquetéis', image: 'https://picsum.photos/seed/dress-perle-mp/400/600',     tag: null },
  { name: 'Vestido Eden',      price: 'R$ 3.200', category: 'Coleção Permanente', image: 'https://picsum.photos/seed/dress-eden-mp/400/600',      tag: 'Atemporal' },
  { name: 'Vestido Valence',   price: 'R$ 2.650', category: 'Coleção Permanente', image: 'https://picsum.photos/seed/dress-valence-mp/400/600',   tag: null },
  { name: 'Vestido Marcella',  price: 'R$ 2.980', category: 'Coleção Permanente', image: 'https://picsum.photos/seed/dress-marcella-mp/400/600',  tag: 'Atemporal' },
]

const filtered = computed(() =>
  activeFilter.value === 'todas'
    ? allProducts
    : allProducts.filter(p => p.category === activeFilter.value)
)
</script>

<template>
  <main>

    <!-- 1 · Page Hero -->
    <section class="col-hero" data-nav-dark>
      <div class="col-hero__image-wrap">
        <img
          src="https://picsum.photos/seed/collections-hero-mp/1440/900"
          alt=""
          aria-hidden="true"
          class="col-hero__image"
        />
        <div class="col-hero__overlay"></div>
      </div>

      <div class="col-hero__content container">
        <div class="col-hero__breadcrumb">
          <RouterLink to="/" class="label-caps col-hero__bc-link">Início</RouterLink>
          <span class="col-hero__bc-sep">—</span>
          <span class="label-caps col-hero__bc-current">Coleções</span>
        </div>

        <div class="col-hero__text">
          <span class="label-caps col-hero__eyebrow">Verão 2025</span>
          <div class="hairline"></div>
          <h1 class="display-lg col-hero__title">
            Nossas<br>
            <em>Coleções</em>
          </h1>
          <p class="body-lg col-hero__sub">Doze peças. Uma linguagem.</p>
        </div>
      </div>

      <div class="col-hero__scroll-hint">
        <span class="label-caps col-hero__scroll-label">Rolar</span>
        <div class="col-hero__scroll-line"></div>
      </div>
    </section>

    <!-- 2 · Stats Bar -->
    <div class="col-stats">
      <div class="container col-stats__inner">
        <div class="col-stats__item">
          <span class="headline-md col-stats__num">12</span>
          <span class="label-caps col-stats__label">Peças Exclusivas</span>
        </div>
        <div class="col-stats__divider"></div>
        <div class="col-stats__item">
          <span class="headline-md col-stats__num">4</span>
          <span class="label-caps col-stats__label">Ocasiões</span>
        </div>
        <div class="col-stats__divider"></div>
        <div class="col-stats__item">
          <span class="headline-md col-stats__num">100%</span>
          <span class="label-caps col-stats__label">Feito à Mão</span>
        </div>
      </div>
    </div>

    <!-- 3 · Filter + Grid -->
    <section class="col-grid-section">
      <div class="container">
        <div class="col-grid-header">
          <div class="col-grid-header__row">
            <div class="col-grid-header__left">
              <span class="label-caps col-grid-header__eyebrow">Explorar Peças</span>
              <h2 class="display-lg col-grid-header__title">A Coleção</h2>
            </div>
          </div>
          <div class="hairline hairline--full"></div>
        </div>

        <div class="col-filters" role="tablist" aria-label="Filtrar por ocasião">
          <button
            v-for="f in filters"
            :key="f.value"
            role="tab"
            :aria-selected="activeFilter === f.value"
            :class="['col-filter', { 'col-filter--active': activeFilter === f.value }]"
            @click="activeFilter = f.value"
          >
            {{ f.label }}
          </button>
        </div>

        <p class="label-caps col-count">
          {{ filtered.length }} {{ filtered.length === 1 ? 'peça' : 'peças' }}
        </p>

        <TransitionGroup name="product" tag="div" class="col-grid">
          <article
            v-for="product in filtered"
            :key="product.name"
            class="product-card"
          >
            <div class="product-card__image-wrap">
              <img :src="product.image" :alt="product.name" class="product-card__image" loading="lazy" />
              <span v-if="product.tag" class="product-card__tag label-caps">{{ product.tag }}</span>
              <div class="product-card__actions">
                <a href="#" class="btn-primary product-card__btn">Ver Peça</a>
              </div>
            </div>
            <div class="product-card__info">
              <span class="label-caps product-card__category">{{ product.category }}</span>
              <h3 class="headline-md product-card__name">{{ product.name }}</h3>
              <span class="body-md product-card__price">{{ product.price }}</span>
            </div>
          </article>
        </TransitionGroup>
      </div>
    </section>

    <!-- 4 · Editorial Break -->
    <section class="col-editorial" data-nav-dark>
      <div class="col-editorial__bg-wrap">
        <img
          src="https://picsum.photos/seed/editorial-colecoes-mp/1440/600"
          alt=""
          aria-hidden="true"
          class="col-editorial__bg"
        />
        <div class="col-editorial__overlay"></div>
      </div>
      <div class="col-editorial__inner container">
        <span class="label-caps col-editorial__eyebrow">A Filosofia</span>
        <div class="hairline"></div>
        <blockquote class="col-editorial__quote">
          "Uma peça bem feita não segue tendências — ela as transcende."
        </blockquote>
        <a href="#contato" class="btn-secondary">Agendar Consulta</a>
      </div>
    </section>

    <!-- 5 · Newsletter -->
    <NewsletterSection />

  </main>
</template>

<style scoped>
/* ===== Hero ===== */
.col-hero {
  position: relative;
  height: 65vh;
  min-height: 520px;
  overflow: hidden;
}

.col-hero__image-wrap {
  position: absolute;
  inset: 0;
}

.col-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  filter: brightness(0.52) contrast(1.08) sepia(0.14);
}

.col-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    155deg,
    rgba(10, 10, 10, 0.55) 0%,
    rgba(10, 10, 10, 0.25) 45%,
    rgba(10, 10, 10, 0.72) 100%
  );
}

.col-hero__content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 110px;
  padding-bottom: 72px;
}

.col-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
}

.col-hero__bc-link {
  color: rgba(250, 246, 240, 0.45);
  font-size: 10px;
  letter-spacing: 0.2em;
  transition: color 0.3s ease;
}
.col-hero__bc-link:hover { color: var(--gold-leaf); }

.col-hero__bc-sep {
  color: rgba(250, 246, 240, 0.2);
  font-size: 10px;
}

.col-hero__bc-current {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.col-hero__text {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 560px;
}

.col-hero__eyebrow {
  color: var(--gold-leaf);
  font-size: 11px;
  letter-spacing: 0.22em;
}

.col-hero__title {
  color: var(--ivory);
}
.col-hero__title em {
  font-style: italic;
  color: var(--champagne);
}

.col-hero__sub {
  color: rgba(250, 246, 240, 0.62);
}

.col-hero__scroll-hint {
  position: absolute;
  bottom: 40px;
  right: var(--margin-desktop);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.col-hero__scroll-label {
  color: rgba(250, 246, 240, 0.32);
  font-size: 9px;
  letter-spacing: 0.28em;
}

.col-hero__scroll-line {
  width: 0.5px;
  height: 40px;
  background: linear-gradient(to bottom, var(--gold-leaf), transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ===== Stats Bar ===== */
.col-stats {
  background: var(--champagne);
  border-top: 0.5px solid var(--gold-leaf);
  border-bottom: 0.5px solid rgba(201, 168, 76, 0.3);
}

.col-stats__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.col-stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  flex: 1;
  max-width: 220px;
}

.col-stats__num {
  color: var(--onyx);
  font-size: 26px;
  letter-spacing: 0.02em;
}

.col-stats__label {
  color: var(--on-surface-variant);
  font-size: 9px;
  letter-spacing: 0.2em;
}

.col-stats__divider {
  width: 0.5px;
  height: 38px;
  background: rgba(201, 168, 76, 0.38);
  flex-shrink: 0;
}

/* ===== Filter + Grid ===== */
.col-grid-section {
  padding: var(--section-gap) 0;
  background: var(--surface);
}

.col-grid-header {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 40px;
}

.col-grid-header__row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.col-grid-header__left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col-grid-header__eyebrow { color: var(--gold-leaf); }

.col-grid-header__title { color: var(--onyx); }

/* Filter Tabs */
.col-filters {
  display: flex;
  gap: 0;
  border-bottom: 0.5px solid var(--outline-variant);
  margin-bottom: 20px;
  overflow-x: auto;
  scrollbar-width: none;
}
.col-filters::-webkit-scrollbar { display: none; }

.col-filter {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 14px 24px 13px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease;
  white-space: nowrap;
  margin-bottom: -0.5px;
}

.col-filter:hover { color: var(--onyx); }

.col-filter--active {
  color: var(--onyx);
  border-bottom-color: var(--gold-leaf);
  font-weight: 500;
}

.col-count {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
  margin-bottom: 40px;
}

/* Grid */
.col-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gutter);
  position: relative;
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

.product-card:hover .product-card__image { transform: scale(1.04); }

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

.product-card:hover .product-card__actions { transform: translateY(0); }

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

.product-card__category {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.22em;
}

.product-card__name {
  font-size: 19px;
  color: var(--onyx);
}

.product-card__price { color: var(--on-surface-variant); }

/* TransitionGroup */
.product-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.product-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
  position: absolute;
  width: calc((100% - 2 * var(--gutter)) / 3);
}
.product-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.product-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.product-move {
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ===== Editorial Break ===== */
.col-editorial {
  position: relative;
  overflow: hidden;
}

.col-editorial__bg-wrap {
  position: absolute;
  inset: 0;
}

.col-editorial__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.28) contrast(1.12) sepia(0.18);
}

.col-editorial__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.62);
}

.col-editorial__inner {
  position: relative;
  z-index: 2;
  padding-top: 90px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 640px;
}

.col-editorial__eyebrow { color: var(--gold-leaf); }

.col-editorial__quote {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.45;
  letter-spacing: 0.01em;
  color: var(--ivory);
  quotes: none;
}

/* ===== Responsive ===== */
@media (max-width: 1100px) {
  .col-grid { grid-template-columns: repeat(2, 1fr); }

  .product-leave-active {
    width: calc((100% - var(--gutter)) / 2);
  }
}

@media (max-width: 768px) {
  .col-hero { height: 58vh; }
  .col-hero__scroll-hint { display: none; }
  .col-hero__text { gap: 14px; }

  .col-editorial__quote { font-size: 22px; }
  .col-editorial__inner { padding-top: 64px; padding-bottom: 64px; }

  .col-filter { padding: 12px 16px 11px; font-size: 10px; }
}

@media (max-width: 600px) {
  .col-grid {
    grid-template-columns: 1fr;
    max-width: 340px;
    margin: 0 auto;
  }

  .product-leave-active { width: 340px; }

  .col-stats__inner {
    flex-direction: column;
    gap: 28px;
    padding-top: 36px;
    padding-bottom: 36px;
  }

  .col-stats__divider {
    width: 40px;
    height: 0.5px;
  }
}
</style>
