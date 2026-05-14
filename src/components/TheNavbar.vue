<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const isOpen = ref(false)
let closeTimer = null

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

function openMenu() {
  clearTimeout(closeTimer)
  isOpen.value = true
}

function closeMenu() {
  closeTimer = setTimeout(() => { isOpen.value = false }, 160)
}

function closeImmediate() {
  clearTimeout(closeTimer)
  isOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const links = [
  { num: '01', label: 'Coleção',    routeTo: '/colecoes' },
  { num: '02', label: 'Vestidos',   routeTo: '/vestidos' },
  { num: '03', label: 'Sob Medida', href: '/#sob-medida' },
  { num: '04', label: 'Sobre',      href: '/#sobre' },
  { num: '05', label: 'Contato',    href: '/#contato' },
  { num: '06', label: 'Suporte',    href: '/#suporte' },
]
</script>

<template>
  <!-- Top Bar -->
  <header :class="['topbar', { 'topbar--scrolled': scrolled }]">
    <div class="topbar__inner">
      <button
        :class="['hamburger', { 'hamburger--open': isOpen }]"
        @mouseenter="openMenu"
        @mouseleave="closeMenu"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Menu de navegação"
      >
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </button>

      <RouterLink to="/" class="topbar__logo" @click="closeImmediate">
        <span class="topbar__logo-name">Manu Paredes</span>
        <span class="topbar__logo-divider"></span>
        <span class="label-caps topbar__logo-sub">Atelier</span>
      </RouterLink>

      <a href="#" class="topbar__icon" aria-label="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
    </div>
  </header>

  <!-- Overlay -->
  <Transition name="overlay">
    <div v-if="isOpen" class="side-overlay" @click="closeImmediate"></div>
  </Transition>

  <!-- Side Drawer -->
  <nav
    :class="['side-drawer', { 'side-drawer--open': isOpen }]"
    @mouseenter="openMenu"
    @mouseleave="closeMenu"
    aria-label="Navegação lateral"
  >
    <div class="side-drawer__inner">
      <RouterLink to="/" class="side-drawer__logo" @click="closeImmediate">
        <span class="side-drawer__logo-name">Manu Paredes</span>
        <span class="side-drawer__logo-divider"></span>
        <span class="label-caps side-drawer__logo-sub">Atelier</span>
      </RouterLink>

      <div class="side-drawer__hairline"></div>

      <ul class="side-drawer__links">
        <li v-for="link in links" :key="link.label" class="side-drawer__item">
          <RouterLink
            v-if="link.routeTo"
            :to="link.routeTo"
            class="side-drawer__link"
            @click="closeImmediate"
          >
            <span class="side-drawer__num">{{ link.num }}</span>
            <span class="side-drawer__label">{{ link.label }}</span>
          </RouterLink>
          <a
            v-else
            :href="link.href"
            class="side-drawer__link"
            @click="closeImmediate"
          >
            <span class="side-drawer__num">{{ link.num }}</span>
            <span class="side-drawer__label">{{ link.label }}</span>
          </a>
        </li>
      </ul>

      <div class="side-drawer__hairline"></div>

      <div class="side-drawer__social">
        <a href="#" aria-label="Instagram" class="side-drawer__social-link">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="#" aria-label="Pinterest" class="side-drawer__social-link">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.73 1.184-5.023 1.184-5.023s-.302-.605-.302-1.499c0-1.404.814-2.454 1.827-2.454.861 0 1.279.647 1.279 1.422 0 .867-.551 2.165-.836 3.371-.238.978.503 1.773 1.493 1.773 1.792 0 3.171-1.888 3.171-4.614 0-2.413-1.735-4.099-4.212-4.099-2.869 0-4.554 2.152-4.554 4.374 0 .866.332 1.794.748 2.301a.3.3 0 0 1 .069.287c-.076.316-.245 1.003-.278 1.142-.044.184-.146.223-.338.135-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </a>
        <a href="#" aria-label="WhatsApp" class="side-drawer__social-link">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.05 2C6.495 2 2.04 6.455 2.04 12.01c0 1.775.465 3.44 1.278 4.879L2 22l5.294-1.287A9.924 9.924 0 0012.05 22c5.555 0 10.01-4.455 10.01-10.01C22.06 6.455 17.605 2 12.05 2z"/>
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ===== Top Bar ===== */
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease;
  border-bottom: 0.5px solid transparent;
}

.topbar--scrolled {
  background: rgba(245, 236, 215, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom-color: var(--gold-leaf);
}

.topbar__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 22px var(--margin-desktop);
  transition: padding 0.4s ease;
}

.topbar--scrolled .topbar__inner {
  padding-top: 14px;
  padding-bottom: 14px;
}

/* ===== Hamburger ===== */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
  justify-self: start;
}

.hamburger__line {
  display: block;
  width: 22px;
  height: 1px;
  background: var(--ivory);
  transform-origin: center;
  transition:
    background 0.3s ease,
    transform 0.35s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.25s ease;
}

.topbar--scrolled .hamburger__line {
  background: var(--onyx);
}

.hamburger--open .hamburger__line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.hamburger--open .hamburger__line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger--open .hamburger__line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* ===== Logo ===== */
.topbar__logo {
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.topbar__logo-name {
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.14em;
  color: var(--ivory);
  transition: color 0.3s ease;
  white-space: nowrap;
}

.topbar--scrolled .topbar__logo-name { color: var(--onyx); }

.topbar__logo-divider {
  display: block;
  width: 28px;
  height: 0.5px;
  background: var(--gold-leaf);
}

.topbar__logo-sub {
  color: var(--gold-leaf);
  font-size: 8px;
  letter-spacing: 0.38em;
}

/* ===== Instagram icon ===== */
.topbar__icon {
  justify-self: end;
  color: var(--ivory);
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.topbar--scrolled .topbar__icon { color: var(--onyx); }
.topbar__icon:hover { color: var(--gold-leaf); }

/* ===== Overlay ===== */
.side-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.45);
  z-index: 850;
  cursor: pointer;
}

.overlay-enter-active { transition: opacity 0.35s ease; }
.overlay-leave-active { transition: opacity 0.25s ease; }
.overlay-enter-from,
.overlay-leave-to { opacity: 0; }

/* ===== Side Drawer ===== */
.side-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 340px;
  height: 100vh;
  height: 100dvh;
  z-index: 900;
  background: rgba(10, 10, 10, 0.97);
  transform: translateX(-100%);
  transition: transform 0.55s cubic-bezier(0.77, 0, 0.175, 1);
  overflow-y: auto;
  scrollbar-width: none;
}

.side-drawer::-webkit-scrollbar { display: none; }
.side-drawer--open { transform: translateX(0); }

.side-drawer__inner {
  padding: 100px 48px 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100%;
}

/* Drawer logo */
.side-drawer__logo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.side-drawer__logo-name {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--ivory);
  white-space: nowrap;
}

.side-drawer__logo-divider {
  display: block;
  width: 24px;
  height: 0.5px;
  background: var(--gold-leaf);
}

.side-drawer__logo-sub {
  color: var(--gold-leaf);
  font-size: 8px;
  letter-spacing: 0.38em;
}

.side-drawer__hairline {
  width: 100%;
  height: 0.5px;
  background: rgba(201, 168, 76, 0.22);
  flex-shrink: 0;
}

/* ===== Links ===== */
.side-drawer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.side-drawer__item {
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.side-drawer--open .side-drawer__item           { opacity: 1; transform: translateX(0); }
.side-drawer--open .side-drawer__item:nth-child(1) { transition-delay: 0.12s; }
.side-drawer--open .side-drawer__item:nth-child(2) { transition-delay: 0.17s; }
.side-drawer--open .side-drawer__item:nth-child(3) { transition-delay: 0.22s; }
.side-drawer--open .side-drawer__item:nth-child(4) { transition-delay: 0.27s; }
.side-drawer--open .side-drawer__item:nth-child(5) { transition-delay: 0.32s; }
.side-drawer--open .side-drawer__item:nth-child(6) { transition-delay: 0.37s; }

.side-drawer__link {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 9px 0;
  transition: transform 0.3s ease;
}

.side-drawer__link:hover { transform: translateX(8px); }

.side-drawer__num {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: rgba(201, 168, 76, 0.45);
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.side-drawer__link:hover .side-drawer__num,
.side-drawer__link.router-link-active .side-drawer__num {
  color: var(--gold-leaf);
}

.side-drawer__label {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  color: rgba(250, 246, 240, 0.65);
  letter-spacing: 0.02em;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.side-drawer__link:hover .side-drawer__label,
.side-drawer__link.router-link-active .side-drawer__label {
  color: var(--ivory);
}

/* ===== Social ===== */
.side-drawer__social {
  display: flex;
  gap: 20px;
  align-items: center;
}

.side-drawer__social-link {
  color: rgba(250, 246, 240, 0.28);
  display: flex;
  transition: color 0.3s ease;
}

.side-drawer__social-link:hover { color: var(--gold-leaf); }

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .topbar__inner {
    padding-left: var(--margin-mobile);
    padding-right: var(--margin-mobile);
  }

  .side-drawer { width: 85vw; }

  .side-drawer__inner {
    padding: 96px 32px 48px;
  }

  .side-drawer__label { font-size: 24px; }
}
</style>
