<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function handleSubmit() {
  if (email.value) submitted.value = true
}
</script>

<template>
  <section class="newsletter" data-nav-dark>
    <div class="container">
      <div class="newsletter__inner">
        <div class="newsletter__text">
          <span class="label-caps newsletter__eyebrow">Lista Exclusiva</span>
          <h2 class="headline-lg newsletter__title">
            Acesso Antecipado<br>às Novas Criações
          </h2>
          <p class="body-lg newsletter__sub">
            Seja a primeira a conhecer as novas peças, promoções exclusivas e os bastidores do atelier.
          </p>
        </div>

        <div class="newsletter__form-side">
          <Transition name="fade" mode="out-in">
            <form v-if="!submitted" key="form" @submit.prevent="handleSubmit" class="newsletter__form">
              <div class="newsletter__field">
                <label for="nl-email" class="label-caps newsletter__field-label">Seu e-mail</label>
                <input
                  id="nl-email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="nome@exemplo.com"
                  class="newsletter__input"
                />
              </div>
              <button type="submit" class="btn-primary">Inscrever</button>
              <p class="label-caps newsletter__disclaimer">
                Sem spam. Apenas o que realmente importa.
              </p>
            </form>

            <div v-else key="success" class="newsletter__success">
              <div class="hairline"></div>
              <p class="headline-md newsletter__success-title">Obrigada pela inscrição.</p>
              <span class="label-caps newsletter__success-sub">Bem-vinda ao Atelier</span>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter {
  padding: var(--section-gap) 0;
  background: var(--onyx);
}

.newsletter__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.newsletter__text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.newsletter__eyebrow {
  color: var(--gold-leaf);
  display: block;
}

.newsletter__title {
  color: var(--ivory);
}

.newsletter__sub {
  color: rgba(250, 246, 240, 0.55);
}

/* Form */
.newsletter__form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.newsletter__field {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.newsletter__field-label {
  color: rgba(250, 246, 240, 0.4);
  font-size: 10px;
  letter-spacing: 0.22em;
}

.newsletter__input {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(201, 168, 76, 0.35);
  padding: 12px 0;
  color: var(--ivory);
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.02em;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;
  border-radius: 0;
}

.newsletter__input::placeholder {
  color: rgba(250, 246, 240, 0.2);
}

.newsletter__input:focus {
  border-bottom-color: var(--gold-leaf);
}

.newsletter__disclaimer {
  color: rgba(250, 246, 240, 0.25);
  font-size: 9px;
  letter-spacing: 0.18em;
}

/* Success */
.newsletter__success {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.newsletter__success-title {
  color: var(--ivory);
}

.newsletter__success-sub {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.22em;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .newsletter__inner {
    grid-template-columns: 1fr;
    gap: 52px;
  }
}
</style>
