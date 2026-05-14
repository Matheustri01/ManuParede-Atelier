<script setup></script>

<template>
  <section class="atelier" id="sobre">
    <div class="atelier__inner container">
      <div class="atelier__text">
        <span class="label-caps atelier__eyebrow">O Atelier</span>
        <div class="hairline"></div>
        <h2 class="headline-lg atelier__title">
          Artesanato que<br>
          <em>Transcende o Tempo</em>
        </h2>
        <p class="body-lg atelier__body">
          Fundado no coração de Curitiba, o Manu Paredes Atelier é um espaço dedicado à criação de peças únicas para mulheres que compreendem que a verdadeira elegância reside nos detalhes.
        </p>
        <p class="body-lg atelier__body">
          Cada peça é produzida individualmente — com tecidos cuidadosamente selecionados e acabamentos à mão que refletem décadas de tradição artesanal. Do esboço inicial à prova final, sua peça carrega a atenção integral da Manu.
        </p>
        <div class="atelier__ctas">
          <a href="#contato" class="btn-primary">Agendar Consulta</a>
          <div class="atelier__stat-row">
            <div class="atelier__stat">
              <span class="headline-lg atelier__stat-num">8+</span>
              <span class="label-caps atelier__stat-label">Anos de Atelier</span>
            </div>
            <div class="atelier__divider"></div>
            <div class="atelier__stat">
              <span class="headline-lg atelier__stat-num">400+</span>
              <span class="label-caps atelier__stat-label">Peças Criadas</span>
            </div>
          </div>
        </div>
      </div>

      <div class="atelier__images">
        <div class="atelier__image-main">
          <img
            src="https://picsum.photos/seed/atelier-main-mp/600/800"
            alt="Atelier Manu Paredes"
          />
        </div>
        <div class="atelier__image-accent">
          <img
            src="https://picsum.photos/seed/atelier-detail-mp/320/420"
            alt="Detalhe de costura artesanal"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.atelier {
  padding: var(--section-gap) 0;
  background: var(--champagne);
}

.atelier__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.atelier__text {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.atelier__eyebrow {
  color: var(--gold-leaf);
}

.atelier__title {
  color: var(--onyx);
}

.atelier__title em {
  font-style: italic;
  color: var(--on-surface-variant);
}

.atelier__body {
  color: var(--on-surface-variant);
}

.atelier__ctas {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.atelier__stat-row {
  display: flex;
  align-items: center;
  gap: 28px;
}

.atelier__stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.atelier__stat-num {
  color: var(--onyx);
  letter-spacing: 0.02em;
}

.atelier__stat-label {
  color: var(--on-surface-variant);
  font-size: 10px;
  letter-spacing: 0.18em;
}

.atelier__divider {
  width: 0.5px;
  height: 40px;
  background: var(--gold-leaf);
}

/* Images — stacked/offset layout */
.atelier__images {
  position: relative;
  padding-bottom: 60px;
  padding-right: 60px;
}

.atelier__image-main img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  filter: sepia(0.06) brightness(0.94);
}

.atelier__image-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 48%;
  border: 6px solid var(--champagne);
}

.atelier__image-accent img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  filter: sepia(0.1) brightness(0.9);
}

@media (max-width: 960px) {
  .atelier__inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .atelier__images {
    padding-bottom: 0;
    padding-right: 0;
  }

  .atelier__image-accent {
    display: none;
  }
}
</style>
