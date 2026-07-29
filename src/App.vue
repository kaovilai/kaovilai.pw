<template>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="aurora" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"></div>
    <nav class="site-nav" aria-label="Site sections">
      <a class="nav-brand" href="#main-content">tiger@kaovilai.pw:~$</a>
      <div class="nav-links">
        <a v-for="s in sections" :key="s" :href="'#' + s"
           :aria-current="activeSection === s ? 'true' : undefined"
           :class="{ 'nav-active': activeSection === s }">{{ s }}</a>
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
import { onMounted, ref } from 'vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
import RestoreDemo from './components/RestoreDemo.vue'

const sections = ['about', 'connect', 'toolbox', 'bucket-list', 'devices', 'projects', 'pay']
const activeSection = ref('')

// Fallback for browsers without CSS scroll-driven animations (Firefox):
// one passive rAF-throttled listener drives the hue shift + progress bar vars.
onMounted(() => {
  // Scroll-spy: aria-current on the nav link whose section crosses the
  // middle band of the viewport.
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeSection.value = entry.target.id
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })
  }

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
