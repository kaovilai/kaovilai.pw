<template>
  <button class="disaster-btn" type="button" :disabled="phase !== 'idle'" @click="run">
    <span aria-hidden="true">⚠</span> simulate disaster
  </button>
  <Teleport to="body">
    <div v-if="phase === 'restore' || phase === 'done'" class="restore-overlay" role="status" aria-live="polite">
      <div class="restore-panel">
        <p class="restore-title">{{ phase === 'done' ? '✓ restore complete' : '⚠ DISASTER DETECTED' }}</p>
        <p class="restore-sub">{{ phase === 'done' ? '0 bytes lost. as always.' : 'restoring from snapshot…' }}</p>
        <div class="restore-bar" aria-hidden="true">
          <div class="restore-bar-fill" :class="{ full: phase === 'done' }"></div>
        </div>
        <ul class="restore-log">
          <li v-for="(line, i) in log" :key="i">{{ line }}</li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

type Phase = 'idle' | 'glitch' | 'restore' | 'done'

const LOG_LINES = [
  'snapshot found: tiger-2026-07-29T00:00Z',
  'velero restore create --from-backup site-latest',
  'restoring sections… ok',
  'verifying checksums… ok'
]

const phase = ref<Phase>('idle')
const log = ref<string[]>([])
const timers: number[] = []

const later = (fn: () => void, ms: number) => {
  timers.push(window.setTimeout(fn, ms))
}

function run() {
  if (phase.value !== 'idle') return
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) {
    log.value = [...LOG_LINES]
    phase.value = 'done'
    later(reset, 2400)
    return
  }
  phase.value = 'glitch'
  document.body.classList.add('disaster')
  later(() => {
    document.body.classList.remove('disaster')
    phase.value = 'restore'
    log.value = []
    LOG_LINES.forEach((line, i) => {
      later(() => log.value.push(line), 350 * (i + 1))
    })
    later(() => {
      phase.value = 'done'
      later(reset, 1600)
    }, 1900)
  }, 1200)
}

function reset() {
  phase.value = 'idle'
  log.value = []
}

onUnmounted(() => {
  timers.forEach(clearTimeout)
  document.body.classList.remove('disaster')
})
</script>
