<script setup>
import { ref } from 'vue'

const activeCategory = ref('pedidos')
const openItem = ref(null)

const categories = [
  { id: 'pedidos',    label: 'Pedidos & Rastreamento' },
  { id: 'trocas',     label: 'Trocas & Devoluções' },
  { id: 'producao',   label: 'Produção Sob Medida' },
  { id: 'cuidados',   label: 'Cuidados com a Peça' },
  { id: 'pagamento',  label: 'Pagamento & Faturamento' },
]

const faqs = {
  pedidos: [
    {
      q: 'Como rastrear meu pedido?',
      a: 'Após a confirmação de envio, você receberá um e-mail com o código de rastreamento dos Correios ou da transportadora. O prazo de atualização é de até 24h após a postagem.',
    },
    {
      q: 'Posso alterar o endereço de entrega após a confirmação?',
      a: 'Alterações de endereço são aceitas em até 2 horas após a confirmação do pedido. Entre em contato imediatamente pelo WhatsApp para solicitarmos a mudança junto à transportadora.',
    },
    {
      q: 'Qual o prazo de entrega para peças prontas?',
      a: 'Peças do estoque têm prazo de 5 a 10 dias úteis para todo o Brasil. Envios para Curitiba e Região Metropolitana podem ser retirados no atelier em até 2 dias úteis.',
    },
    {
      q: 'O que acontece se eu não estiver em casa no momento da entrega?',
      a: 'A transportadora tentará a entrega em até 3 vezes. Após isso, a peça ficará disponível para retirada na agência mais próxima por 7 dias corridos antes de ser devolvida ao atelier.',
    },
  ],
  trocas: [
    {
      q: 'Qual é a política de trocas do atelier?',
      a: 'Aceitamos trocas em até 7 dias corridos após o recebimento da peça, desde que esteja sem uso, com etiquetas originais e na embalagem original. Peças feitas sob medida não são elegíveis para devolução, apenas ajustes.',
    },
    {
      q: 'Como iniciar um processo de troca?',
      a: 'Entre em contato pelo e-mail atelier@manuparedes.com.br com o número do pedido, fotos da peça e o motivo da solicitação. Nossa equipe responderá em até 24h com as instruções de envio.',
    },
    {
      q: 'Quem arca com o custo de frete na troca?',
      a: 'Em casos de defeito de fabricação, o frete de retorno é por nossa conta. Para trocas por motivo estético (cor, preferência), o frete de retorno fica a cargo da cliente.',
    },
    {
      q: 'Peças feitas sob medida podem ser devolvidas?',
      a: 'Peças customizadas e feitas sob medida são exclusivas e não aceitamos devolução por desistência. Porém, oferecemos até 2 sessões de ajuste incluídas no valor para garantir o caimento perfeito.',
    },
  ],
  producao: [
    {
      q: 'Qual é o processo completo de uma peça sob medida?',
      a: 'O processo tem 4 etapas: (1) Consulta inicial para entender sua visão e tirar medidas; (2) Apresentação do esboço e aprovação dos tecidos e bordados; (3) Primeira prova; (4) Prova final e ajustes. Estimamos de 30 a 60 dias no total.',
    },
    {
      q: 'Posso trazer referências de fotos ou outros vestidos?',
      a: 'Absolutamente. Referências visuais são muito bem-vindas e nos ajudam a entender seu gosto. Você pode trazer imagens de revistas, redes sociais ou qualquer outro material que expresse o que você deseja.',
    },
    {
      q: 'Com quanto de antecedência devo encomendar minha peça?',
      a: 'Recomendamos no mínimo 3 meses de antecedência para eventos importantes como casamentos e formaturas. Para eventos em datas de alta temporada (novembro e dezembro), sugerimos 4 a 5 meses.',
    },
    {
      q: 'É possível fazer alterações no modelo após a aprovação do esboço?',
      a: 'Pequenas alterações são possíveis até a primeira prova sem custo adicional. Alterações estruturais após o início da confecção serão orçadas conforme a complexidade.',
    },
  ],
  cuidados: [
    {
      q: 'Como devo guardar meu vestido após o uso?',
      a: 'Recomendamos embalagem própria para vestidos (capa de tecido não-tecido), em cabide almofadado, em local fresco e seco, longe de luz direta. Nunca guarde em sacos plásticos, pois retêm umidade.',
    },
    {
      q: 'Posso lavar em casa peças com bordados e aplicações?',
      a: 'Não. Peças com bordados, pedrarias e aplicações delicadas devem ser levadas exclusivamente a lavanderias especializadas em couture. A lavagem inadequada pode comprometer bordados irreversivelmente.',
    },
    {
      q: 'Como remover manchas leves de uma peça delicada?',
      a: 'Para manchas recentes, tampe suavemente com um pano branco úmido sem esfregar. Não aplique produtos diretamente no tecido. Procure uma lavanderia especializada o quanto antes para tratamento profissional.',
    },
    {
      q: 'O atelier oferece serviço de restauração ou limpeza de peças antigas?',
      a: 'Sim, trabalhamos com parceiros especializados em restauração de Alta Costura. Entre em contato para uma avaliação. Casos especiais como vestidos de noiva de família são tratados com cuidado exclusivo.',
    },
  ],
  pagamento: [
    {
      q: 'Quais formas de pagamento são aceitas?',
      a: 'Aceitamos cartões de crédito (até 12x sem juros), PIX com 5% de desconto, e transferência bancária. Para peças sob medida, trabalhamos com 50% de entrada na aprovação do esboço e 50% na entrega.',
    },
    {
      q: 'O sinal pago na encomenda é reembolsável?',
      a: 'O sinal de 50% cobre os custos de materiais e mão-de-obra especializada que são adquiridos logo após a aprovação do esboço, portanto não é reembolsável em caso de desistência após esta etapa.',
    },
    {
      q: 'Emitem nota fiscal?',
      a: 'Sim, emitimos NF-e para todas as transações. A nota é enviada por e-mail junto com a confirmação do pedido.',
    },
    {
      q: 'Existe programa de fidelidade ou benefícios para clientes recorrentes?',
      a: 'Clientes que retornam para uma segunda peça recebem uma sessão de consultoria de estilo gratuita e prioridade de agenda. Também trabalhamos com lista de espera VIP para nossas coleções limitadas.',
    },
  ],
}

function toggle(i) {
  openItem.value = openItem.value === i ? null : i
}

function setCategory(id) {
  activeCategory.value = id
  openItem.value = null
}

const channels = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: '+55 (41) 9 9999-9999',
    note: 'Resposta em até 2h',
    href: 'https://wa.me/5541999999999',
  },
  {
    icon: 'email',
    label: 'E-mail',
    value: 'atelier@manuparedes.com.br',
    note: 'Resposta em até 24h',
    href: 'mailto:atelier@manuparedes.com.br',
  },
  {
    icon: 'clock',
    label: 'Horário de atendimento',
    value: 'Segunda–Sexta, 9h às 18h',
    note: 'Sáb com agendamento',
    href: null,
  },
]
</script>

<template>
  <main>

    <!-- 1 · Hero -->
    <section class="sp-hero" data-nav-dark>
      <div class="sp-hero__image-wrap">
        <img
          src="https://picsum.photos/seed/support-hero-manu/1440/900"
          alt=""
          aria-hidden="true"
          class="sp-hero__image"
        />
        <div class="sp-hero__overlay"></div>
      </div>

      <div class="sp-hero__content container">
        <div class="sp-hero__breadcrumb">
          <RouterLink to="/" class="label-caps sp-hero__bc-link">Início</RouterLink>
          <span class="sp-hero__bc-sep">—</span>
          <span class="label-caps sp-hero__bc-current">Suporte</span>
        </div>

        <div class="sp-hero__text">
          <span class="label-caps sp-hero__eyebrow">Central de Atendimento</span>
          <div class="hairline"></div>
          <h1 class="display-lg sp-hero__title">
            Estamos aqui<br>
            <em>para você</em>
          </h1>
          <p class="body-lg sp-hero__sub">
            Cada dúvida merece atenção. Encontre respostas ou fale diretamente com nossa equipe.
          </p>
        </div>
      </div>

      <div class="sp-hero__scroll-hint">
        <span class="label-caps sp-hero__scroll-label">Rolar</span>
        <div class="sp-hero__scroll-line"></div>
      </div>
    </section>

    <!-- 2 · Channels Strip -->
    <div class="sp-strip">
      <div class="container sp-strip__inner">
        <template v-for="(ch, idx) in channels" :key="ch.label">
          <component
            :is="ch.href ? 'a' : 'div'"
            v-bind="ch.href ? { href: ch.href, target: ch.icon === 'whatsapp' ? '_blank' : undefined, rel: ch.icon === 'whatsapp' ? 'noopener' : undefined } : {}"
            :class="['sp-strip__item', { 'sp-strip__item--nolink': !ch.href }]"
          >
            <!-- WhatsApp icon -->
            <svg v-if="ch.icon === 'whatsapp'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.05 2C6.495 2 2.04 6.455 2.04 12.01c0 1.775.465 3.44 1.278 4.879L2 22l5.294-1.287A9.924 9.924 0 0012.05 22c5.555 0 10.01-4.455 10.01-10.01C22.06 6.455 17.605 2 12.05 2z"/>
            </svg>
            <!-- Email icon -->
            <svg v-else-if="ch.icon === 'email'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <!-- Clock icon -->
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>

            <div class="sp-strip__item-text">
              <span class="label-caps sp-strip__item-label">{{ ch.label }}</span>
              <span class="body-md sp-strip__item-value">{{ ch.value }}</span>
              <span class="label-caps sp-strip__item-note">{{ ch.note }}</span>
            </div>
          </component>
          <div v-if="idx < channels.length - 1" class="sp-strip__divider"></div>
        </template>
      </div>
    </div>

    <!-- 3 · Support Cards -->
    <section class="sp-cards">
      <div class="container sp-cards__inner">
        <div class="sp-cards__header">
          <span class="label-caps sp-cards__eyebrow">Como podemos ajudar</span>
          <div class="hairline"></div>
          <h2 class="headline-lg sp-cards__title">
            Encontre a <em>resposta</em>
          </h2>
        </div>

        <div class="sp-cards__grid">
          <button
            v-for="cat in categories"
            :key="cat.id"
            :class="['sp-card', { 'sp-card--active': activeCategory === cat.id }]"
            @click="setCategory(cat.id)"
          >
            <div class="sp-card__marker"></div>
            <span class="body-md sp-card__label">{{ cat.label }}</span>
            <svg class="sp-card__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- 4 · FAQ Accordion -->
    <section class="sp-faq">
      <div class="container sp-faq__inner">

        <div class="sp-faq__sidebar">
          <span class="label-caps sp-faq__eyebrow">
            {{ categories.find(c => c.id === activeCategory)?.label }}
          </span>
          <div class="hairline"></div>
          <p class="body-md sp-faq__sidebar-hint">
            Selecione uma categoria acima para navegar pelas dúvidas.
          </p>

          <div class="sp-faq__contact-box">
            <span class="label-caps sp-faq__contact-box-label">Não encontrou?</span>
            <p class="body-md sp-faq__contact-box-text">
              Nossa equipe está disponível para responder qualquer dúvida personalizada.
            </p>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener"
              class="btn-primary sp-faq__contact-btn"
            >
              Falar pelo WhatsApp
            </a>
            <RouterLink to="/contato" class="sp-faq__contact-link body-md">
              ou enviar uma mensagem →
            </RouterLink>
          </div>
        </div>

        <div class="sp-faq__list">
          <Transition name="faq-list" mode="out-in">
            <div :key="activeCategory" class="sp-faq__items">
              <div
                v-for="(item, i) in faqs[activeCategory]"
                :key="i"
                class="sp-faq__item"
              >
                <button
                  class="sp-faq__question"
                  :aria-expanded="openItem === i"
                  @click="toggle(i)"
                >
                  <span class="sp-faq__q-num label-caps">0{{ i + 1 }}</span>
                  <span class="body-lg sp-faq__q-text">{{ item.q }}</span>
                  <svg
                    class="sp-faq__icon"
                    :class="{ 'sp-faq__icon--open': openItem === i }"
                    width="16" height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <Transition name="faq">
                  <div v-if="openItem === i" class="sp-faq__answer">
                    <p class="body-lg sp-faq__answer-text">{{ item.a }}</p>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
        </div>

      </div>
    </section>

    <!-- 5 · Policies Band -->
    <section class="sp-policies" data-nav-dark>
      <div class="sp-policies__bg-wrap">
        <img
          src="https://picsum.photos/seed/support-policy-manu/1440/700"
          alt=""
          aria-hidden="true"
          class="sp-policies__bg"
        />
        <div class="sp-policies__overlay"></div>
      </div>
      <div class="container sp-policies__inner">
        <div class="sp-policies__header">
          <span class="label-caps sp-policies__eyebrow">Nossos Compromissos</span>
          <div class="hairline"></div>
          <h2 class="display-lg sp-policies__title">Transparência<br><em>em tudo</em></h2>
        </div>

        <div class="sp-policies__grid">
          <div class="sp-policy">
            <span class="sp-policy__num label-caps">01</span>
            <h3 class="headline-md sp-policy__title">Qualidade Garantida</h3>
            <p class="body-md sp-policy__text">
              Cada peça passa por inspeção rigorosa antes do envio. Em caso de defeito comprovado, assumimos todos os custos de troca ou reparo.
            </p>
          </div>
          <div class="sp-policy">
            <span class="sp-policy__num label-caps">02</span>
            <h3 class="headline-md sp-policy__title">Privacidade Total</h3>
            <p class="body-md sp-policy__text">
              Suas medidas, preferências e informações pessoais são tratadas com absoluta discrição e nunca compartilhadas com terceiros.
            </p>
          </div>
          <div class="sp-policy">
            <span class="sp-policy__num label-caps">03</span>
            <h3 class="headline-md sp-policy__title">Prazos Respeitados</h3>
            <p class="body-md sp-policy__text">
              Cumprimos os prazos acordados. Em casos excepcionais de atraso, entramos em contato com antecedência e oferecemos alternativas.
            </p>
          </div>
          <div class="sp-policy">
            <span class="sp-policy__num label-caps">04</span>
            <h3 class="headline-md sp-policy__title">Suporte Pós-Venda</h3>
            <p class="body-md sp-policy__text">
              Nosso relacionamento não termina na entrega. Estamos disponíveis para dúvidas sobre cuidados e ajustes por até 6 meses após a compra.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6 · Final CTA -->
    <section class="sp-cta">
      <div class="container sp-cta__inner">
        <div class="sp-cta__text">
          <span class="label-caps sp-cta__eyebrow">Atendimento Exclusivo</span>
          <div class="hairline"></div>
          <h2 class="display-lg sp-cta__title">
            Ainda precisa<br>
            <em>de ajuda?</em>
          </h2>
          <p class="body-lg sp-cta__body">
            Nossa equipe está pronta para oferecer atendimento personalizado.
            Cada cliente merece atenção dedicada.
          </p>
        </div>
        <div class="sp-cta__actions">
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener"
            class="btn-primary sp-cta__btn"
          >
            WhatsApp Direto
          </a>
          <RouterLink to="/contato" class="btn-secondary btn-secondary--onyx sp-cta__btn">
            Enviar Mensagem
          </RouterLink>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* ===== Hero ===== */
.sp-hero {
  position: relative;
  height: 65vh;
  min-height: 520px;
  overflow: hidden;
}

.sp-hero::after,
.sp-strip::after,
.sp-cards::after,
.sp-faq::after,
.sp-policies::after {
  content: '';
  position: absolute;
  right: var(--margin-desktop);
  bottom: 0;
  left: var(--margin-desktop);
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(201, 168, 76, 0.72) 18%,
    var(--gold-leaf) 50%,
    rgba(201, 168, 76, 0.72) 82%,
    transparent 100%
  );
  pointer-events: none;
}

.sp-hero__image-wrap {
  position: absolute;
  inset: 0;
}

.sp-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  filter: brightness(0.44) contrast(1.12) sepia(0.18);
}

.sp-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    155deg,
    rgba(10, 10, 10, 0.65) 0%,
    rgba(10, 10, 10, 0.18) 55%,
    rgba(10, 10, 10, 0.72) 100%
  );
}

.sp-hero__content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 110px;
  padding-bottom: 72px;
}

.sp-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sp-hero__bc-link {
  color: rgba(250, 246, 240, 0.45);
  font-size: 10px;
  letter-spacing: 0.2em;
  transition: color 0.3s ease;
}
.sp-hero__bc-link:hover { color: var(--gold-leaf); }
.sp-hero__bc-sep { color: rgba(250, 246, 240, 0.2); font-size: 10px; }
.sp-hero__bc-current {
  color: var(--gold-leaf);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.sp-hero__text {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 560px;
}

.sp-hero__eyebrow { color: var(--gold-leaf); font-size: 11px; letter-spacing: 0.22em; }
.sp-hero__title { color: var(--ivory); }
.sp-hero__title em { font-style: italic; color: var(--champagne); }
.sp-hero__sub { color: rgba(250, 246, 240, 0.62); }

.sp-hero__scroll-hint {
  position: absolute;
  bottom: 40px;
  right: var(--margin-desktop);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.sp-hero__scroll-label {
  color: rgba(250, 246, 240, 0.32);
  font-size: 9px;
  letter-spacing: 0.28em;
}

.sp-hero__scroll-line {
  width: 0.5px;
  height: 40px;
  background: linear-gradient(to bottom, var(--gold-leaf), transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* ===== Channels Strip ===== */
.sp-strip {
  position: relative;
  background: var(--champagne);
}

.sp-strip__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
  gap: 0;
}

.sp-strip__item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  flex: 1;
  max-width: 300px;
  color: var(--onyx);
  transition: color 0.3s ease;
}

.sp-strip__item:not(.sp-strip__item--nolink):hover { color: var(--gold-leaf); }
.sp-strip__item svg { flex-shrink: 0; color: var(--gold-leaf); margin-top: 2px; }

.sp-strip__item-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.sp-strip__item-label {
  font-size: 9px;
  letter-spacing: 0.22em;
  color: var(--on-surface-variant);
}

.sp-strip__item-value { font-size: 13px; color: var(--onyx); }

.sp-strip__item-note {
  font-size: 9px;
  letter-spacing: 0.14em;
  color: var(--gold-leaf);
  opacity: 0.75;
}

.sp-strip__divider {
  width: 0.5px;
  height: 44px;
  background: rgba(201, 168, 76, 0.38);
  flex-shrink: 0;
  margin: 0 32px;
}

/* ===== Support Cards ===== */
.sp-cards {
  position: relative;
  padding: var(--section-gap) 0 0;
  background: var(--surface);
}

.sp-cards__inner {
  display: flex;
  flex-direction: column;
  gap: 52px;
}

.sp-cards__header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
}

.sp-cards__eyebrow { color: var(--gold-leaf); }
.sp-cards__title { color: var(--onyx); }
.sp-cards__title em { font-style: italic; color: var(--on-surface-variant); }

.sp-cards__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  border: 0.5px solid var(--outline-variant);
}

.sp-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  padding: 28px 24px 24px;
  background: none;
  border: none;
  border-right: 0.5px solid var(--outline-variant);
  cursor: pointer;
  text-align: left;
  transition: background 0.3s ease;
  overflow: hidden;
}

.sp-card:last-child { border-right: none; }
.sp-card:hover { background: var(--ivory); }

.sp-card--active {
  background: var(--onyx);
}

.sp-card__marker {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold-leaf);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.sp-card:hover .sp-card__marker,
.sp-card--active .sp-card__marker { transform: scaleX(1); }

.sp-card__label {
  font-size: 13px;
  line-height: 1.5;
  color: var(--onyx);
  transition: color 0.3s ease;
  font-weight: 400;
}

.sp-card--active .sp-card__label { color: var(--ivory); }
.sp-card:not(.sp-card--active):hover .sp-card__label { color: var(--onyx); }

.sp-card__arrow {
  color: var(--gold-leaf);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  align-self: flex-end;
}

.sp-card:hover .sp-card__arrow,
.sp-card--active .sp-card__arrow { transform: translateX(4px); }

/* ===== FAQ ===== */
.sp-faq {
  position: relative;
  padding: 72px 0 var(--section-gap);
  background: var(--surface);
}

.sp-faq__inner {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 80px;
  align-items: start;
}

.sp-faq__sidebar {
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sp-faq__eyebrow { color: var(--gold-leaf); font-size: 10px; letter-spacing: 0.2em; }

.sp-faq__sidebar-hint {
  color: var(--on-surface-variant);
  font-size: 13px;
  line-height: 1.65;
}

.sp-faq__contact-box {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  border: 0.5px solid var(--outline-variant);
  background: var(--ivory);
  margin-top: 8px;
}

.sp-faq__contact-box-label { color: var(--gold-leaf); font-size: 9px; letter-spacing: 0.2em; }

.sp-faq__contact-box-text {
  color: var(--on-surface-variant);
  font-size: 13px;
  line-height: 1.6;
}

.sp-faq__contact-btn {
  font-size: 11px;
  padding: 14px 20px;
  letter-spacing: 0.14em;
  text-align: center;
  display: block;
}

.sp-faq__contact-link {
  color: var(--on-surface-variant);
  font-size: 12px;
  text-align: center;
  transition: color 0.3s ease;
}
.sp-faq__contact-link:hover { color: var(--gold-leaf); }

/* FAQ Items */
.sp-faq__list { min-height: 200px; }

.sp-faq__items {
  display: flex;
  flex-direction: column;
}

.sp-faq__item {
  border-bottom: 0.5px solid var(--outline-variant);
}
.sp-faq__item:first-child { border-top: 0.5px solid var(--outline-variant); }

.sp-faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s ease;
}

.sp-faq__q-num {
  font-size: 9px;
  letter-spacing: 0.18em;
  color: var(--gold-leaf);
  opacity: 0.6;
  flex-shrink: 0;
  width: 24px;
}

.sp-faq__q-text {
  flex: 1;
  color: var(--onyx);
  font-size: 15px;
  line-height: 1.5;
}

.sp-faq__icon {
  flex-shrink: 0;
  color: var(--gold-leaf);
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.sp-faq__icon--open { transform: rotate(180deg); }

.sp-faq__answer { overflow: hidden; }

.sp-faq__answer-text {
  color: var(--on-surface-variant);
  font-size: 14px;
  line-height: 1.75;
  padding: 0 0 28px 44px;
}

/* Transitions */
.faq-list-enter-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.faq-list-leave-active { transition: opacity 0.18s ease; }
.faq-list-enter-from   { opacity: 0; transform: translateY(8px); }
.faq-list-leave-to     { opacity: 0; }

.faq-enter-active { transition: opacity 0.35s ease, max-height 0.4s ease; max-height: 300px; }
.faq-leave-active { transition: opacity 0.2s ease, max-height 0.3s ease; max-height: 300px; }
.faq-enter-from   { opacity: 0; max-height: 0; }
.faq-leave-to     { opacity: 0; max-height: 0; }

/* ===== Policies Band ===== */
.sp-policies {
  position: relative;
  overflow: hidden;
}

.sp-policies__bg-wrap {
  position: absolute;
  inset: 0;
}

.sp-policies__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
  filter: brightness(0.22) contrast(1.1) sepia(0.22);
}

.sp-policies__overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.72);
}

.sp-policies__inner {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.sp-policies__header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 480px;
}

.sp-policies__eyebrow { color: var(--gold-leaf); }
.sp-policies__title { color: var(--ivory); }
.sp-policies__title em { font-style: italic; color: var(--champagne); }

.sp-policies__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 0.5px solid rgba(201, 168, 76, 0.25);
  border-left: 0.5px solid rgba(201, 168, 76, 0.25);
}

.sp-policy {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 36px;
  border-right: 0.5px solid rgba(201, 168, 76, 0.25);
  border-bottom: 0.5px solid rgba(201, 168, 76, 0.25);
}

.sp-policy__num {
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--gold-leaf);
  opacity: 0.55;
}

.sp-policy__title {
  color: var(--ivory);
  font-size: 18px;
}
.sp-policy__title em { font-style: italic; }

.sp-policy__text {
  color: rgba(250, 246, 240, 0.52);
  font-size: 13px;
  line-height: 1.72;
}

/* ===== Final CTA ===== */
.sp-cta {
  padding: var(--section-gap) 0;
  background: var(--surface);
}

.sp-cta__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 80px;
  align-items: center;
}

.sp-cta__text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 520px;
}

.sp-cta__eyebrow { color: var(--gold-leaf); }
.sp-cta__title { color: var(--onyx); }
.sp-cta__title em { font-style: italic; color: var(--on-surface-variant); }
.sp-cta__body { color: var(--on-surface-variant); }

.sp-cta__actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;
  min-width: 220px;
}

.sp-cta__btn {
  text-align: center;
  font-size: 12px;
  padding: 16px 28px;
  letter-spacing: 0.15em;
}

/* ===== Responsive ===== */
@media (max-width: 1200px) {
  .sp-cards__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .sp-policies__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .sp-faq__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .sp-faq__sidebar { position: static; }

  .sp-cta__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .sp-cta__actions { flex-direction: row; min-width: auto; }
}

@media (max-width: 768px) {
  .sp-hero::after,
  .sp-strip::after,
  .sp-cards::after,
  .sp-faq::after,
  .sp-policies::after {
    right: var(--margin-mobile);
    left: var(--margin-mobile);
  }

  .sp-hero { height: 58vh; }
  .sp-hero__scroll-hint { display: none; }

  .sp-strip__inner {
    flex-wrap: wrap;
    gap: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .sp-strip__item { min-width: 200px; max-width: none; }
  .sp-strip__divider { display: none; }

  .sp-cards__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sp-policies__grid {
    grid-template-columns: 1fr;
  }

  .sp-cta__actions { flex-direction: column; }
}

@media (max-width: 540px) {
  .sp-cards__grid { grid-template-columns: 1fr; }
  .sp-faq__answer-text { padding-left: 0; }
}
</style>
