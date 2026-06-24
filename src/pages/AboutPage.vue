<template>
  <main class="about-page">
    <section class="about-story" id="nossa-historia">
      <div class="about-story__inner container">
        <div class="about-story__copy">
          <span class="label-caps about-story__eyebrow">Nossa História</span>
          <div class="hairline"></div>
          <h1 class="display-lg about-story__title">
            Um atelier dedicado<br>
            <em>ao gesto artesanal</em>
          </h1>
          <p class="body-lg about-story__body">
            Fundado no coração de Curitiba, o Manu Paredes Atelier nasceu do desejo de criar peças de festa com presença, delicadeza e permanência. Cada vestido começa em uma conversa e ganha forma a partir da história de quem irá vesti-lo.
          </p>
          <p class="body-lg about-story__body">
            Entre tecidos nobres, acabamentos à mão e provas cuidadosas, o atelier constrói uma relação próxima com cada cliente. O resultado são criações feitas para momentos importantes, com atenção ao caimento, à memória e aos detalhes que não se repetem.
          </p>

          <div class="about-story__stats">
            <div class="about-story__stat">
              <span class="headline-lg about-story__stat-num">8+</span>
              <span class="label-caps about-story__stat-label">Anos de Atelier</span>
            </div>
            <div class="about-story__divider"></div>
            <div class="about-story__stat">
              <span class="headline-lg about-story__stat-num">400+</span>
              <span class="label-caps about-story__stat-label">Peças Criadas</span>
            </div>
          </div>
        </div>

        <div class="about-story__images">
          <div class="about-story__image-main">
            <div class="about-photo-placeholder" role="img" aria-label="Placeholder para foto principal do atelier">
              <span class="label-caps about-photo-placeholder__label">Foto do Atelier</span>
            </div>
          </div>
          <div class="about-story__image-accent">
            <div class="about-photo-placeholder about-photo-placeholder--detail" role="img" aria-label="Placeholder para foto de detalhe artesanal">
              <span class="label-caps about-photo-placeholder__label">Detalhe</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="about-section-divider container" aria-hidden="true"></div>

    <section class="creative-process" id="processo-criativo" data-nav-dark>
      <div class="creative-process__inner container">
        <div class="creative-process__media">
          <div class="about-photo-placeholder about-photo-placeholder--dark" role="img" aria-label="Placeholder para foto do processo criativo">
            <span class="label-caps about-photo-placeholder__label">Processo Criativo</span>
          </div>
        </div>

        <div class="creative-process__copy">
          <span class="label-caps creative-process__eyebrow">Processo Criativo</span>
          <div class="hairline"></div>
          <h2 class="display-lg creative-process__title">
            Da primeira ideia<br>
            <em>à prova final</em>
          </h2>
          <div class="creative-process__steps">
            <article class="creative-process__step">
              <span class="label-caps creative-process__step-num">01</span>
              <div>
                <h3 class="headline-md creative-process__step-title">Escuta e direção</h3>
                <p class="body-md creative-process__step-text">
                  Entendemos ocasião, referências, silhueta desejada e a sensação que a peça precisa transmitir.
                </p>
              </div>
            </article>

            <article class="creative-process__step">
              <span class="label-caps creative-process__step-num">02</span>
              <div>
                <h3 class="headline-md creative-process__step-title">Matéria e desenho</h3>
                <p class="body-md creative-process__step-text">
                  Selecionamos tecidos, bordados e acabamentos antes de transformar o conceito em proporções concretas.
                </p>
              </div>
            </article>

            <article class="creative-process__step">
              <span class="label-caps creative-process__step-num">03</span>
              <div>
                <h3 class="headline-md creative-process__step-title">Provas e acabamento</h3>
                <p class="body-md creative-process__step-text">
                  Ajustamos caimento, movimento e detalhes finais até que a peça esteja pronta para o momento escolhido.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  padding-top: 72px;
  background: var(--champagne);
}

.about-story {
  padding: var(--section-gap) 0;
}

.about-section-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(201, 168, 76, 0.76) 18%,
    var(--gold-leaf) 50%,
    rgba(201, 168, 76, 0.76) 82%,
    transparent 100%
  );
}

.about-story__inner,
.creative-process__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-story__copy,
.creative-process__copy {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.about-story__eyebrow,
.creative-process__eyebrow,
.creative-process__step-num {
  color: var(--gold-leaf);
}

.about-story__title,
.creative-process__title {
  color: var(--onyx);
}

.about-story__title em,
.creative-process__title em {
  font-style: italic;
  color: var(--on-surface-variant);
}

.about-story__body {
  color: var(--on-surface-variant);
}

.about-story__stats {
  display: flex;
  align-items: center;
  gap: 28px;
  padding-top: 8px;
}

.about-story__stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.about-story__stat-num {
  color: var(--onyx);
  letter-spacing: 0.02em;
}

.about-story__stat-label {
  color: var(--on-surface-variant);
  font-size: 10px;
  letter-spacing: 0.18em;
}

.about-story__divider {
  width: 0.5px;
  height: 40px;
  background: var(--gold-leaf);
}

.about-story__images {
  position: relative;
  padding-bottom: 60px;
  padding-right: 60px;
}

.about-photo-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.18) 0 1px, transparent 1px 20px),
    linear-gradient(315deg, rgba(10, 10, 10, 0.08) 0 1px, transparent 1px 20px),
    var(--surface-container);
  border: 0.5px solid rgba(201, 168, 76, 0.42);
}

.about-photo-placeholder__label {
  color: rgba(10, 10, 10, 0.42);
  font-size: 10px;
  letter-spacing: 0.24em;
}

.about-photo-placeholder--detail {
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.22) 0 1px, transparent 1px 18px),
    var(--surface);
}

.about-photo-placeholder--dark {
  background:
    linear-gradient(135deg, rgba(201, 168, 76, 0.18) 0 1px, transparent 1px 20px),
    linear-gradient(315deg, rgba(250, 246, 240, 0.08) 0 1px, transparent 1px 20px),
    #171711;
  border-color: rgba(201, 168, 76, 0.36);
}

.about-photo-placeholder--dark .about-photo-placeholder__label {
  color: rgba(250, 246, 240, 0.46);
}

.about-story__image-main .about-photo-placeholder,
.about-story__image-accent .about-photo-placeholder,
.creative-process__media .about-photo-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
}

.about-story__image-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 48%;
  border: 6px solid var(--champagne);
}

.creative-process {
  padding: var(--section-gap) 0;
  background: var(--onyx);
}

.creative-process__title,
.creative-process__step-title {
  color: var(--ivory);
}

.creative-process__title em {
  color: rgba(250, 246, 240, 0.58);
}

.creative-process__steps {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 8px;
}

.creative-process__step {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 24px;
  padding-top: 28px;
  border-top: 0.5px solid rgba(201, 168, 76, 0.24);
}

.creative-process__step-title {
  margin-bottom: 10px;
  font-size: 24px;
  letter-spacing: 0.02em;
}

.creative-process__step-text {
  color: rgba(250, 246, 240, 0.54);
}

@media (max-width: 960px) {
  .about-story__inner,
  .creative-process__inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .creative-process__media {
    order: 2;
  }

  .about-story__images {
    padding-bottom: 0;
    padding-right: 0;
  }

  .about-story__image-accent {
    display: none;
  }
}

@media (max-width: 540px) {
  .about-page {
    padding-top: 64px;
  }

  .about-story,
  .creative-process {
    padding: 88px 0;
  }

  .about-section-divider {
    margin: 0 var(--margin-mobile);
    padding: 0;
  }

  .about-story__stats,
  .creative-process__step {
    align-items: flex-start;
  }

  .creative-process__step {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
