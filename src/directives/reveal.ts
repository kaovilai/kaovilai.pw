import type { Directive } from 'vue'

// v-reveal: adds .reveal, then .is-revealed when the element scrolls into view.
// Reduced-motion or no-IO environments render revealed immediately.
export const reveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('reveal')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-revealed')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    io.observe(el)
  }
}
