<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Vestido Celeste', occasion: 'Casamentos', size: 'M', price: 2240, image: 'https://picsum.photos/seed/dress-celeste-mp/400/600' },
  { id: 2, name: 'Vestido Lumière', occasion: 'Formaturas', size: 'P', price: 1990, image: 'https://picsum.photos/seed/dress-lumiere-mp/400/600' },
])

const subtotal = computed(() => items.value.reduce((s, i) => s + i.price, 0))
const frete    = 0
const total    = computed(() => subtotal.value + frete)

function fmt(n) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function removeItem(id) {
  items.value = items.value.filter(i => i.id !== id)
}

const form = ref({ nome: '', email: '', telefone: '', obs: '' })
const submitted = ref(false)

function handleSubmit() {
  if (form.value.nome && form.value.email) submitted.value = true
}
</script>

<template>
  <main class="ck">

    <!-- Header -->
    <div class="ck__header">
      <div class="container">
        <div class="ck__breadcrumb">
          <RouterLink to="/" class="label-caps ck__bc-link">Início</RouterLink>
          <span class="ck__bc-sep">—</span>
          <span class="label-caps ck__bc-current">Sacola</span>
        </div>
        <div class="ck__title-row">
          <h1 class="display-lg ck__title">Sua Sacola</h1>
          <span class="label-caps ck__count">{{ items.length }} {{ items.length === 1 ? 'peça' : 'peças' }}</span>
        </div>
        <div class="hairline hairline--full"></div>
      </div>
    </div>

    <!-- Body -->
    <div class="container ck__body">

      <!-- Empty state -->
      <div v-if="items.length === 0 && !submitted" class="ck__empty">
        <div class="hairline"></div>
        <p class="headline-md ck__empty-title">Sua sacola está vazia</p>
        <p class="body-md ck__empty-sub">Explore nossa coleção e encontre a peça perfeita para você.</p>
        <RouterLink to="/vestidos" class="btn-primary">Ver Vestidos</RouterLink>
      </div>

      <!-- Success -->
      <Transition name="fade" mode="out-in">
        <div v-if="submitted" class="ck__success">
          <span class="label-caps ck__success-eyebrow">Pedido Recebido</span>
          <div class="hairline"></div>
          <h2 class="headline-lg ck__success-title">Obrigada, {{ form.nome.split(' ')[0] }}.</h2>
          <p class="body-lg ck__success-body">
            Entraremos em contato pelo e-mail <strong>{{ form.email }}</strong> para confirmar
            os detalhes e agendar sua prova.
          </p>
          <RouterLink to="/" class="btn-secondary btn-secondary--onyx">Voltar ao Início</RouterLink>
        </div>

        <!-- Layout -->
        <div v-else-if="items.length > 0" class="ck__layout">

          <!-- Items list -->
          <div class="ck__items">
            <div class="ck__items-head">
              <span class="label-caps ck__items-label">Peça</span>
              <span class="label-caps ck__items-label ck__items-label--right">Valor</span>
            </div>
            <div class="hairline hairline--full"></div>

            <TransitionGroup name="item" tag="div" class="ck__items-list">
              <div v-for="item in items" :key="item.id" class="ck__item">
                <div class="ck__item-image-wrap">
                  <img :src="item.image" :alt="item.name" class="ck__item-image" />
                </div>
                <div class="ck__item-info">
                  <span class="label-caps ck__item-occasion">{{ item.occasion }}</span>
                  <h3 class="headline-md ck__item-name">{{ item.name }}</h3>
                  <span class="body-md ck__item-size">Tamanho: {{ item.size }}</span>
                </div>
                <div class="ck__item-right">
                  <span class="body-lg ck__item-price">{{ fmt(item.price) }}</span>
                  <button class="ck__item-remove label-caps" @click="removeItem(item.id)" aria-label="Remover peça">
                    Remover
                  </button>
                </div>
              </div>
            </TransitionGroup>

            <div class="hairline hairline--full"></div>

            <!-- Note -->
            <p class="body-md ck__note">
              Todas as peças são feitas à mão sob encomenda. Após a confirmação do pedido,
              nossa equipe entrará em contato para agendar sua prova.
            </p>
          </div>

          <!-- Summary + Form -->
          <div class="ck__aside">

            <!-- Order summary -->
            <div class="ck__summary">
              <span class="label-caps ck__summary-title">Resumo do Pedido</span>
              <div class="hairline hairline--full"></div>

              <div class="ck__summary-rows">
                <div class="ck__summary-row">
                  <span class="body-md">Subtotal</span>
                  <span class="body-md">{{ fmt(subtotal) }}</span>
                </div>
                <div class="ck__summary-row">
                  <span class="body-md">Frete</span>
                  <span class="label-caps ck__free">A combinar</span>
                </div>
              </div>

              <div class="hairline hairline--full"></div>
              <div class="ck__summary-total">
                <span class="label-caps">Total estimado</span>
                <span class="headline-md ck__total-value">{{ fmt(total) }}</span>
              </div>
            </div>

            <!-- Contact form -->
            <form class="ck__form" @submit.prevent="handleSubmit">
              <span class="label-caps ck__form-title">Dados para Contato</span>
              <div class="hairline hairline--full"></div>

              <div class="ck__fields">
                <div class="ck__field">
                  <label class="label-caps ck__field-label" for="ck-nome">Nome completo</label>
                  <input id="ck-nome" v-model="form.nome" type="text" required class="ck__input" placeholder="Seu nome" />
                </div>
                <div class="ck__field">
                  <label class="label-caps ck__field-label" for="ck-email">E-mail</label>
                  <input id="ck-email" v-model="form.email" type="email" required class="ck__input" placeholder="nome@exemplo.com" />
                </div>
                <div class="ck__field">
                  <label class="label-caps ck__field-label" for="ck-tel">WhatsApp</label>
                  <input id="ck-tel" v-model="form.telefone" type="tel" class="ck__input" placeholder="(00) 00000-0000" />
                </div>
                <div class="ck__field">
                  <label class="label-caps ck__field-label" for="ck-obs">Observações</label>
                  <textarea id="ck-obs" v-model="form.obs" class="ck__input ck__textarea" rows="3" placeholder="Medidas, dúvidas, preferências…"></textarea>
                </div>
              </div>

              <button type="submit" class="btn-primary ck__submit">Solicitar Orçamento</button>
              <p class="label-caps ck__submit-hint">Responderemos em até 24 horas</p>
            </form>

          </div>
        </div>
      </Transition>

    </div>
  </main>
</template>

<style scoped>
/* ===== Header ===== */
.ck {
  background: var(--surface);
  min-height: 100vh;
}

.ck__header {
  background: var(--champagne);
  padding-top: 120px;
  border-bottom: 0.5px solid rgba(201, 168, 76, 0.3);
}

.ck__breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 36px;
}

.ck__bc-link {
  color: var(--on-surface-variant);
  font-size: 10px;
  letter-spacing: 0.2em;
  transition: color 0.3s;
}
.ck__bc-link:hover { color: var(--gold-leaf); }
.ck__bc-sep        { color: rgba(10,10,10,0.2); font-size: 10px; }
.ck__bc-current    { color: var(--gold-leaf); font-size: 10px; letter-spacing: 0.2em; }

.ck__title-row {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 32px;
}

.ck__title { color: var(--onyx); line-height: 1; }

.ck__count {
  color: var(--on-surface-variant);
  font-size: 10px;
  letter-spacing: 0.2em;
}

/* ===== Body ===== */
.ck__body {
  padding-top: 56px;
  padding-bottom: var(--section-gap);
}

/* ===== Empty ===== */
.ck__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 80px 0;
  text-align: center;
}
.ck__empty-title { color: var(--onyx); }
.ck__empty-sub   { color: var(--on-surface-variant); margin-bottom: 8px; }

/* ===== Success ===== */
.ck__success {
  max-width: 560px;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.ck__success-eyebrow { color: var(--gold-leaf); }
.ck__success-title   { color: var(--onyx); }
.ck__success-body    { color: var(--on-surface-variant); line-height: 1.7; }
.ck__success-body strong { color: var(--onyx); font-weight: 400; }

.fade-enter-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from   { opacity: 0; transform: translateY(12px); }
.fade-leave-to     { opacity: 0; }

/* ===== Layout ===== */
.ck__layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 64px;
  align-items: start;
}

/* ===== Items ===== */
.ck__items { display: flex; flex-direction: column; gap: 0; }

.ck__items-head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
}

.ck__items-label {
  color: var(--on-surface-variant);
  font-size: 9px;
  letter-spacing: 0.2em;
}

.ck__items-label--right { text-align: right; }

.ck__items-list { display: flex; flex-direction: column; }

.ck__item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 24px;
  padding: 28px 0;
  border-bottom: 0.5px solid var(--outline-variant);
  align-items: start;
}

.ck__item-image-wrap {
  aspect-ratio: 2/3;
  overflow: hidden;
}

.ck__item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.96) sepia(0.06);
}

.ck__item-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}

.ck__item-occasion { color: var(--gold-leaf); font-size: 9px; letter-spacing: 0.22em; }
.ck__item-name     { font-size: 20px; color: var(--onyx); }
.ck__item-size     { color: var(--on-surface-variant); font-size: 13px; }

.ck__item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  padding-top: 4px;
}

.ck__item-price { color: var(--onyx); font-weight: 300; }

.ck__item-remove {
  background: none;
  border: none;
  font-size: 9px;
  letter-spacing: 0.16em;
  color: var(--on-surface-variant);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0;
  transition: color 0.2s;
}
.ck__item-remove:hover { color: var(--onyx); }

/* Item transition */
.item-enter-active { transition: opacity 0.35s ease, transform 0.35s ease; }
.item-leave-active { transition: opacity 0.22s ease; }
.item-enter-from   { opacity: 0; transform: translateX(-12px); }
.item-leave-to     { opacity: 0; }

.ck__note {
  margin-top: 24px;
  color: var(--on-surface-variant);
  font-size: 13px;
  line-height: 1.7;
  max-width: 480px;
}

/* ===== Aside ===== */
.ck__aside {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: sticky;
  top: 100px;
}

/* Summary */
.ck__summary {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--champagne);
  padding: 32px;
}

.ck__summary-title { color: var(--onyx); font-size: 10px; letter-spacing: 0.2em; }

.ck__summary-rows {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ck__summary-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.ck__summary-row .body-md { color: var(--on-surface-variant); font-size: 13px; }

.ck__free { color: var(--gold-leaf); font-size: 9px; letter-spacing: 0.16em; }

.ck__summary-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.ck__summary-total .label-caps { color: var(--onyx); }
.ck__total-value { color: var(--onyx); }

/* Form */
.ck__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.ck__form-title { color: var(--onyx); font-size: 10px; letter-spacing: 0.2em; }

.ck__fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ck__field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ck__field-label {
  color: rgba(10,10,10,0.45);
  font-size: 9px;
  letter-spacing: 0.2em;
}

.ck__input {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(10,10,10,0.2);
  padding: 10px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: var(--onyx);
  outline: none;
  border-radius: 0;
  width: 100%;
  transition: border-color 0.3s ease;
}

.ck__input::placeholder { color: rgba(10,10,10,0.25); }
.ck__input:focus { border-bottom-color: var(--gold-leaf); }

.ck__textarea { resize: none; line-height: 1.6; }

.ck__submit { width: 100%; text-align: center; }

.ck__submit-hint {
  text-align: center;
  color: rgba(10,10,10,0.3);
  font-size: 9px;
  letter-spacing: 0.16em;
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .ck__layout {
    grid-template-columns: 1fr;
    gap: 56px;
  }
  .ck__aside { position: static; }
  .ck__summary { padding: 24px; }
}

@media (max-width: 600px) {
  .ck__item { grid-template-columns: 80px 1fr; }
  .ck__item-right { display: none; }
  .ck__item-info { gap: 8px; }
}
</style>
