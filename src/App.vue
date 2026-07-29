<template>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="aurora" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"></div>
    <nav class="site-nav" aria-label="Site sections">
      <a class="nav-brand" href="#main-content">tiger@kaovilai.pw:~$</a>
      <div class="nav-links">
        <a href="#about">about</a>
        <a href="#connect">connect</a>
        <a href="#toolbox">toolbox</a>
        <a href="#bucket-list">bucket-list</a>
        <a href="#devices">devices</a>
        <a href="#projects">projects</a>
        <a href="#pay">pay</a>
      </div>
      <restore-demo />
    </nav>
    <main id="main-content" tabindex="-1">
      <hello-world/>
    </main>
    <footer class="site-footer">
    <Footer />
    </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
import RestoreDemo from './components/RestoreDemo.vue'

// Fallback for browsers without CSS scroll-driven animations (Firefox):
// one passive rAF-throttled listener drives the hue shift + progress bar vars.
onMounted(() => {
  const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (supportsScrollTimeline || reducedMotion) return

  let ticking = false
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? window.scrollY / max : 0
    document.documentElement.style.setProperty('--hue', String(25 - 55 * p))
    document.documentElement.style.setProperty('--scroll-p', String(p))
    ticking = false
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    },
    { passive: true }
  )
  update()
})
</script>
