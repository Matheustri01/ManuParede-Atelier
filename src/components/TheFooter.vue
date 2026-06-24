<script setup>
const footerLinks = {
  'Coleção': [
    { label: 'Novidades' },
    { label: 'Vestidos' },
  ],
  'Atelier': [
    { label: 'Nossa História', to: '/sobre' },
    { label: 'Processo Criativo', to: '/sobre#processo-criativo' },
    { label: 'Encomendas' },
    { label: 'Parcerias' },
  ],
  'Atendimento': [
    { label: 'Contato' },
    { label: 'Envios' },
    { label: 'Trocas & Devoluções' },
    { label: 'FAQ' },
  ],
}
</script>

<template>
  <footer class="footer">
    <div class="footer__section-divider" aria-hidden="true"></div>

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
            <li v-for="link in links" :key="link.label">
              <RouterLink
                v-if="link.to"
                :to="link.to"
                class="footer__nav-link body-md"
              >
                {{ link.label }}
              </RouterLink>
              <a v-else href="#" class="footer__nav-link body-md">{{ link.label }}</a>
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
  position: relative;
  background:
    linear-gradient(
      180deg,
      rgba(241, 237, 231, 0) 0%,
      rgba(250, 246, 240, 0.44) 34%,
      rgba(250, 246, 240, 0.72)
    );
  backdrop-filter: blur(26px) saturate(1.18);
  -webkit-backdrop-filter: blur(26px) saturate(1.18);
  padding-top: 64px;
}

.footer__section-divider {
  position: absolute;
  top: 0;
  left: var(--margin-desktop);
  right: var(--margin-desktop);
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
  color: var(--onyx);
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
  color: rgba(28, 28, 24, 0.58);
}

.footer__social {
  display: flex;
  gap: 20px;
  align-items: center;
}

.footer__social-link {
  color: rgba(28, 28, 24, 0.5);
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
  color: rgba(28, 28, 24, 0.58);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.01em;
  transition: color 0.3s ease;
}

.footer__nav-link:hover {
  color: var(--onyx);
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
  background: rgba(201, 168, 76, 0.32);
}

.footer__bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer__copyright {
  color: rgba(28, 28, 24, 0.38);
  font-size: 10px;
  letter-spacing: 0.14em;
}

.footer__legal {
  display: flex;
  gap: 24px;
}

.footer__legal-link {
  color: rgba(28, 28, 24, 0.38);
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
  .footer__section-divider {
    left: var(--margin-mobile);
    right: var(--margin-mobile);
  }

  .footer__nav {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
