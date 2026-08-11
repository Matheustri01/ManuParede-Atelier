<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const slides = [
  {
    id: 'euphoria',
    title: 'Euphoria',
    image: '/images/home-hero-couture.png',
    alt: 'Modelo usando vestido marfim da coleção euphoria',
    to: '/colecoes/euphoria',
  },
  {
    id: 'poesia-costurada',
    title: 'Poesia Costurada',
    image: '/images/euphoria-atelier.png',
    alt: 'Prova artesanal de vestido marfim no atelier',
    to: '/colecoes/poesia-costurada',
  },
]

const activeIndex = ref(0)

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function previousSlide() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  activeIndex.value = index
}
</script>

<template>
  <section class="hero" data-nav-dark>
    <div class="hero__image-wrap">
      <Transition name="hero-fade">
        <div
          :key="slides[activeIndex].id"
          :class="['hero__slide', `hero__slide--${slides[activeIndex].id}`]"
        >
          <img
            :src="slides[activeIndex].image"
            :alt="slides[activeIndex].alt"
            class="hero__image"
          />
          <div class="hero__overlay"></div>
        </div>
      </Transition>
    </div>

    <Transition name="hero-copy" mode="out-in">
      <div :key="slides[activeIndex].id" class="hero__content container">
        <h1 :class="['hero__title', { 'hero__title--long': activeIndex === 1 }]">
          {{ slides[activeIndex].title }}
        </h1>
        <RouterLink :to="slides[activeIndex].to" class="hero__cta">explorar</RouterLink>
      </div>
    </Transition>

    <button
      type="button"
      class="hero__arrow hero__arrow--previous"
      :aria-label="`Exibir banner ${slides[(activeIndex - 1 + slides.length) % slides.length].title}`"
      @click="previousSlide"
    >
      <svg viewBox="0 0 32 16" aria-hidden="true">
        <path d="M31 8H3M10 1 3 8l7 7" />
      </svg>
    </button>

    <button
      type="button"
      class="hero__arrow hero__arrow--next"
      :aria-label="`Exibir banner ${slides[(activeIndex + 1) % slides.length].title}`"
      @click="nextSlide"
    >
      <svg viewBox="0 0 32 16" aria-hidden="true">
        <path d="M1 8h28M22 1l7 7-7 7" />
      </svg>
    </button>

    <div class="hero__pagination" role="group" aria-label="Selecionar banner">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        type="button"
        :class="['hero__page', { 'hero__page--active': index === activeIndex }]"
        :aria-label="`Exibir banner ${slide.title}`"
        :aria-current="index === activeIndex ? 'true' : undefined"
        @click="goToSlide(index)"
      >
        <span class="hero__page-dot" aria-hidden="true"></span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100svh;
  min-height: 680px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero::after {
  content: none;
}

.hero__image-wrap {
  position: absolute;
  inset: 0;
}

.hero__slide {
  position: absolute;
  inset: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  filter: brightness(0.76) contrast(1.02);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.14) 0%,
    rgba(10, 10, 10, 0.04) 45%,
    rgba(10, 10, 10, 0.28) 100%
  );
}

.hero__content {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  text-align: center;
}

.hero__title {
  max-width: 1000px;
  color: var(--ivory);
  font-family: 'Playfair Display', serif;
  font-size: clamp(58px, 7vw, 104px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.025em;
}

.hero__title--long {
  font-size: clamp(48px, 6.2vw, 92px);
}

.hero__cta {
  padding: 13px 30px;
  color: var(--ivory);
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  border: 1px solid rgba(250, 246, 240, 0.72);
  transition: background-color 0.25s ease, color 0.25s ease;
}

.hero__cta:hover,
.hero__cta:focus-visible {
  color: var(--onyx);
  background-color: var(--ivory);
}

.hero__cta:focus-visible {
  outline: 2px solid var(--gold-leaf);
  outline-offset: 4px;
}

.hero__arrow {
  position: absolute;
  top: 50%;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 42px;
  padding: 0;
  color: var(--ivory);
  border: 1px solid rgba(250, 246, 240, 0.58);
  transform: translateY(-50%);
  transition: color 0.25s ease, background-color 0.25s ease;
}

.hero__arrow--previous {
  left: 40px;
}

.hero__arrow--next {
  right: 40px;
}

.hero__arrow svg {
  width: 30px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1;
}

.hero__arrow:hover,
.hero__arrow:focus-visible {
  color: var(--onyx);
  background: var(--ivory);
}

.hero__arrow:focus-visible {
  outline: 2px solid var(--gold-leaf);
  outline-offset: 3px;
}

.hero__pagination {
  position: absolute;
  bottom: 32px;
  left: 50%;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 4px;
  transform: translateX(-50%);
}

.hero__page {
  display: grid;
  width: 28px;
  height: 28px;
  padding: 0;
  place-items: center;
}

.hero__page-dot {
  width: 6px;
  height: 6px;
  background: rgba(250, 246, 240, 0.48);
  border-radius: 50%;
  transition: width 0.25s ease, background-color 0.25s ease, border-radius 0.25s ease;
}

.hero__page--active .hero__page-dot {
  width: 22px;
  background: var(--ivory);
  border-radius: 999px;
}

.hero__page:focus-visible {
  outline: 1px solid var(--ivory);
  outline-offset: 1px;
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.9s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

.hero-copy-enter-active,
.hero-copy-leave-active {
  transition: opacity 0.42s ease, transform 0.42s ease;
}

.hero-copy-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.hero-copy-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .hero {
    min-height: 620px;
  }

  .hero__slide--euphoria .hero__image {
    object-position: 56% center;
  }

  .hero__slide--poesia-costurada .hero__image {
    object-position: 40% center;
  }

  .hero__content {
    gap: 24px;
  }

  .hero__title--long {
    max-width: 330px;
    font-size: clamp(44px, 13vw, 58px);
    line-height: 0.98;
  }

  .hero__arrow--previous {
    left: var(--margin-mobile);
  }

  .hero__arrow--next {
    right: var(--margin-mobile);
  }

  .hero__pagination {
    bottom: 22px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-fade-enter-active,
  .hero-fade-leave-active,
  .hero-copy-enter-active,
  .hero-copy-leave-active {
    transition: none;
  }
}
</style>
