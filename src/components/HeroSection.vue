<script setup></script>

<template>
  <section class="hero" data-nav-dark>
    <div class="hero__image-wrap">
      <img
        src="https://picsum.photos/seed/haute-couture/1440/960"
        alt="Coleção Manu Paredes Atelier"
        class="hero__image"
      />
      <div class="hero__overlay"></div>
    </div>

    <div class="hero__content container">
      <div class="hero__text">
        <div class="hero__eyebrow">
          <div class="hairline"></div>
          <span class="label-caps hero__season">Nova Coleção — Verão 2025</span>
        </div>

        <h1 class="display-lg hero__title">
          Elegância<br>
          <em>Que Conta</em><br>
          Sua História
        </h1>

        <p class="body-lg hero__sub">
          Vestidos exclusivos para seus momentos mais especiais.<br>
          Do esboço à costura, cada peça é feita para você.
        </p>

        <div class="hero__ctas">
          <a href="#colecao" class="btn-primary">Ver Coleção</a>
          <a href="#sobre" class="btn-secondary">O Atelier</a>
        </div>
      </div>
    </div>

    <div class="hero__scroll-hint">
      <span class="hero__scroll-label label-caps">Rolar</span>
      <div class="hero__scroll-line"></div>
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

.hero__image-wrap {
  position: absolute;
  inset: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  filter: brightness(0.7) contrast(1.05) sepia(0.12);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(10, 10, 10, 0.75) 0%,
    rgba(10, 10, 10, 0.38) 55%,
    rgba(10, 10, 10, 0.08) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 80px;
}

.hero__text {
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 18px;
}

.hero__season {
  color: var(--gold-leaf);
  font-size: 11px;
  letter-spacing: 0.22em;
}

.hero__title {
  color: var(--ivory);
}

.hero__title em {
  font-style: italic;
  color: var(--champagne);
}

.hero__sub {
  color: rgba(250, 246, 240, 0.72);
  max-width: 380px;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

/* Scroll indicator */
.hero__scroll-hint {
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.hero__scroll-label {
  color: rgba(250, 246, 240, 0.4);
  font-size: 9px;
  letter-spacing: 0.28em;
}

.hero__scroll-line {
  width: 0.5px;
  height: 44px;
  background: linear-gradient(to bottom, var(--gold-leaf), transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@media (max-width: 768px) {
  .hero__text {
    gap: 28px;
  }

  .hero__sub {
    display: none;
  }

  .hero__scroll-hint {
    display: none;
  }
}
</style>
