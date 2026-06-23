<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

let lenis
let rafId

onMounted(() => {
  lenis = new Lenis({
    duration: 0.35,
    easing: t => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 0.65,
    touchMultiplier: 0.85,
    overscroll: false,
  })

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  lenis?.destroy()
})
</script>

<template>
  <TheNavbar />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <TheFooter />
</template>

<style>
.page-enter-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
}
</style>
