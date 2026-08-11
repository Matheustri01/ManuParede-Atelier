<script setup>
import HeroSection from '../components/HeroSection.vue'

const editorials = [
  {
    className: 'editorial-card--feature',
    eyebrow: 'Coleção 2026',
    title: 'Euphoria',
    description: 'Forma, movimento e presença.',
    image: '/images/euphoria-atelier.png',
    alt: 'Prova de vestido de alta-costura marfim no atelier',
    to: '/colecoes/euphoria',
  },
  {
    className: 'editorial-card--noir',
    eyebrow: 'Festa',
    title: 'Noir',
    image: '/images/euphoria-noir.png',
    alt: 'Vestido de festa preto com drapeado escultural',
    to: '/vestidos?colecao=Festas%20%26%20Coquet%C3%A9is',
  },
  {
    className: 'editorial-card--ruby',
    eyebrow: 'Pronta entrega',
    title: 'Rubis',
    image: '/images/euphoria-rubi.png',
    alt: 'Vestido de festa rubi com bordado artesanal',
    to: '/vestidos',
  },
]
</script>

<template>
  <main>
    <HeroSection />

    <section class="home-intro" aria-labelledby="home-intro-title">
      <p class="home-intro__label">Manu Paredes Atelier</p>
      <h2 id="home-intro-title" class="home-intro__title">
        Porque seu momento<br>
        merece ser eterno
      </h2>
      <RouterLink to="/sobre" class="home-intro__link">conheça o atelier</RouterLink>
    </section>

    <section class="editorial" aria-label="Destaques do atelier">
      <div class="editorial__grid">
        <RouterLink
          v-for="item in editorials"
          :key="item.title"
          :to="item.to"
          :class="['editorial-card', item.className]"
        >
          <img :src="item.image" :alt="item.alt" class="editorial-card__image" loading="lazy" />
          <span class="editorial-card__shade" aria-hidden="true"></span>
          <span class="editorial-card__content">
            <span class="editorial-card__eyebrow">{{ item.eyebrow }}</span>
            <span class="editorial-card__title">{{ item.title }}</span>
            <span v-if="item.description" class="editorial-card__description">{{ item.description }}</span>
          </span>
        </RouterLink>
      </div>
    </section>

  </main>
</template>

<style scoped>
.home-intro {
  min-height: 560px;
  padding: 150px var(--margin-desktop) 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  text-align: center;
  background: #fff;
}

.home-intro__label,
.home-intro__link,
.editorial-card__eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.home-intro__label {
  color: rgba(10, 10, 10, 0.45);
}

.home-intro__title {
  max-width: 780px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 5.1vw, 76px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--onyx);
}

.home-intro__link {
  padding-bottom: 7px;
  color: var(--onyx);
  border-bottom: 1px solid currentColor;
  transition: opacity 0.25s ease;
}

.home-intro__link:hover {
  opacity: 0.5;
}

.editorial {
  padding: 40px;
  background: var(--ivory);
}

.editorial__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.42fr) minmax(320px, 1fr);
  grid-template-rows: repeat(2, clamp(380px, 34vw, 520px));
  gap: 24px;
}

.editorial-card {
  position: relative;
  min-height: 0;
  overflow: hidden;
  background: var(--surface-container);
}

.editorial-card--feature {
  grid-row: 1 / 3;
}

.editorial-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.editorial-card--feature .editorial-card__image {
  object-position: 43% center;
}

.editorial-card--noir .editorial-card__image,
.editorial-card--ruby .editorial-card__image {
  object-position: center 24%;
}

.editorial-card:hover .editorial-card__image {
  transform: scale(1.025);
}

.editorial-card__shade {
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

.editorial-card:hover .editorial-card__shade {
  opacity: 0.82;
}

.editorial-card__content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: clamp(24px, 3.2vw, 54px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  color: var(--ivory);
}

.editorial-card__eyebrow {
  color: rgba(250, 246, 240, 0.72);
}

.editorial-card__title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(23px, 2.5vw, 40px);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: 0.035em;
  text-transform: uppercase;
}

.editorial-card__description {
  margin-top: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02em;
  opacity: 0.78;
}

.editorial-card:focus-visible,
.home-intro__link:focus-visible {
  outline: 2px solid var(--gold-leaf);
  outline-offset: 4px;
}

@media (max-width: 900px) {
  .home-intro {
    min-height: 480px;
    padding: 110px var(--margin-mobile);
  }

  .editorial {
    padding: var(--margin-mobile);
  }

  .editorial__grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 12px;
  }

  .editorial-card,
  .editorial-card--feature {
    grid-row: auto;
    min-height: min(138vw, 660px);
  }

  .editorial-card--noir,
  .editorial-card--ruby {
    min-height: min(124vw, 590px);
  }

}

@media (prefers-reduced-motion: reduce) {
  .editorial-card__image {
    transition: none;
  }
}
</style>
