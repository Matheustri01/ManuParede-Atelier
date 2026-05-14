<script setup>
import { reactive, ref, computed } from 'vue'

/* ── Filtros disponíveis ─────────────────────────────────────── */
const priceRanges = [
  { value: 'ate-1500',    label: 'Até R$ 1.500' },
  { value: '1500-2000',   label: 'R$ 1.500 – R$ 2.000' },
  { value: '2000-2500',   label: 'R$ 2.000 – R$ 2.500' },
  { value: 'acima-2500',  label: 'Acima de R$ 2.500' },
]

const sizeOptions = ['PP', 'P', 'M', 'G', 'GG', 'Sob Medida']

const occasionOptions = ['Casamentos', 'Formaturas', 'Festas & Coquetéis', 'Sob Medida']

const colorOptions = [
  { name: 'Nude',          hex: '#D9B896' },
  { name: 'Marfim',        hex: '#F0EAD6', border: true },
  { name: 'Preto',         hex: '#0A0A0A' },
  { name: 'Vinho',         hex: '#6B1E3A' },
  { name: 'Azul Serenity', hex: '#96B4CC' },
  { name: 'Verde Oliva',   hex: '#6E7D5E' },
  { name: 'Rosa Blush',    hex: '#EDCAC6', border: true },
  { name: 'Dourado',       hex: '#C9A84C' },
]

/* ── Produtos ────────────────────────────────────────────────── */
const allDresses = [
  { id: 1,  name: 'Vestido Íris',      price: 1890, priceLabel: 'R$ 1.890', occasion: 'Casamentos',          sizes: ['P','M','G'],      color: 'Nude',          image: 'https://picsum.photos/seed/dress-iris-mp/400/600',      tag: 'Novo' },
  { id: 2,  name: 'Vestido Celeste',   price: 2240, priceLabel: 'R$ 2.240', occasion: 'Casamentos',          sizes: ['M','G','GG'],     color: 'Marfim',        image: 'https://picsum.photos/seed/dress-celeste-mp/400/600',   tag: 'Exclusivo' },
  { id: 3,  name: 'Vestido Nuvem',     price: 2850, priceLabel: 'R$ 2.850', occasion: 'Casamentos',          sizes: ['PP','P','M'],     color: 'Rosa Blush',    image: 'https://picsum.photos/seed/dress-nuvem-mp/400/600',     tag: null },
  { id: 4,  name: 'Vestido Aurora',    price: 1650, priceLabel: 'R$ 1.650', occasion: 'Formaturas',          sizes: ['P','M'],          color: 'Vinho',         image: 'https://picsum.photos/seed/dress-aurora-mp/400/600',    tag: null },
  { id: 5,  name: 'Vestido Seraphine', price: 2890, priceLabel: 'R$ 2.890', occasion: 'Formaturas',          sizes: ['M','G'],          color: 'Preto',         image: 'https://picsum.photos/seed/dress-seraphine-mp/400/600', tag: 'Último' },
  { id: 6,  name: 'Vestido Lumière',   price: 1990, priceLabel: 'R$ 1.990', occasion: 'Formaturas',          sizes: ['P','M','G','GG'], color: 'Azul Serenity', image: 'https://picsum.photos/seed/dress-lumiere-mp/400/600',   tag: 'Novo' },
  { id: 7,  name: 'Vestido Onyx',      price: 1450, priceLabel: 'R$ 1.450', occasion: 'Festas & Coquetéis',  sizes: ['M','G'],          color: 'Preto',         image: 'https://picsum.photos/seed/dress-onyx-mp/400/600',      tag: null },
  { id: 8,  name: 'Vestido Garnet',    price: 1780, priceLabel: 'R$ 1.780', occasion: 'Festas & Coquetéis',  sizes: ['P','M'],          color: 'Vinho',         image: 'https://picsum.photos/seed/dress-garnet-mp/400/600',    tag: 'Exclusivo' },
  { id: 9,  name: 'Vestido Perle',     price: 2120, priceLabel: 'R$ 2.120', occasion: 'Festas & Coquetéis',  sizes: ['M','G','GG'],     color: 'Nude',          image: 'https://picsum.photos/seed/dress-perle-mp/400/600',     tag: null },
  { id: 10, name: 'Vestido Eden',      price: 3200, priceLabel: 'R$ 3.200', occasion: 'Sob Medida',          sizes: ['Sob Medida'],     color: 'Marfim',        image: 'https://picsum.photos/seed/dress-eden-mp/400/600',      tag: 'Atemporal' },
  { id: 11, name: 'Vestido Valence',   price: 2650, priceLabel: 'R$ 2.650', occasion: 'Sob Medida',          sizes: ['Sob Medida'],     color: 'Verde Oliva',   image: 'https://picsum.photos/seed/dress-valence-mp/400/600',   tag: null },
  { id: 12, name: 'Vestido Marcella',  price: 2980, priceLabel: 'R$ 2.980', occasion: 'Sob Medida',          sizes: ['Sob Medida'],     color: 'Dourado',       image: 'https://picsum.photos/seed/dress-marcella-mp/400/600',  tag: 'Atemporal' },
  { id: 13, name: 'Vestido Solange',   price: 1380, priceLabel: 'R$ 1.380', occasion: 'Festas & Coquetéis',  sizes: ['PP','P','M'],     color: 'Rosa Blush',    image: 'https://picsum.photos/seed/dress-solange-mp/400/600',   tag: null },
  { id: 14, name: 'Vestido Mirelle',   price: 2100, priceLabel: 'R$ 2.100', occasion: 'Casamentos',          sizes: ['M','G'],          color: 'Verde Oliva',   image: 'https://picsum.photos/seed/dress-mirelle-mp/400/600',   tag: 'Novo' },
  { id: 15, name: 'Vestido Théa',      price: 1750, priceLabel: 'R$ 1.750', occasion: 'Formaturas',          sizes: ['P','M','G'],      color: 'Azul Serenity', image: 'https://picsum.photos/seed/dress-thea-mp/400/600',      tag: null },
  { id: 16, name: 'Vestido Esmée',     price: 3100, priceLabel: 'R$ 3.100', occasion: 'Casamentos',          sizes: ['M'],              color: 'Dourado',       image: 'https://picsum.photos/seed/dress-esmee-mp/400/600',     tag: 'Exclusivo' },
  { id: 17, name: 'Vestido Camélia',   price: 1580, priceLabel: 'R$ 1.580', occasion: 'Festas & Coquetéis',  sizes: ['PP','P'],         color: 'Preto',         image: 'https://picsum.photos/seed/dress-camelia-mp/400/600',   tag: null },
  { id: 18, name: 'Vestido Riviera',   price: 2450, priceLabel: 'R$ 2.450', occasion: 'Formaturas',          sizes: ['M','G','GG'],     color: 'Nude',          image: 'https://picsum.photos/seed/dress-riviera-mp/400/600',   tag: 'Novo' },
]

/* ── Estado ──────────────────────────────────────────────────── */
const filters = reactive({ prices: [], sizes: [], occasions: [], colors: [] })
const openSections = reactive({ preco: true, tamanho: true, ocasiao: true, cores: true })
const sortBy = ref('relevancia')
const filterOpen = ref(false)

/* ── Helpers ─────────────────────────────────────────────────── */
function toggleFilter(type, value) {
  const arr = filters[type]
  const idx = arr.indexOf(value)
  idx === -1 ? arr.push(value) : arr.splice(idx, 1)
}

function clearFilters() {
  filters.prices = []
  filters.sizes = []
  filters.occasions = []
  filters.colors = []
}

function matchesPrice(price, ranges) {
  return ranges.some(r => {
    if (r === 'ate-1500')   return price <= 1500
    if (r === '1500-2000')  return price > 1500 && price <= 2000
    if (r === '2000-2500')  return price > 2000 && price <= 2500
    if (r === 'acima-2500') return price > 2500
    return false
  })
}

/* ── Computed ────────────────────────────────────────────────── */
const filteredDresses = computed(() => {
  let result = allDresses.filter(d => {
    if (filters.prices.length    && !matchesPrice(d.price, filters.prices))             return false
    if (filters.sizes.length     && !filters.sizes.some(s => d.sizes.includes(s)))      return false
    if (filters.occasions.length && !filters.occasions.includes(d.occasion))            return false
    if (filters.colors.length    && !filters.colors.includes(d.color))                  return false
    return true
  })

  if (sortBy.value === 'menor-preco') return [...result].sort((a, b) => a.price - b.price)
  if (sortBy.value === 'maior-preco') return [...result].sort((a, b) => b.price - a.price)
  return result
})

const activeChips = computed(() => {
  const chips = []
  priceRanges.forEach(r => {
    if (filters.prices.includes(r.value))
      chips.push({ type: 'prices', value: r.value, label: r.label })
  })
  sizeOptions.forEach(s => {
    if (filters.sizes.includes(s))
      chips.push({ type: 'sizes', value: s, label: s })
  })
  occasionOptions.forEach(o => {
    if (filters.occasions.includes(o))
      chips.push({ type: 'occasions', value: o, label: o })
  })
  colorOptions.forEach(c => {
    if (filters.colors.includes(c.name))
      chips.push({ type: 'colors', value: c.name, label: c.name })
  })
  return chips
})

const activeFilterCount = computed(() =>
  filters.prices.length + filters.sizes.length + filters.occasions.length + filters.colors.length
)
</script>

<template>
  <main class="dp">

    <!-- ── Page Header ───────────────────────────────────────── -->
    <div class="dp__header">
      <div class="container">
        <div class="dp__breadcrumb">
          <RouterLink to="/" class="label-caps dp__bc-link">Início</RouterLink>
          <span class="dp__bc-sep">—</span>
          <span class="label-caps dp__bc-current">Vestidos</span>
        </div>

        <div class="dp__title-row">
          <div class="dp__title-block">
            <span class="label-caps dp__eyebrow">Coleção Completa</span>
            <h1 class="display-lg dp__title">Vestidos</h1>
          </div>
          <p class="body-lg dp__desc">
            Todas as peças do atelier, independente da coleção.<br>
            Encontre o vestido que conta a sua história.
          </p>
        </div>

        <div class="hairline hairline--full"></div>
      </div>
    </div>

    <!-- ── Body: toolbar + sidebar + grid ────────────────────── -->
    <div class="dp__body container">

      <!-- Toolbar -->
      <div class="dp__toolbar">
        <div class="dp__toolbar-left">
          <span class="label-caps dp__count">
            {{ filteredDresses.length }} {{ filteredDresses.length === 1 ? 'peça' : 'peças' }}
          </span>

          <TransitionGroup name="chip" tag="div" class="dp__chips">
            <span
              v-for="chip in activeChips"
              :key="chip.type + chip.value"
              class="dp__chip label-caps"
            >
              {{ chip.label }}
              <button class="dp__chip-remove" @click="toggleFilter(chip.type, chip.value)" aria-label="Remover filtro">×</button>
            </span>
          </TransitionGroup>

          <button
            v-if="activeChips.length > 0"
            class="dp__clear label-caps"
            @click="clearFilters"
          >
            Limpar tudo
          </button>
        </div>

        <div class="dp__toolbar-right">
          <!-- Filter toggle (mobile only) -->
          <button class="dp__filter-btn label-caps" @click="filterOpen = true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2">
              <line x1="1" y1="3" x2="13" y2="3"/>
              <line x1="1" y1="7" x2="13" y2="7"/>
              <line x1="1" y1="11" x2="13" y2="11"/>
              <circle cx="4"  cy="3"  r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="9"  cy="7"  r="1.5" fill="currentColor" stroke="none"/>
              <circle cx="5"  cy="11" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            Filtros
            <span v-if="activeFilterCount > 0" class="dp__filter-badge">{{ activeFilterCount }}</span>
          </button>

          <div class="dp__sort-wrap">
            <select v-model="sortBy" class="dp__sort">
              <option value="relevancia">Relevância</option>
              <option value="menor-preco">Menor Preço</option>
              <option value="maior-preco">Maior Preço</option>
            </select>
            <svg class="dp__sort-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Layout -->
      <div class="dp__layout">

        <!-- Overlay mobile -->
        <Transition name="overlay">
          <div v-if="filterOpen" class="dp__overlay" @click="filterOpen = false"></div>
        </Transition>

        <!-- ── Sidebar ──────────────────────────────────────── -->
        <aside :class="['dp__sidebar', { 'dp__sidebar--open': filterOpen }]">

          <div class="dp__sidebar-head">
            <span class="label-caps dp__sidebar-title">Filtros</span>
            <button class="dp__sidebar-close" @click="filterOpen = false" aria-label="Fechar filtros">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                <line x1="1" y1="1" x2="13" y2="13"/>
                <line x1="13" y1="1" x2="1" y2="13"/>
              </svg>
            </button>
          </div>

          <!-- Preço -->
          <div class="filter-section">
            <button class="filter-section__head" @click="openSections.preco = !openSections.preco">
              <span class="label-caps">Preço</span>
              <svg :class="['filter-chevron', { 'filter-chevron--open': openSections.preco }]"
                width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/>
              </svg>
            </button>
            <Transition name="expand">
              <div v-if="openSections.preco" class="filter-section__body">
                <div
                  v-for="range in priceRanges"
                  :key="range.value"
                  :class="['filter-item', { 'filter-item--active': filters.prices.includes(range.value) }]"
                  @click="toggleFilter('prices', range.value)"
                >
                  <span class="filter-item__box"></span>
                  <span class="body-md filter-item__text">{{ range.label }}</span>
                </div>
              </div>
            </Transition>
          </div>

          <div class="filter-divider"></div>

          <!-- Tamanho -->
          <div class="filter-section">
            <button class="filter-section__head" @click="openSections.tamanho = !openSections.tamanho">
              <span class="label-caps">Tamanho</span>
              <svg :class="['filter-chevron', { 'filter-chevron--open': openSections.tamanho }]"
                width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/>
              </svg>
            </button>
            <Transition name="expand">
              <div v-if="openSections.tamanho" class="filter-section__body">
                <div class="size-grid">
                  <button
                    v-for="size in sizeOptions"
                    :key="size"
                    :class="['size-pill', { 'size-pill--active': filters.sizes.includes(size), 'size-pill--wide': size === 'Sob Medida' }]"
                    @click="toggleFilter('sizes', size)"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>
            </Transition>
          </div>

          <div class="filter-divider"></div>

          <!-- Ocasião -->
          <div class="filter-section">
            <button class="filter-section__head" @click="openSections.ocasiao = !openSections.ocasiao">
              <span class="label-caps">Ocasião</span>
              <svg :class="['filter-chevron', { 'filter-chevron--open': openSections.ocasiao }]"
                width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/>
              </svg>
            </button>
            <Transition name="expand">
              <div v-if="openSections.ocasiao" class="filter-section__body">
                <div
                  v-for="occ in occasionOptions"
                  :key="occ"
                  :class="['filter-item', { 'filter-item--active': filters.occasions.includes(occ) }]"
                  @click="toggleFilter('occasions', occ)"
                >
                  <span class="filter-item__box"></span>
                  <span class="body-md filter-item__text">{{ occ }}</span>
                </div>
              </div>
            </Transition>
          </div>

          <div class="filter-divider"></div>

          <!-- Cores -->
          <div class="filter-section">
            <button class="filter-section__head" @click="openSections.cores = !openSections.cores">
              <span class="label-caps">Cores</span>
              <svg :class="['filter-chevron', { 'filter-chevron--open': openSections.cores }]"
                width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="square"/>
              </svg>
            </button>
            <Transition name="expand">
              <div v-if="openSections.cores" class="filter-section__body">
                <div class="color-grid">
                  <button
                    v-for="color in colorOptions"
                    :key="color.name"
                    :class="['color-swatch', { 'color-swatch--active': filters.colors.includes(color.name), 'color-swatch--bordered': color.border }]"
                    :style="{ '--swatch-color': color.hex }"
                    :title="color.name"
                    :aria-label="color.name"
                    @click="toggleFilter('colors', color.name)"
                  ></button>
                </div>
                <!-- Active color label -->
                <p v-if="filters.colors.length > 0" class="label-caps color-label">
                  {{ filters.colors.join(', ') }}
                </p>
              </div>
            </Transition>
          </div>

          <!-- Apply (mobile) -->
          <div class="dp__sidebar-apply">
            <button class="btn-primary dp__apply-btn" @click="filterOpen = false">
              Ver {{ filteredDresses.length }} {{ filteredDresses.length === 1 ? 'peça' : 'peças' }}
            </button>
          </div>

        </aside>

        <!-- ── Product Grid ─────────────────────────────────── -->
        <div class="dp__grid-wrap">
          <TransitionGroup name="product" tag="div" class="dp__grid">
            <article
              v-for="dress in filteredDresses"
              :key="dress.id"
              class="product-card"
            >
              <div class="product-card__image-wrap">
                <img :src="dress.image" :alt="dress.name" class="product-card__image" loading="lazy" />
                <span v-if="dress.tag" class="product-card__tag label-caps">{{ dress.tag }}</span>
                <div class="product-card__actions">
                  <a href="#" class="btn-primary product-card__btn">Ver Peça</a>
                </div>
              </div>
              <div class="product-card__info">
                <span class="label-caps product-card__occasion">{{ dress.occasion }}</span>
                <h3 class="headline-md product-card__name">{{ dress.name }}</h3>
                <div class="product-card__meta">
                  <span class="body-md product-card__price">{{ dress.priceLabel }}</span>
                  <div class="product-card__sizes">
                    <span
                      v-for="s in dress.sizes.slice(0, 3)"
                      :key="s"
                      class="product-card__size"
                    >{{ s }}</span>
                    <span v-if="dress.sizes.length > 3" class="product-card__size product-card__size--more">
                      +{{ dress.sizes.length - 3 }}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </TransitionGroup>

          <!-- Empty state -->
          <div v-if="filteredDresses.length === 0" class="dp__empty">
            <div class="hairline"></div>
            <p class="headline-md dp__empty-title">Nenhuma peça encontrada</p>
            <p class="body-md dp__empty-sub">Tente ajustar ou remover alguns filtros.</p>
            <button class="btn-secondary btn-secondary--onyx dp__empty-btn" @click="clearFilters">
              Limpar Filtros
            </button>
          </div>
        </div>

      </div>
    </div>

  </main>
</template>

<style scoped>
/* ===== Page Header ===== */
.dp {
  background: var(--surface);
  min-height: 100vh;
}

.dp__header {
  background: var(--champagne);
  padding-top: 120px;
  padding-bottom: 0;
  border-bottom: 0.5px solid rgba(201, 168, 76, 0.3);
}

.dp__breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.dp__bc-link {
  color: var(--on-surface-variant);
  font-size: 10px;
  letter-spacing: 0.2em;
  transition: color 0.3s;
}
.dp__bc-link:hover { color: var(--gold-leaf); }

.dp__bc-sep { color: rgba(10,10,10,0.2); font-size: 10px; }

.dp__bc-current {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.dp__title-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.dp__title-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dp__eyebrow { color: var(--gold-leaf); }

.dp__title { color: var(--onyx); line-height: 1; }

.dp__desc {
  color: var(--on-surface-variant);
  max-width: 380px;
  padding-bottom: 8px;
}

/* ===== Body ===== */
.dp__body {
  padding-top: 40px;
  padding-bottom: var(--section-gap);
}

/* ===== Toolbar ===== */
.dp__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.dp__toolbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.dp__toolbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.dp__count {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
  white-space: nowrap;
}

/* Active chips */
.dp__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.dp__chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px 5px 12px;
  border: 0.5px solid var(--gold-leaf);
  font-size: 9px;
  letter-spacing: 0.16em;
  color: var(--onyx);
  background: rgba(201, 168, 76, 0.08);
}

.dp__chip-remove {
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
  line-height: 1;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition: color 0.2s;
}
.dp__chip-remove:hover { color: var(--onyx); }

.dp__clear {
  background: none;
  border: none;
  font-size: 9px;
  letter-spacing: 0.16em;
  color: var(--on-surface-variant);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
  padding: 0;
}
.dp__clear:hover { color: var(--onyx); }

/* Filter toggle (mobile only) */
.dp__filter-btn {
  display: none;
  align-items: center;
  gap: 8px;
  background: none;
  border: 0.5px solid var(--outline-variant);
  padding: 9px 16px;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  position: relative;
}
.dp__filter-btn:hover { border-color: var(--gold-leaf); color: var(--onyx); }

.dp__filter-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 16px;
  height: 16px;
  background: var(--gold-leaf);
  color: var(--onyx);
  font-size: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sort */
.dp__sort-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.dp__sort {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: 0.5px solid var(--outline-variant);
  padding: 9px 36px 9px 14px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  cursor: pointer;
  border-radius: 0;
  transition: border-color 0.2s;
}
.dp__sort:focus { outline: none; border-color: var(--gold-leaf); }

.dp__sort-arrow {
  position: absolute;
  right: 12px;
  pointer-events: none;
  color: var(--on-surface-variant);
}

/* ===== Layout ===== */
.dp__layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 48px;
  align-items: start;
}

/* ===== Overlay (mobile) ===== */
.dp__overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.4);
  z-index: 850;
}

.overlay-enter-active { transition: opacity 0.3s ease; }
.overlay-leave-active { transition: opacity 0.22s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

/* ===== Sidebar ===== */
.dp__sidebar {
  position: sticky;
  top: 96px;
  max-height: calc(100vh - 112px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(201, 168, 76, 0.3) transparent;
  padding-right: 4px;
}

.dp__sidebar::-webkit-scrollbar { width: 3px; }
.dp__sidebar::-webkit-scrollbar-thumb { background: rgba(201, 168, 76, 0.3); }

.dp__sidebar-head {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  margin-bottom: 8px;
  border-bottom: 0.5px solid rgba(201, 168, 76, 0.2);
}

.dp__sidebar-title { color: var(--onyx); font-size: 11px; letter-spacing: 0.2em; }

.dp__sidebar-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--on-surface-variant);
  padding: 4px;
  transition: color 0.2s;
}
.dp__sidebar-close:hover { color: var(--gold-leaf); }

/* Filter section */
.filter-section { padding: 20px 0 4px; }

.filter-section__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  padding: 0 0 14px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--onyx);
}

.filter-chevron {
  color: var(--on-surface-variant);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}
.filter-chevron--open { transform: rotate(180deg); }

.filter-section__body { padding-bottom: 8px; }

.filter-divider {
  width: 100%;
  height: 0.5px;
  background: var(--outline-variant);
}

/* Filter items (price, occasion) */
.filter-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  cursor: pointer;
  transition: opacity 0.2s;
}
.filter-item:hover { opacity: 0.75; }

.filter-item__box {
  width: 13px;
  height: 13px;
  border: 0.5px solid var(--outline-variant);
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
  position: relative;
}

.filter-item--active .filter-item__box {
  background: var(--gold-leaf);
  border-color: var(--gold-leaf);
}

.filter-item--active .filter-item__box::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 1.5px;
  width: 4px;
  height: 7px;
  border: 1.5px solid var(--onyx);
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

.filter-item__text { color: var(--on-surface-variant); font-size: 13px; }
.filter-item--active .filter-item__text { color: var(--onyx); }

/* Size pills */
.size-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 4px 0 8px;
}

.size-pill {
  padding: 6px 11px;
  border: 0.5px solid var(--outline-variant);
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, color 0.2s;
}
.size-pill:hover { border-color: var(--gold-leaf); color: var(--onyx); }
.size-pill--active { border-color: var(--gold-leaf); background: var(--gold-leaf); color: var(--onyx); }
.size-pill--wide { width: 100%; text-align: center; }

/* Color swatches */
.color-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 4px 0 10px;
}

.color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--swatch-color);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

.color-swatch--bordered { border-color: var(--outline-variant); }

.color-swatch--active {
  box-shadow: 0 0 0 2px var(--surface), 0 0 0 3.5px var(--gold-leaf);
  transform: scale(1.1);
}

.color-label {
  color: var(--on-surface-variant);
  font-size: 9px;
  letter-spacing: 0.14em;
  margin-top: 2px;
}

/* Mobile apply */
.dp__sidebar-apply { display: none; margin-top: 24px; }
.dp__apply-btn { width: 100%; text-align: center; }

/* ===== Accordion transition ===== */
.expand-enter-active {
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease;
  max-height: 400px;
}
.expand-leave-active {
  overflow: hidden;
  transition: max-height 0.28s ease, opacity 0.22s ease;
  max-height: 400px;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0 !important;
  opacity: 0;
}

/* ===== Chip transition ===== */
.chip-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.chip-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; position: absolute; }
.chip-enter-from   { opacity: 0; transform: scale(0.85); }
.chip-leave-to     { opacity: 0; transform: scale(0.85); }

/* ===== Product Grid ===== */
.dp__grid-wrap { min-width: 0; }

.dp__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gutter);
  position: relative;
}

.product-card { display: flex; flex-direction: column; }

.product-card__image-wrap {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.96) sepia(0.06);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.product-card:hover .product-card__image { transform: scale(1.04); }

.product-card__tag {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--gold-leaf);
  color: var(--onyx);
  padding: 5px 12px;
  font-size: 9px;
  letter-spacing: 0.22em;
}

.product-card__actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.product-card:hover .product-card__actions { transform: translateY(0); }

.product-card__btn { padding: 12px 28px; font-size: 11px; letter-spacing: 0.14em; }

.product-card__info {
  padding: 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
}

.product-card__occasion { color: var(--gold-leaf); font-size: 10px; letter-spacing: 0.22em; }
.product-card__name { font-size: 18px; color: var(--onyx); }

.product-card__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.product-card__price { color: var(--on-surface-variant); }

.product-card__sizes {
  display: flex;
  gap: 4px;
  align-items: center;
}

.product-card__size {
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--on-surface-variant);
  border: 0.5px solid var(--outline-variant);
  padding: 2px 5px;
}

.product-card__size--more {
  border-color: transparent;
  color: var(--gold-leaf);
}

/* Product transition */
.product-enter-active { transition: opacity 0.38s ease, transform 0.38s ease; }
.product-leave-active { transition: opacity 0.22s ease; position: absolute; }
.product-enter-from   { opacity: 0; transform: translateY(14px); }
.product-leave-to     { opacity: 0; }
.product-move         { transition: transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94); }

/* Empty state */
.dp__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 24px;
  text-align: center;
}

.dp__empty-title { color: var(--onyx); }
.dp__empty-sub   { color: var(--on-surface-variant); }
.dp__empty-btn   { margin-top: 8px; }

/* ===== Responsive ===== */
@media (max-width: 1100px) {
  .dp__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 960px) {
  /* Hide static sidebar, show filter button */
  .dp__layout {
    grid-template-columns: 1fr;
  }

  .dp__filter-btn { display: flex; }

  /* Sidebar becomes a fixed drawer */
  .dp__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100dvh;
    max-height: none;
    overflow-y: auto;
    background: var(--ivory);
    z-index: 900;
    transform: translateX(-100%);
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
    padding: 40px 32px 40px;
  }

  .dp__sidebar--open { transform: translateX(0); }
  .dp__sidebar-head  { display: flex; }
  .dp__sidebar-apply { display: block; }
}

@media (max-width: 600px) {
  .dp__grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .dp__title { font-size: 40px; }

  .dp__toolbar { gap: 12px; }
  .dp__toolbar-left { order: 2; }
  .dp__toolbar-right { order: 1; width: 100%; justify-content: space-between; }
}

@media (max-width: 420px) {
  .dp__grid { grid-template-columns: 1fr; max-width: 320px; margin: 0 auto; }
}
</style>
