<script setup>
import { ref } from 'vue'

const form = ref({ nome: '', email: '', telefone: '', ocasiao: '', mensagem: '' })
const submitted = ref(false)
const sending = ref(false)

const ocasioes = [
  'Casamento',
  'Formatura',
  'Festa & Coquetel',
  'Coleção Permanente',
  'Outro',
]

function handleSubmit() {
  sending.value = true
  setTimeout(() => {
    sending.value = false
    submitted.value = true
    form.value = { nome: '', email: '', telefone: '', ocasiao: '', mensagem: '' }
  }, 1200)
}

const faq = [
  {
    q: 'Como funciona o processo de encomenda?',
    a: 'Iniciamos com uma consulta presencial ou virtual para entender sua visão. A partir daí, criamos um esboço exclusivo, aprovamos junto com você e iniciamos a confecção artesanal.',
  },
  {
    q: 'Qual é o prazo médio de produção?',
    a: 'Peças sob medida têm prazo de 30 a 60 dias, dependendo da complexidade e dos bordados. Recomendamos entrar em contato com pelo menos 3 meses de antecedência.',
  },
  {
    q: 'Vocês trabalham com ajustes após a entrega?',
    a: 'Sim. Incluímos duas sessões de ajuste no valor da peça. Ajustes adicionais são orçados separadamente.',
  },
  {
    q: 'É possível visitar o atelier sem agendamento?',
    a: 'O atelier funciona exclusivamente com hora marcada para garantir atendimento dedicado a cada cliente.',
  },
]

const openFaq = ref(null)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}
</script>

<template>
  <main>

    <!-- 1 · Hero -->
    <section class="ct-hero" data-nav-dark>
      <div class="ct-hero__image-wrap">
        <img
          src="https://picsum.photos/seed/contact-hero-manu/1440/900"
          alt=""
          aria-hidden="true"
          class="ct-hero__image"
        />
        <div class="ct-hero__overlay"></div>
      </div>

      <div class="ct-hero__content container">
        <div class="ct-hero__breadcrumb">
          <RouterLink to="/" class="label-caps ct-hero__bc-link">Início</RouterLink>
          <span class="ct-hero__bc-sep">—</span>
          <span class="label-caps ct-hero__bc-current">Contato</span>
        </div>

        <div class="ct-hero__text">
          <span class="label-caps ct-hero__eyebrow">Atelier Manu Paredes</span>
          <div class="hairline"></div>
          <h1 class="display-lg ct-hero__title">
            Vamos criar<br>
            <em>juntas</em>
          </h1>
          <p class="body-lg ct-hero__sub">
            Cada peça nasce de uma conversa. Conte-nos sobre o seu momento especial.
          </p>
        </div>
      </div>

      <div class="ct-hero__scroll-hint">
        <span class="label-caps ct-hero__scroll-label">Rolar</span>
        <div class="ct-hero__scroll-line"></div>
      </div>
    </section>

    <!-- 2 · Info Strip -->
    <div class="ct-strip">
      <div class="container ct-strip__inner">
        <a href="https://wa.me/5541999999999" target="_blank" rel="noopener" class="ct-strip__item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.05 2C6.495 2 2.04 6.455 2.04 12.01c0 1.775.465 3.44 1.278 4.879L2 22l5.294-1.287A9.924 9.924 0 0012.05 22c5.555 0 10.01-4.455 10.01-10.01C22.06 6.455 17.605 2 12.05 2z"/>
          </svg>
          <div class="ct-strip__item-text">
            <span class="label-caps ct-strip__item-label">WhatsApp</span>
            <span class="body-md ct-strip__item-value">+55 (41) 9 9999-9999</span>
          </div>
        </a>

        <div class="ct-strip__divider"></div>

        <a href="mailto:atelier@manuparedes.com.br" class="ct-strip__item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <div class="ct-strip__item-text">
            <span class="label-caps ct-strip__item-label">E-mail</span>
            <span class="body-md ct-strip__item-value">atelier@manuparedes.com.br</span>
          </div>
        </a>

        <div class="ct-strip__divider"></div>

        <div class="ct-strip__item ct-strip__item--nolink">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <div class="ct-strip__item-text">
            <span class="label-caps ct-strip__item-label">Atelier</span>
            <span class="body-md ct-strip__item-value">Curitiba, PR — Brasil</span>
          </div>
        </div>

        <div class="ct-strip__divider"></div>

        <div class="ct-strip__item ct-strip__item--nolink">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <div class="ct-strip__item-text">
            <span class="label-caps ct-strip__item-label">Horário</span>
            <span class="body-md ct-strip__item-value">Seg–Sex, 9h às 18h</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 · Main Content: Info + Form -->
    <section class="ct-main">
      <div class="container ct-main__inner">

        <!-- Left: Info -->
        <div class="ct-info">
          <div class="ct-info__top">
            <span class="label-caps ct-info__eyebrow">Consulta Exclusiva</span>
            <div class="hairline"></div>
            <h2 class="headline-lg ct-info__title">
              Uma experiência<br>
              <em>sob medida</em>
            </h2>
            <p class="body-lg ct-info__body">
              No Atelier Manu Paredes, cada consulta é um encontro dedicado para entender
              quem você é e o que deseja sentir no dia mais especial. Não criamos vestidos —
              criamos memórias.
            </p>
          </div>

          <div class="ct-info__details">
            <div class="ct-info__detail">
              <span class="label-caps ct-info__detail-label">Endereço</span>
              <p class="body-md ct-info__detail-text">
                Rua das Flores, 340 — Batel<br>
                Curitiba — PR, 80420-250
              </p>
            </div>
            <div class="ct-info__detail">
              <span class="label-caps ct-info__detail-label">Atendimento</span>
              <p class="body-md ct-info__detail-text">
                Segunda a Sexta — 9h às 18h<br>
                Sábados com agendamento prévio
              </p>
            </div>
            <div class="ct-info__detail">
              <span class="label-caps ct-info__detail-label">Redes Sociais</span>
              <div class="ct-info__social">
                <a href="#" class="ct-info__social-link" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  @manuparedes.atelier
                </a>
                <a href="#" class="ct-info__social-link" aria-label="Pinterest">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.73 1.184-5.023 1.184-5.023s-.302-.605-.302-1.499c0-1.404.814-2.454 1.827-2.454.861 0 1.279.647 1.279 1.422 0 .867-.551 2.165-.836 3.371-.238.978.503 1.773 1.493 1.773 1.792 0 3.171-1.888 3.171-4.614 0-2.413-1.735-4.099-4.212-4.099-2.869 0-4.554 2.152-4.554 4.374 0 .866.332 1.794.748 2.301a.3.3 0 0 1 .069.287c-.076.316-.245 1.003-.278 1.142-.044.184-.146.223-.338.135-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="ct-form-wrap">
          <Transition name="form-fade" mode="out-in">
            <!-- Success State -->
            <div v-if="submitted" class="ct-success">
              <div class="ct-success__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span class="label-caps ct-success__eyebrow">Mensagem enviada</span>
              <h3 class="headline-md ct-success__title">Obrigada pelo contato</h3>
              <p class="body-md ct-success__body">
                Retornaremos em até 24 horas para agendar sua consulta exclusiva.
              </p>
              <button class="btn-primary ct-success__btn" @click="submitted = false">
                Nova mensagem
              </button>
            </div>

            <!-- Form -->
            <form v-else class="ct-form" @submit.prevent="handleSubmit" novalidate>
              <div class="ct-form__header">
                <span class="label-caps ct-form__eyebrow">Agendar Consulta</span>
                <div class="hairline"></div>
                <h2 class="headline-md ct-form__title">Fale conosco</h2>
              </div>

              <div class="ct-form__fields">
                <div class="ct-field">
                  <label class="ct-field__label label-caps" for="nome">Nome completo</label>
                  <input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    class="ct-field__input"
                    placeholder="Seu nome"
                    required
                    autocomplete="name"
                  />
                </div>

                <div class="ct-form__row">
                  <div class="ct-field">
                    <label class="ct-field__label label-caps" for="email">E-mail</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="ct-field__input"
                      placeholder="seu@email.com"
                      required
                      autocomplete="email"
                    />
                  </div>
                  <div class="ct-field">
                    <label class="ct-field__label label-caps" for="telefone">Telefone</label>
                    <input
                      id="telefone"
                      v-model="form.telefone"
                      type="tel"
                      class="ct-field__input"
                      placeholder="(41) 9 9999-9999"
                      autocomplete="tel"
                    />
                  </div>
                </div>

                <div class="ct-field">
                  <label class="ct-field__label label-caps" for="ocasiao">Ocasião</label>
                  <div class="ct-field__select-wrap">
                    <select
                      id="ocasiao"
                      v-model="form.ocasiao"
                      class="ct-field__select"
                    >
                      <option value="" disabled>Selecione a ocasião</option>
                      <option v-for="o in ocasioes" :key="o" :value="o">{{ o }}</option>
                    </select>
                    <svg class="ct-field__select-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>

                <div class="ct-field">
                  <label class="ct-field__label label-caps" for="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    v-model="form.mensagem"
                    class="ct-field__textarea"
                    rows="5"
                    placeholder="Conte-nos sobre sua visão, data do evento e qualquer detalhe especial..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                class="btn-primary ct-form__submit"
                :disabled="sending"
              >
                <span v-if="sending" class="ct-form__sending">
                  <span class="ct-form__dot"></span>
                  <span class="ct-form__dot"></span>
                  <span class="ct-form__dot"></span>
                </span>
                <span v-else>Enviar Mensagem</span>
              </button>

              <p class="body-md ct-form__note">
                Respondemos em até 24 horas. Todas as conversas são tratadas com total discrição.
              </p>
            </form>
          </Transition>
        </div>

      </div>
    </section>

    <!-- 4 · Editorial Break -->
    <section class="ct-editorial" data-nav-dark>
      <div class="ct-editorial__bg-wrap">
        <img
          src="https://picsum.photos/seed/contact-editorial-manu/1440/600"
          alt=""
          aria-hidden="true"
          class="ct-editorial__bg"
        />
        <div class="ct-editorial__overlay"></div>
      </div>
      <div class="ct-editorial__inner container">
        <span class="label-caps ct-editorial__eyebrow">Nossa Filosofia</span>
        <div class="hairline"></div>
        <blockquote class="ct-editorial__quote">
          "A beleza mais rara é aquela que nasce de dentro para fora —
          e nós apenas damos a ela uma forma."
        </blockquote>
        <span class="body-md ct-editorial__author">— Manu Paredes</span>
      </div>
    </section>

    <!-- 5 · FAQ -->
    <section class="ct-faq">
      <div class="container ct-faq__inner">
        <div class="ct-faq__header">
          <span class="label-caps ct-faq__eyebrow">Perguntas Frequentes</span>
          <div class="hairline"></div>
          <h2 class="display-lg ct-faq__title">Dúvidas</h2>
        </div>

        <div class="ct-faq__list">
          <div
            v-for="(item, i) in faq"
            :key="i"
            class="ct-faq__item"
          >
            <button
              class="ct-faq__question"
              :aria-expanded="openFaq === i"
              @click="toggleFaq(i)"
            >
              <span class="body-lg ct-faq__question-text">{{ item.q }}</span>
              <svg
                class="ct-faq__icon"
                :class="{ 'ct-faq__icon--open': openFaq === i }"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <Transition name="faq">
              <div v-if="openFaq === i" class="ct-faq__answer">
                <p class="body-lg ct-faq__answer-text">{{ item.a }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <div class="ct-faq__cta">
          <p class="body-lg ct-faq__cta-text">Ainda tem dúvidas?</p>
          <a href="https://wa.me/5541999999999" target="_blank" rel="noopener" class="btn-secondary btn-secondary--onyx">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* ===== Hero ===== */
.ct-hero {
  position: relative;
  height: 65vh;
  min-height: 520px;
  overflow: hidden;
}

.ct-hero__image-wrap {
  position: absolute;
  inset: 0;
}

.ct-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  filter: brightness(0.48) contrast(1.1) sepia(0.16);
}

.ct-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    145deg,
    rgba(10, 10, 10, 0.6) 0%,
    rgba(10, 10, 10, 0.22) 50%,
    rgba(10, 10, 10, 0.7) 100%
  );
}

.ct-hero__content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 110px;
  padding-bottom: 72px;
}

.ct-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ct-hero__bc-link {
  color: rgba(250, 246, 240, 0.45);
  font-size: 10px;
  letter-spacing: 0.2em;
  transition: color 0.3s ease;
}
.ct-hero__bc-link:hover { color: var(--gold-leaf); }

.ct-hero__bc-sep { color: rgba(250, 246, 240, 0.2); font-size: 10px; }

.ct-hero__bc-current {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.ct-hero__text {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 560px;
}

.ct-hero__eyebrow {
  color: var(--gold-leaf);
  font-size: 11px;
  letter-spacing: 0.22em;
}

.ct-hero__title { color: var(--ivory); }
.ct-hero__title em { font-style: italic; color: var(--champagne); }

.ct-hero__sub { color: rgba(250, 246, 240, 0.62); }

.ct-hero__scroll-hint {
  position: absolute;
  bottom: 40px;
  right: var(--margin-desktop);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ct-hero__scroll-label {
  color: rgba(250, 246, 240, 0.32);
  font-size: 9px;
  letter-spacing: 0.28em;
}

.ct-hero__scroll-line {
  width: 0.5px;
  height: 40px;
  background: linear-gradient(to bottom, var(--gold-leaf), transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ===== Info Strip ===== */
.ct-strip {
  background: var(--champagne);
  border-top: 0.5px solid var(--gold-leaf);
  border-bottom: 0.5px solid rgba(201, 168, 76, 0.3);
}

.ct-strip__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
  gap: 0;
}

.ct-strip__item {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  max-width: 260px;
  color: var(--onyx);
  transition: color 0.3s ease;
}

.ct-strip__item:not(.ct-strip__item--nolink):hover { color: var(--gold-leaf); }

.ct-strip__item svg { flex-shrink: 0; color: var(--gold-leaf); }

.ct-strip__item-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ct-strip__item-label {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: var(--on-surface-variant);
}

.ct-strip__item-value {
  font-size: 13px;
  color: var(--onyx);
}

.ct-strip__divider {
  width: 0.5px;
  height: 38px;
  background: rgba(201, 168, 76, 0.38);
  flex-shrink: 0;
  margin: 0 24px;
}

/* ===== Main Section ===== */
.ct-main {
  padding: var(--section-gap) 0;
  background: var(--surface);
}

.ct-main__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: start;
}

/* Info Column */
.ct-info {
  display: flex;
  flex-direction: column;
  gap: 56px;
  position: sticky;
  top: 120px;
}

.ct-info__top {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ct-info__eyebrow { color: var(--gold-leaf); }

.ct-info__title {
  color: var(--onyx);
}
.ct-info__title em {
  font-style: italic;
  color: var(--on-surface-variant);
}

.ct-info__body {
  color: var(--on-surface-variant);
  max-width: 400px;
}

.ct-info__details {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.ct-info__detail {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 28px;
  border-bottom: 0.5px solid var(--outline-variant);
}
.ct-info__detail:last-child { border-bottom: none; padding-bottom: 0; }

.ct-info__detail-label {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.ct-info__detail-text {
  color: var(--on-surface-variant);
  line-height: 1.7;
}

.ct-info__social {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ct-info__social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--on-surface-variant);
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;
}
.ct-info__social-link:hover { color: var(--gold-leaf); }
.ct-info__social-link svg { flex-shrink: 0; }

/* Form Column */
.ct-form-wrap {
  background: var(--ivory);
  border: 0.5px solid var(--outline-variant);
  padding: 52px 48px;
}

.ct-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.ct-form__header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ct-form__eyebrow { color: var(--gold-leaf); }

.ct-form__title { color: var(--onyx); }

.ct-form__fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ct-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Field */
.ct-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ct-field__label {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--on-surface-variant);
}

.ct-field__input,
.ct-field__textarea,
.ct-field__select {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: var(--onyx);
  background: transparent;
  border: none;
  border-bottom: 0.5px solid var(--outline-variant);
  padding: 10px 0;
  outline: none;
  width: 100%;
  transition: border-color 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
}

.ct-field__input::placeholder,
.ct-field__textarea::placeholder { color: rgba(10, 10, 10, 0.28); }

.ct-field__input:focus,
.ct-field__textarea:focus,
.ct-field__select:focus {
  border-bottom-color: var(--gold-leaf);
}

.ct-field__textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

.ct-field__select-wrap {
  position: relative;
}

.ct-field__select {
  cursor: pointer;
  color: var(--onyx);
}
.ct-field__select option { color: var(--onyx); }
.ct-field__select:invalid,
.ct-field__select option[value=""] { color: rgba(10, 10, 10, 0.28); }

.ct-field__select-arrow {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--gold-leaf);
}

.ct-form__submit {
  width: 100%;
  padding: 18px;
  font-size: 12px;
  letter-spacing: 0.18em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 56px;
}

.ct-form__submit:disabled { opacity: 0.65; cursor: not-allowed; }

.ct-form__sending {
  display: flex;
  gap: 5px;
  align-items: center;
}

.ct-form__dot {
  width: 5px;
  height: 5px;
  background: var(--ivory);
  border-radius: 50%;
  animation: dotPulse 1.2s ease-in-out infinite;
}
.ct-form__dot:nth-child(2) { animation-delay: 0.2s; }
.ct-form__dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.ct-form__note {
  color: rgba(10, 10, 10, 0.38);
  font-size: 12px;
  text-align: center;
  line-height: 1.7;
}

/* Success State */
.ct-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 32px 0;
}

.ct-success__icon {
  width: 72px;
  height: 72px;
  border: 0.5px solid var(--gold-leaf);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-leaf);
}

.ct-success__eyebrow { color: var(--gold-leaf); }

.ct-success__title { color: var(--onyx); }

.ct-success__body {
  color: var(--on-surface-variant);
  max-width: 300px;
}

.ct-success__btn {
  margin-top: 12px;
  padding: 14px 36px;
  font-size: 12px;
  letter-spacing: 0.16em;
}

/* Form transition */
.form-fade-enter-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.form-fade-leave-active { transition: opacity 0.25s ease; }
.form-fade-enter-from   { opacity: 0; transform: translateY(12px); }
.form-fade-leave-to     { opacity: 0; }

/* ===== Editorial Break ===== */
.ct-editorial {
  position: relative;
  overflow: hidden;
}

.ct-editorial__bg-wrap {
  position: absolute;
  inset: 0;
}

.ct-editorial__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.26) contrast(1.12) sepia(0.2);
}

.ct-editorial__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.65);
}

.ct-editorial__inner {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
}

.ct-editorial__eyebrow { color: var(--gold-leaf); }

.ct-editorial__quote {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: var(--ivory);
  quotes: none;
}

.ct-editorial__author {
  color: rgba(250, 246, 240, 0.45);
  font-size: 13px;
  letter-spacing: 0.06em;
}

/* ===== FAQ ===== */
.ct-faq {
  padding: var(--section-gap) 0;
  background: var(--surface);
}

.ct-faq__inner {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 100px;
  align-items: start;
}

.ct-faq__header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 120px;
}

.ct-faq__eyebrow { color: var(--gold-leaf); }

.ct-faq__title { color: var(--onyx); }

.ct-faq__list {
  display: flex;
  flex-direction: column;
}

.ct-faq__item {
  border-bottom: 0.5px solid var(--outline-variant);
}
.ct-faq__item:first-child { border-top: 0.5px solid var(--outline-variant); }

.ct-faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 26px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.ct-faq__question-text {
  color: var(--onyx);
  font-size: 15px;
  line-height: 1.5;
}

.ct-faq__icon {
  flex-shrink: 0;
  color: var(--gold-leaf);
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.ct-faq__icon--open { transform: rotate(180deg); }

.ct-faq__answer {
  overflow: hidden;
}

.ct-faq__answer-text {
  color: var(--on-surface-variant);
  padding-bottom: 28px;
  font-size: 14px;
  line-height: 1.75;
}

/* FAQ transition */
.faq-enter-active { transition: opacity 0.35s ease, max-height 0.4s ease; max-height: 300px; }
.faq-leave-active { transition: opacity 0.2s ease, max-height 0.3s ease; max-height: 300px; }
.faq-enter-from   { opacity: 0; max-height: 0; }
.faq-leave-to     { opacity: 0; max-height: 0; }

.ct-faq__cta {
  grid-column: 2;
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 0.5px solid rgba(201, 168, 76, 0.3);
}

.ct-faq__cta-text {
  color: var(--on-surface-variant);
  font-size: 14px;
}

/* ===== Responsive ===== */
@media (max-width: 1100px) {
  .ct-main__inner {
    grid-template-columns: 1fr;
    gap: 64px;
  }

  .ct-info { position: static; }

  .ct-faq__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .ct-faq__header { position: static; }

  .ct-faq__cta { grid-column: 1; }
}

@media (max-width: 768px) {
  .ct-hero { height: 58vh; }
  .ct-hero__scroll-hint { display: none; }
  .ct-hero__text { gap: 14px; }

  .ct-strip__inner {
    flex-wrap: wrap;
    gap: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .ct-strip__item {
    min-width: 180px;
    max-width: none;
  }

  .ct-strip__divider { display: none; }

  .ct-form-wrap { padding: 36px 28px; }

  .ct-form__row { grid-template-columns: 1fr; }

  .ct-editorial__quote { font-size: 22px; }
  .ct-editorial__inner { padding-top: 72px; padding-bottom: 72px; }

  .ct-faq__cta { flex-direction: column; align-items: flex-start; gap: 20px; }
}

@media (max-width: 540px) {
  .ct-form-wrap { padding: 28px 20px; }
}
</style>
