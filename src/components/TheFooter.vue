<script setup>
const footerLinks = {
  'Coleção': ['Novidades', 'Vestidos', 'Saias', 'Conjuntos', 'Acessórios'],
  'Atelier': ['Nossa História', 'Processo Criativo', 'Encomendas', 'Parcerias'],
  'Atendimento': ['Contato', 'Envios', 'Trocas & Devoluções', 'FAQ'],
}
</script>

<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="footer__logo-name">Manu Paredes</span>
          <span class="footer__logo-divider"></span>
          <span class="label-caps footer__logo-sub">Atelier</span>
        </div>
        <p class="body-md footer__tagline">
          Alta costura para moda festa.<br>
          Curitiba, PR — Brasil.
        </p>
        <div class="footer__social">
          <a href="#" aria-label="Instagram" class="footer__social-link">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="Pinterest" class="footer__social-link">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.73 1.184-5.023 1.184-5.023s-.302-.605-.302-1.499c0-1.404.814-2.454 1.827-2.454.861 0 1.279.647 1.279 1.422 0 .867-.551 2.165-.836 3.371-.238.978.503 1.773 1.493 1.773 1.792 0 3.171-1.888 3.171-4.614 0-2.413-1.735-4.099-4.212-4.099-2.869 0-4.554 2.152-4.554 4.374 0 .866.332 1.794.748 2.301a.3.3 0 0 1 .069.287c-.076.316-.245 1.003-.278 1.142-.044.184-.146.223-.338.135-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
          </a>
          <a href="#" aria-label="WhatsApp" class="footer__social-link">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.05 2C6.495 2 2.04 6.455 2.04 12.01c0 1.775.465 3.44 1.278 4.879L2 22l5.294-1.287A9.924 9.924 0 0012.05 22c5.555 0 10.01-4.455 10.01-10.01C22.06 6.455 17.605 2 12.05 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <nav class="footer__nav" aria-label="Footer navigation">
        <div
          v-for="(links, category) in footerLinks"
          :key="category"
          class="footer__nav-col"
        >
          <h4 class="label-caps footer__nav-heading">{{ category }}</h4>
          <ul class="footer__nav-list">
            <li v-for="link in links" :key="link">
              <a href="#" class="footer__nav-link body-md">{{ link }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="footer__bottom container">
      <div class="hairline hairline--full footer__hairline"></div>
      <div class="footer__bottom-row">
        <span class="footer__copyright label-caps">
          © 2025 Manu Paredes Atelier. Todos os direitos reservados.
        </span>
        <div class="footer__legal">
          <a href="#" class="label-caps footer__legal-link">Privacidade</a>
          <a href="#" class="label-caps footer__legal-link">Termos</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--onyx);
  padding-top: 80px;
}

.footer__top {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 80px;
  padding-bottom: 64px;
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.footer__logo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__logo-name {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--ivory);
}

.footer__logo-divider {
  display: block;
  width: 24px;
  height: 0.5px;
  background: var(--gold-leaf);
}

.footer__logo-sub {
  color: var(--gold-leaf);
  font-size: 8px;
  letter-spacing: 0.38em;
}

.footer__tagline {
  color: rgba(250, 246, 240, 0.38);
}

.footer__social {
  display: flex;
  gap: 20px;
  align-items: center;
}

.footer__social-link {
  color: rgba(250, 246, 240, 0.4);
  transition: color 0.3s ease;
  display: flex;
}

.footer__social-link:hover {
  color: var(--gold-leaf);
}

/* Nav */
.footer__nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer__nav-heading {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
  margin-bottom: 24px;
}

.footer__nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__nav-link {
  color: rgba(250, 246, 240, 0.42);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;
}

.footer__nav-link:hover {
  color: var(--ivory);
}

/* Bottom */
.footer__bottom {
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__hairline {
  background: rgba(201, 168, 76, 0.18);
}

.footer__bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer__copyright {
  color: rgba(250, 246, 240, 0.25);
  font-size: 10px;
  letter-spacing: 0.14em;
}

.footer__legal {
  display: flex;
  gap: 24px;
}

.footer__legal-link {
  color: rgba(250, 246, 240, 0.25);
  font-size: 10px;
  letter-spacing: 0.15em;
  transition: color 0.3s ease;
}

.footer__legal-link:hover {
  color: var(--gold-leaf);
}

@media (max-width: 960px) {
  .footer__top {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .footer__nav {
    grid-template-columns: 1fr 1fr;
  }

  .footer__bottom-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 540px) {
  .footer__nav {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
