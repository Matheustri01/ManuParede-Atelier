<script setup></script>

<template>
  <section class="editorial">
    <div class="editorial__bg-wrap">
      <img
        src="https://picsum.photos/seed/editorial-atelier/1440/800"
        alt=""
        aria-hidden="true"
        class="editorial__bg"
      />
      <div class="editorial__bg-overlay"></div>
    </div>

    <div class="editorial__inner container">
      <div class="editorial__content">
        <span class="label-caps editorial__eyebrow">O Manifesto</span>
        <div class="hairline"></div>
        <blockquote class="editorial__quote">
          "Cada vestido é uma obra — uma conversa silenciosa entre a mulher que o veste e o mundo que a observa."
        </blockquote>
        <p class="body-lg editorial__body">
          Na Manu Paredes Atelier, a alta costura é um ato de reverência à individualidade. Cada peça é concebida, desenhada e costurada à mão no nosso atelier no Rio de Janeiro.
        </p>
        <a href="#sobre" class="btn-secondary">Conheça o Atelier</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.editorial {
  position: relative;
  overflow: hidden;
}

.editorial__bg-wrap {
  position: absolute;
  inset: 0;
}

.editorial__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.35) contrast(1.1) sepia(0.18);
}

.editorial__bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.6);
}

.editorial__inner {
  position: relative;
  z-index: 2;
  padding-top: 110px;
  padding-bottom: 110px;
}

.editorial__content {
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.editorial__eyebrow {
  color: var(--gold-leaf);
}

.editorial__quote {
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: var(--ivory);
  quotes: none;
}

.editorial__body {
  color: rgba(250, 246, 240, 0.68);
  max-width: 480px;
}

@media (max-width: 768px) {
  .editorial__quote {
    font-size: 22px;
  }

  .editorial__inner {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>
