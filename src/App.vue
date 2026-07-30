<template>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="aurora" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"></div>
    <nav class="site-nav" aria-label="Site sections">
      <a class="nav-brand" href="#main-content" @click="brandTap">tiger@kaovilai.pw:~$</a>
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
    <div v-if="wolfActive" class="wolf-mode" aria-hidden="true">
      <span v-for="n in 24" :key="n" class="wolf-drop"
            :style="{ left: ((n * 41) % 100) + '%', animationDelay: (n % 8) * 0.15 + 's', animationDuration: (2 + (n % 5) * 0.4) + 's' }">🐺</span>
    </div>
    <div v-if="wolfActive" class="wolf-toast" role="status">🐺 GO PACK!</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
import RestoreDemo from './components/RestoreDemo.vue'

const sections = ['about', 'connect', 'toolbox', 'bucket-list', 'devices', 'projects', 'current-work', 'pay']
const activeSection = ref('')

// Wolf mode: Konami code on keyboard, or 5 quick taps on the nav brand.
const wolfActive = ref(false)
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
let konamiIdx = 0
let brandTaps: number[] = []

function goPack() {
  if (wolfActive.value) return
  wolfActive.value = true
  window.setTimeout(() => {
    wolfActive.value = false
  }, 4200)
}

function brandTap() {
  const now = Date.now()
  brandTaps = [...brandTaps.filter((t) => now - t < 2000), now]
  if (brandTaps.length >= 5) {
    brandTaps = []
    goPack()
  }
}

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    konamiIdx = e.key === KONAMI[konamiIdx] ? konamiIdx + 1 : e.key === KONAMI[0] ? 1 : 0
    if (konamiIdx === KONAMI.length) {
      konamiIdx = 0
      goPack()
    }
  })

  // Tab-away gag: the page "loses connection" while hidden and restores
  // from snapshot when you come back.
  const originalTitle = document.title
  let restoreTimer = 0
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.clearTimeout(restoreTimer)
      document.title = '⚠ connection lost — kaovilai.pw'
    } else {
      document.title = '✓ restored from snapshot'
      restoreTimer = window.setTimeout(() => {
        document.title = originalTitle
      }, 1500)
    }
  })

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

  // Fallback for browsers without CSS scroll-driven animations (Firefox):
  // one passive rAF-throttled listener drives the hue shift + progress bar vars.
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
