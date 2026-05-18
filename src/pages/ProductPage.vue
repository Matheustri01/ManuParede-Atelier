<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}

const allProducts = [
  {
    name: 'Vestido Íris',
    price: 'R$ 1.890',
    category: 'Casamentos',
    collection: 'Verão 2025',
    tag: 'Novo',
    seeds: ['dress-iris-mp', 'dress-iris-detail', 'dress-iris-side', 'dress-iris-back'],
    description: 'O Vestido Íris é uma criação delicada e atemporal, pensada para a mulher que celebra com elegância. Tecido fluido, corte impecável e acabamentos artesanais fazem de cada peça uma obra única. A silhueta evasê valoriza o corpo sem restringi-lo, criando um equilíbrio perfeito entre feminilidade e liberdade.',
    composition: '90% Seda natural · 10% Elastano\nForro: 100% Viscose\n\nLavagem a seco recomendada. Não torcer. Guardar em saco de tecido, em local seco e arejado, longe de luz direta.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Celeste',
    price: 'R$ 2.240',
    category: 'Casamentos',
    collection: 'Verão 2025',
    tag: 'Exclusivo',
    seeds: ['dress-celeste-mp', 'dress-celeste-detail', 'dress-celeste-side', 'dress-celeste-back'],
    description: 'Celeste evoca a grandiosidade do céu ao entardecer. Um vestido feito para os grandes momentos: bordados à mão, decote em V e cauda dramática compõem uma peça de impacto único. Cada ponto reflete horas de dedicação da nossa equipe de costureiras.',
    composition: '100% Chiffon de Seda\nForro: 100% Cetim\n\nLavagem a seco obrigatória. Guardar em saco de pano, longe da luz direta e da umidade.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Nuvem',
    price: 'R$ 2.850',
    category: 'Casamentos',
    collection: 'Verão 2025',
    tag: null,
    seeds: ['dress-nuvem-mp', 'dress-nuvem-detail', 'dress-nuvem-side', 'dress-nuvem-back'],
    description: 'A leveza é a assinatura do Vestido Nuvem. Camadas de organza criam volume sem peso, numa silhueta que dança a cada passo. Uma peça que transforma qualquer entrada numa cena inesquecível.',
    composition: '80% Organza de Seda · 20% Tule bordado\nForro: 100% Viscose\n\nLavagem a seco recomendada. Guardar em local ventilado, sem dobras acentuadas.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Aurora',
    price: 'R$ 1.650',
    category: 'Formaturas',
    collection: 'Verão 2025',
    tag: null,
    seeds: ['dress-aurora-mp', 'dress-aurora-detail', 'dress-aurora-side', 'dress-aurora-back'],
    description: 'Aurora nasce do primeiro raio de luz. Um vestido que ilumina quem o veste, com brilho sutil integrado ao tecido e silhueta evasê que valoriza todas as formas. A cor dourada suave reflete a luz de forma única em cada ângulo.',
    composition: '70% Crepe · 30% Lurex dourado\nForro: 100% Seda\n\nLavagem a seco recomendada. Não usar secadora ou ferro a vapor.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Seraphine',
    price: 'R$ 2.890',
    category: 'Formaturas',
    collection: 'Verão 2025',
    tag: 'Último',
    seeds: ['dress-seraphine-mp', 'dress-seraphine-detail', 'dress-seraphine-side', 'dress-seraphine-back'],
    description: 'Seraphine é majestade em forma de vestido. Bordado com cristais, espartilho estruturado e cauda removível oferecem versatilidade entre cerimônia e festa. Uma peça que conta uma história a cada brilho.',
    composition: '100% Mikado de Seda\nBordados: cristais austríacos e pérolas naturais\n\nLavagem a seco obrigatória. Armazenar deitado em caixa de tecido acolchoada.',
    delivery: 'Prazo de produção: 45 a 60 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Lumière',
    price: 'R$ 1.990',
    category: 'Formaturas',
    collection: 'Verão 2025',
    tag: 'Novo',
    seeds: ['dress-lumiere-mp', 'dress-lumiere-detail', 'dress-lumiere-side', 'dress-lumiere-back'],
    description: 'Lumière traduz luz em tecido. Plissados verticais criam movimento hipnótico, enquanto o decote assimétrico traz modernidade a uma silhueta clássica. Para a formanda que quer ser lembrada.',
    composition: '95% Georgette de Seda · 5% Elastano\nForro: 100% Viscose\n\nLavagem a seco recomendada. Não torcer. Secar à sombra.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Onyx',
    price: 'R$ 1.450',
    category: 'Festas & Coquetéis',
    collection: 'Coleção Permanente',
    tag: null,
    seeds: ['dress-onyx-mp', 'dress-onyx-detail', 'dress-onyx-side', 'dress-onyx-back'],
    description: 'Onyx é poder em estado puro. Preto absoluto, corte bodycon e fenda lateral estratégica: um vestido para quem entra e faz a sala parar. O acabamento cetinado reflete a luz com precisão cirúrgica.',
    composition: '85% Cetim de Seda · 15% Poliamida\nForro: 100% Viscose\n\nLavagem a seco recomendada. Guardar pendurado em cabide acolchoado.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Garnet',
    price: 'R$ 1.780',
    category: 'Festas & Coquetéis',
    collection: 'Coleção Permanente',
    tag: 'Exclusivo',
    seeds: ['dress-garnet-mp', 'dress-garnet-detail', 'dress-garnet-side', 'dress-garnet-back'],
    description: 'A cor do vinho envelhecido, a textura aveludada e um decote que revela o essencial. Garnet é a escolha da mulher que sabe que elegância é sobre como você se sente, não sobre o quanto você mostra.',
    composition: '100% Veludo de Seda\nForro: 100% Cetim\n\nLavagem a seco obrigatória. Escovar suavemente no sentido do pelo antes de guardar.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Perle',
    price: 'R$ 2.120',
    category: 'Festas & Coquetéis',
    collection: 'Coleção Permanente',
    tag: null,
    seeds: ['dress-perle-mp', 'dress-perle-detail', 'dress-perle-side', 'dress-perle-back'],
    description: 'Inspirado na opacidade sedosa de uma pérola, Perle combina off-white com bordados discretos em fio dourado. Coquetel, jantar ou gala — ele transita com igual elegância em qualquer ambiente.',
    composition: '90% Crepe de Chine · 10% Seda\nBordados em fio de ouro\n\nLavagem a seco recomendada. Guardar avesso em saco de tecido.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Eden',
    price: 'R$ 3.200',
    category: 'Coleção Permanente',
    collection: 'Coleção Permanente',
    tag: 'Atemporal',
    seeds: ['dress-eden-mp', 'dress-eden-detail', 'dress-eden-side', 'dress-eden-back'],
    description: 'Eden é a peça que ficará para sempre no seu guarda-roupa e na sua memória. Corte clássico, tecido nobre e detalhes que revelam a maestria da costura artesanal. Uma peça herdada, não apenas comprada.',
    composition: '100% Seda Dupioni\nForro: 100% Seda\n\nLavagem a seco obrigatória. A peça da sua vida merece o cuidado máximo — confie a profissionais especializados.',
    delivery: 'Prazo de produção: 45 a 60 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Valence',
    price: 'R$ 2.650',
    category: 'Coleção Permanente',
    collection: 'Coleção Permanente',
    tag: null,
    seeds: ['dress-valence-mp', 'dress-valence-detail', 'dress-valence-side', 'dress-valence-back'],
    description: 'Valence carrega a sofisticação francesa na sua essência. Plissado clássico, cor nude caramelizada e corte em A formam uma silhueta que nunca sai de moda e nunca deixa de impressionar.',
    composition: '100% Georgette Plissado\nForro: 100% Viscose\n\nLavagem a seco recomendada. Armazenar dobrado sobre papel de seda.',
    delivery: 'Prazo de produção: 30 a 45 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
  {
    name: 'Vestido Marcella',
    price: 'R$ 2.980',
    category: 'Coleção Permanente',
    collection: 'Coleção Permanente',
    tag: 'Atemporal',
    seeds: ['dress-marcella-mp', 'dress-marcella-detail', 'dress-marcella-side', 'dress-marcella-back'],
    description: 'Marcella é uma declaração de estilo. Bordados florais tridimensionais, manga três-quartos e linha do corpo que abraça sem apertar. Para a mulher que nunca passa despercebida e que sabe exatamente o efeito que causa.',
    composition: '85% Linho italiano · 15% Algodão\nBordados 3D em seda orgânica\n\nLavagem a seco recomendada. Passar a ferro levemente pelo avesso, nunca sobre os bordados.',
    delivery: 'Prazo de produção: 45 a 60 dias úteis após confirmação do pagamento.\n\nEnvio para todo o Brasil via transportadora especializada. Frete calculado no checkout.\n\nTrocas aceitas em até 7 dias após o recebimento, mediante análise e aprovação da peça.',
  },
]

const product = computed(() =>
  allProducts.find(p => slugify(p.name) === route.params.slug) ?? allProducts[0]
)

const images = computed(() =>
  product.value.seeds.map(seed => `https://picsum.photos/seed/${seed}/800/1200`)
)

const selectedSize = ref(null)
const activePhoto = ref(0)
const openSection = ref('descricao')
const sizes = ['PP', 'P', 'M', 'G', 'GG', 'Sob Medida']

const details = computed(() => [
  { id: 'descricao',  label: 'Descrição',              content: product.value.description },
  { id: 'composicao', label: 'Composição & Cuidados',  content: product.value.composition },
  { id: 'entrega',    label: 'Entrega & Devolução',     content: product.value.delivery },
])

function toggleSection(id) {
  openSection.value = openSection.value === id ? null : id
}

watch(() => route.params.slug, () => {
  selectedSize.value = null
  activePhoto.value = 0
  openSection.value = 'descricao'
})
</script>

<template>
  <main class="pd">

    <!-- Breadcrumb -->
    <nav class="pd-crumb">
      <div class="pd-crumb__inner container">
        <RouterLink to="/" class="label-caps pd-crumb__link">Início</RouterLink>
        <span class="pd-crumb__sep">—</span>
        <RouterLink to="/colecoes" class="label-caps pd-crumb__link">Coleções</RouterLink>
        <span class="pd-crumb__sep">—</span>
        <span class="label-caps pd-crumb__current">{{ product.name }}</span>
      </div>
    </nav>

    <!-- Body: Info + Gallery -->
    <div class="pd-body container">

      <!-- LEFT: Info Panel -->
      <aside class="pd-info">

        <div class="pd-info__header">
          <span class="label-caps pd-info__category">{{ product.category }}</span>
          <h1 class="pd-info__name">{{ product.name }}</h1>
          <span class="label-caps pd-info__collection">{{ product.collection }}</span>
        </div>

        <div class="pd-info__price-block">
          <span class="pd-info__price">{{ product.price }}</span>
          <span class="label-caps pd-info__price-note">Peça única · Costura artesanal</span>
        </div>

        <div class="pd-divider"></div>

        <!-- Size Selector -->
        <div class="pd-size">
          <div class="pd-size__row">
            <span class="label-caps pd-size__label">Tamanho</span>
            <a href="#" class="label-caps pd-size__guide">Guia de medidas →</a>
          </div>
          <div class="pd-size__grid">
            <button
              v-for="size in sizes"
              :key="size"
              :class="['pd-size__btn', { 'pd-size__btn--active': selectedSize === size }, { 'pd-size__btn--wide': size === 'Sob Medida' }]"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- CTA -->
        <div class="pd-actions">
          <button
            :class="['pd-actions__cart', { 'pd-actions__cart--ready': selectedSize }]"
            :disabled="!selectedSize"
          >
            <span class="pd-actions__cart-text">
              {{ selectedSize ? 'Adicionar ao Carrinho' : 'Selecione um Tamanho' }}
            </span>
            <span v-if="selectedSize" class="pd-actions__cart-arrow">→</span>
          </button>
          <a href="#" class="pd-actions__whatsapp label-caps">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.05 2C6.495 2 2.04 6.455 2.04 12.01c0 1.775.465 3.44 1.278 4.879L2 22l5.294-1.287A9.924 9.924 0 0012.05 22c5.555 0 10.01-4.455 10.01-10.01C22.06 6.455 17.605 2 12.05 2z"/>
            </svg>
            Consultar pelo WhatsApp
          </a>
        </div>

        <div class="pd-divider"></div>

        <!-- Accordion -->
        <div class="pd-accordion">
          <div v-for="section in details" :key="section.id" class="pd-accordion__item">
            <button
              class="pd-accordion__trigger"
              @click="toggleSection(section.id)"
              :aria-expanded="openSection === section.id"
            >
              <span class="label-caps pd-accordion__label">{{ section.label }}</span>
              <span :class="['pd-accordion__icon', { 'pd-accordion__icon--open': openSection === section.id }]">+</span>
            </button>
            <Transition name="acc">
              <div v-if="openSection === section.id" class="pd-accordion__body">
                <p class="body-md pd-accordion__text">{{ section.content }}</p>
              </div>
            </Transition>
            <div class="pd-accordion__rule"></div>
          </div>
        </div>

      </aside>

      <!-- RIGHT: Gallery -->
      <div class="pd-gallery">
        <div class="pd-gallery__main-wrap">
          <div class="pd-gallery__main">
            <Transition name="photo" mode="out-in">
              <img
                :key="activePhoto"
                :src="images[activePhoto]"
                :alt="`${product.name} — vista ${activePhoto + 1}`"
                class="pd-gallery__img"
              />
            </Transition>
            <span v-if="product.tag" class="pd-gallery__tag label-caps">{{ product.tag }}</span>
            <div class="pd-gallery__counter label-caps">
              {{ activePhoto + 1 }} / {{ images.length }}
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="pd-gallery__thumbs">
            <button
              v-for="(img, i) in images"
              :key="i"
              :class="['pd-gallery__thumb', { 'pd-gallery__thumb--active': activePhoto === i }]"
              @click="activePhoto = i"
              :aria-label="`Ver foto ${i + 1}`"
            >
              <img :src="img" :alt="`Miniatura ${i + 1}`" class="pd-gallery__thumb-img" />
            </button>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
/* ===== Page Shell ===== */
.pd {
  background: var(--surface);
  min-height: 100vh;
}

/* ===== Breadcrumb ===== */
.pd-crumb {
  background: var(--ivory);
  border-bottom: 0.5px solid var(--outline-variant);
  padding-top: 92px;
}

.pd-crumb__inner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 18px;
}

.pd-crumb__link {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--on-surface-variant);
  transition: color 0.25s ease;
}

.pd-crumb__link:hover { color: var(--gold-leaf); }

.pd-crumb__sep {
  color: rgba(10, 10, 10, 0.18);
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
}

.pd-crumb__current {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--gold-leaf);
}

/* ===== Body Layout ===== */
.pd-body {
  display: grid;
  grid-template-columns: 42fr 58fr;
  gap: 72px;
  padding-top: 56px;
  padding-bottom: 120px;
  align-items: start;
}

/* ===== Info Panel ===== */
.pd-info {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.pd-info__header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pd-info__category {
  font-size: 10px;
  letter-spacing: 0.26em;
  color: var(--gold-leaf);
}

.pd-info__name {
  font-family: 'Playfair Display', serif;
  font-size: 44px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--onyx);
}

.pd-info__collection {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: var(--on-surface-variant);
}

.pd-info__price-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pd-info__price {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  color: var(--onyx);
  letter-spacing: 0.02em;
}

.pd-info__price-note {
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--on-surface-variant);
}

.pd-divider {
  width: 100%;
  height: 0.5px;
  background: rgba(201, 168, 76, 0.25);
}

/* ===== Size Selector ===== */
.pd-size {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pd-size__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pd-size__label {
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--onyx);
}

.pd-size__guide {
  font-family: 'Montserrat', sans-serif;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  transition: color 0.25s ease;
}

.pd-size__guide:hover { color: var(--gold-leaf); }

.pd-size__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
}

.pd-size__btn {
  padding: 11px 6px;
  border: 0.5px solid var(--outline-variant);
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
  text-align: center;
}

.pd-size__btn:hover {
  border-color: var(--onyx);
  color: var(--onyx);
}

.pd-size__btn--active {
  border-color: var(--gold-leaf);
  color: var(--onyx);
  background: rgba(201, 168, 76, 0.06);
}

.pd-size__btn--wide {
  grid-column: 1 / -1;
  letter-spacing: 0.16em;
  font-size: 10px;
}

/* ===== CTA ===== */
.pd-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pd-actions__cart {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 17px 28px;
  background: var(--onyx);
  color: var(--ivory);
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;
}

.pd-actions__cart:disabled {
  background: var(--surface-dim);
  color: var(--on-surface-variant);
  cursor: not-allowed;
}

.pd-actions__cart--ready:hover {
  background: #1a1a1a;
}

.pd-actions__cart-arrow {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.pd-actions__cart--ready:hover .pd-actions__cart-arrow {
  transform: translateX(4px);
}

.pd-actions__whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 15px 28px;
  border: 0.5px solid var(--gold-leaf);
  color: var(--onyx);
  font-size: 11px;
  letter-spacing: 0.18em;
  transition: background 0.3s ease, color 0.3s ease;
}

.pd-actions__whatsapp:hover {
  background: var(--gold-leaf);
  color: var(--onyx);
}

/* ===== Accordion ===== */
.pd-accordion {
  display: flex;
  flex-direction: column;
}

.pd-accordion__item:first-child .pd-accordion__rule {
  display: none;
}

.pd-accordion__rule {
  height: 0.5px;
  background: rgba(201, 168, 76, 0.2);
  margin: 0;
}

.pd-accordion__item:first-child {
  border-top: 0.5px solid rgba(201, 168, 76, 0.2);
}

.pd-accordion__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  background: none;
  border: none;
  border-top: 0.5px solid rgba(201, 168, 76, 0.2);
  cursor: pointer;
  text-align: left;
}

.pd-accordion__item:first-child .pd-accordion__trigger {
  border-top: none;
}

.pd-accordion__label {
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--onyx);
  transition: color 0.25s ease;
}

.pd-accordion__trigger:hover .pd-accordion__label { color: var(--gold-leaf); }

.pd-accordion__icon {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: var(--gold-leaf);
  line-height: 1;
  transition: transform 0.35s cubic-bezier(0.77, 0, 0.175, 1);
  flex-shrink: 0;
}

.pd-accordion__icon--open {
  transform: rotate(45deg);
}

.pd-accordion__body {
  padding-bottom: 20px;
}

.pd-accordion__text {
  color: var(--on-surface-variant);
  font-size: 13px;
  line-height: 1.75;
  white-space: pre-line;
}

/* Accordion Transition */
.acc-enter-active,
.acc-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.acc-enter-from,
.acc-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ===== Gallery ===== */
.pd-gallery {
  display: flex;
  flex-direction: column;
}

.pd-gallery__main-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pd-gallery__main {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--champagne);
}

.pd-gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.97) sepia(0.06) contrast(1.02);
}

.pd-gallery__tag {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--gold-leaf);
  color: var(--onyx);
  padding: 6px 14px;
  font-size: 9px;
  letter-spacing: 0.22em;
  z-index: 2;
}

.pd-gallery__counter {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 9px;
  letter-spacing: 0.22em;
  color: rgba(250, 246, 240, 0.6);
  z-index: 2;
}

/* Photo Transition */
.photo-enter-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.photo-leave-active {
  transition: opacity 0.2s ease;
  position: absolute;
  inset: 0;
}

.photo-enter-from {
  opacity: 0;
  transform: scale(1.03);
}

.photo-leave-to {
  opacity: 0;
}

/* Thumbnails */
.pd-gallery__thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.pd-gallery__thumb {
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  aspect-ratio: 3/4;
  overflow: hidden;
  position: relative;
  outline: 1.5px solid transparent;
  outline-offset: -1.5px;
  transition: outline-color 0.25s ease;
}

.pd-gallery__thumb:hover {
  outline-color: rgba(201, 168, 76, 0.5);
}

.pd-gallery__thumb--active {
  outline-color: var(--gold-leaf);
}

.pd-gallery__thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.92) sepia(0.06);
  transition: filter 0.3s ease, transform 0.5s ease;
}

.pd-gallery__thumb:hover .pd-gallery__thumb-img,
.pd-gallery__thumb--active .pd-gallery__thumb-img {
  filter: brightness(1) sepia(0.04);
}

.pd-gallery__thumb:hover .pd-gallery__thumb-img {
  transform: scale(1.04);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .pd-body {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .pd-info {
    position: static;
    order: 2;
  }

  .pd-gallery {
    order: 1;
  }

  .pd-info__name {
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .pd-body {
    padding-top: 32px;
    padding-bottom: 80px;
    gap: 36px;
  }

  .pd-info__name {
    font-size: 30px;
  }

  .pd-size__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .pd-size__btn--wide {
    grid-column: 1 / -1;
  }
}
</style>
