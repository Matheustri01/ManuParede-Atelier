<script setup>
const categories = [
  {
    label: 'Casamentos',
    sub: 'Madrinhas & Convidadas',
    image: 'https://picsum.photos/seed/casamento-atelier/500/750',
    href: '#casamentos',
  },
  {
    label: 'Formaturas',
    sub: 'Vestidos de Gala',
    image: 'https://picsum.photos/seed/formatura-atelier/500/750',
    href: '#formaturas',
  },
  {
    label: 'Festas & Coquetéis',
    sub: 'Cocktail & Black Tie',
    image: 'https://picsum.photos/seed/festa-atelier/500/750',
    href: '#festas',
  },
]
</script>

<template>
  <section class="categories" id="colecao">
    <div class="container">
      <div class="categories__header">
        <div class="categories__header-top">
          <div class="hairline"></div>
          <span class="label-caps categories__eyebrow">Explorar por Ocasião</span>
          <div class="hairline"></div>
        </div>
        <h2 class="headline-lg categories__title">Para Cada Momento Especial</h2>
      </div>

      <div class="categories__grid">
        <a
          v-for="cat in categories"
          :key="cat.label"
          :href="cat.href"
          class="cat-card"
        >
          <div class="cat-card__image-wrap">
            <img :src="cat.image" :alt="cat.label" class="cat-card__image" loading="lazy" />
            <div class="cat-card__overlay"></div>
            <div class="cat-card__label-overlay">
              <span class="label-caps cat-card__label-sub">{{ cat.sub }}</span>
              <h3 class="headline-md cat-card__label-name">{{ cat.label }}</h3>
            </div>
          </div>
          <div class="cat-card__underline"></div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: var(--section-gap) 0;
  background: var(--ivory);
}

.categories__header {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 56px;
}

.categories__header-top {
  display: flex;
  align-items: center;
  gap: 20px;
}

.categories__eyebrow {
  color: var(--gold-leaf);
  font-size: 13px;
  letter-spacing: 0.28em;
  white-space: nowrap;
}

.categories__title {
  color: var(--on-surface-variant);
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  letter-spacing: 0.04em;
}

.categories__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

/* Card */
.cat-card {
  display: block;
  position: relative;
  overflow: hidden;
}

.cat-card__image-wrap {
  aspect-ratio: 2/3;
  overflow: hidden;
  position: relative;
}

.cat-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.88) sepia(0.1) contrast(1.02);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cat-card:hover .cat-card__image {
  transform: scale(1.05);
}

.cat-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.7) 0%,
    rgba(10, 10, 10, 0.2) 45%,
    transparent 70%
  );
  transition: opacity 0.4s ease;
}

.cat-card:hover .cat-card__overlay {
  opacity: 1.15;
}

.cat-card__label-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cat-card__label-sub {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.22em;
}

.cat-card__label-name {
  color: var(--ivory);
  font-size: 22px;
}

.cat-card__underline {
  width: 0;
  height: 1px;
  background: var(--gold-leaf);
  transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cat-card:hover .cat-card__underline {
  width: 100%;
}

@media (max-width: 900px) {
  .categories__grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
    gap: 2px;
  }

  .categories__eyebrow {
    font-size: 11px;
  }
}
</style>
