<script setup>
const collections = [
  {
    name: 'Euphoria',
    eyebrow: 'Coleção 01',
    image: '/images/home-hero-couture.png',
    to: '/colecoes/euphoria',
  },
  {
    name: 'Poesia Costurada',
    eyebrow: 'Coleção 02',
    image: '/images/euphoria-atelier.png',
    to: '/colecoes/poesia-costurada',
  },
]
</script>

<template>
  <main>

    <!-- 1 · Page Hero -->
    <section class="col-hero" data-nav-dark>
      <div class="col-hero__image-wrap">
        <img
          src="/images/euphoria-noir.png"
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
          <span class="label-caps col-hero__eyebrow">Coleções 2026</span>
          <div class="hairline"></div>
          <h1 class="display-lg col-hero__title">
            Nossas<br>
            <em>Coleções</em>
          </h1>
          <p class="body-lg col-hero__sub">Duas histórias. Uma linguagem.</p>
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
          <span class="headline-md col-stats__num">2</span>
          <span class="label-caps col-stats__label">Coleções Autorais</span>
        </div>
        <div class="col-stats__divider"></div>
        <div class="col-stats__item">
          <span class="headline-md col-stats__num">100%</span>
          <span class="label-caps col-stats__label">Feito à Mão</span>
        </div>
      </div>
    </div>

    <!-- 3 · Collection Previews -->
    <section class="col-collections-section">
      <div class="container">
        <div class="col-collections-header">
          <div class="col-collections-header__row">
            <div class="col-collections-header__left">
              <span class="label-caps col-collections-header__eyebrow">Prévia das Coleções</span>
              <h2 class="display-lg col-collections-header__title">Escolha sua coleção</h2>
            </div>
          </div>
          <div class="hairline hairline--full"></div>
        </div>

        <div class="col-collections-grid">
          <RouterLink
            v-for="collection in collections"
            :key="collection.name"
            :to="collection.to"
            class="collection-modal"
          >
            <div class="collection-modal__preview">
              <img
                :src="collection.image"
                :alt="`Preview da coleção ${collection.name}`"
                class="collection-modal__image"
                loading="lazy"
              />
              <span class="collection-modal__overlay" aria-hidden="true"></span>
            </div>
            <div class="collection-modal__info">
              <span class="label-caps collection-modal__eyebrow">{{ collection.eyebrow }}</span>
              <h3 class="headline-md collection-modal__name">{{ collection.name }}</h3>
              <span class="collection-modal__btn">explorar</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

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

.col-hero::after,
.col-stats::after,
.col-collections-section::after {
  content: '';
  position: absolute;
  right: var(--margin-desktop);
  bottom: 0;
  left: var(--margin-desktop);
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(201, 168, 76, 0.72) 18%,
    var(--gold-leaf) 50%,
    rgba(201, 168, 76, 0.72) 82%,
    transparent 100%
  );
  pointer-events: none;
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
  position: relative;
  background: var(--ivory);
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
  background: rgba(10, 10, 10, 0.14);
  flex-shrink: 0;
}

/* ===== Collection Previews ===== */
.col-collections-section {
  position: relative;
  padding: var(--section-gap) 0;
  background: #fff;
}

.col-collections-header {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 48px;
}

.col-collections-header__row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.col-collections-header__left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col-collections-header__eyebrow { color: rgba(10, 10, 10, 0.45); }

.col-collections-header__title { color: var(--onyx); }

.col-collections-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.42fr) minmax(320px, 1fr);
  grid-auto-rows: clamp(520px, 49vw, 700px);
  gap: 28px 24px;
}

.collection-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  background: var(--onyx);
}

.collection-modal__preview {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--surface-container);
}

.collection-modal__preview::after {
  content: none;
}

.collection-modal__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.02);
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.collection-modal:nth-child(2) .collection-modal__image,
.collection-modal:nth-child(3) .collection-modal__image {
  object-position: center 22%;
}

.collection-modal:nth-child(4) .collection-modal__image {
  object-position: center center;
}

.collection-modal:hover .collection-modal__image { transform: scale(1.025); }

.collection-modal__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(8, 8, 8, 0.74) 0%,
    rgba(8, 8, 8, 0.2) 42%,
    transparent 68%
  );
  transition: opacity 0.35s ease;
}

.collection-modal:hover .collection-modal__overlay { opacity: 0.82; }

.collection-modal__info {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 10px;
  min-height: 100%;
  padding: clamp(28px, 3.4vw, 52px);
  text-align: left;
  color: var(--ivory);
  pointer-events: none;
}

.collection-modal__eyebrow {
  color: rgba(250, 246, 240, 0.72);
  font-size: 9px;
  letter-spacing: 0.24em;
}

.collection-modal__name {
  max-width: 440px;
  color: var(--ivory);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(23px, 2.5vw, 38px);
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.collection-modal__btn {
  margin-top: 8px;
  padding-bottom: 6px;
  color: var(--ivory);
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(250, 246, 240, 0.68);
}

.collection-modal:focus-visible {
  outline: 2px solid var(--gold-leaf);
  outline-offset: 4px;
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
  .col-collections-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: clamp(460px, 62vw, 620px);
  }
}

@media (max-width: 768px) {
  .col-hero::after,
  .col-stats::after,
  .col-collections-section::after {
    right: var(--margin-mobile);
    left: var(--margin-mobile);
  }

  .col-hero { height: 58vh; }
  .col-hero__scroll-hint { display: none; }
  .col-hero__text { gap: 14px; }

  .col-editorial__quote { font-size: 22px; }
  .col-editorial__inner { padding-top: 64px; padding-bottom: 64px; }
}

@media (max-width: 600px) {
  .col-collections-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: min(138vw, 660px);
    max-width: 440px;
    margin: 0 auto;
    gap: 12px;
  }

  .collection-modal__info { padding: 28px 24px; }

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

@media (prefers-reduced-motion: reduce) {
  .collection-modal__image { transition: none; }
}
</style>
