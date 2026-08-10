<template>
      <p class="footer-status"><span class="footer-dot" aria-hidden="true">●</span> restored from snapshot · 0 bytes lost · uptime {{ uptime }}</p>
      <p>Powered by
            <abbr title="Vue.js"><i aria-hidden="true" class="devicon-vuejs-plain colored"></i><span class="sr-only">Vue.js</span></abbr>
            <abbr title="TypeScript"><i aria-hidden="true" class="devicon-typescript-plain colored"></i><span class="sr-only">TypeScript</span></abbr>
            <abbr title="Ubuntu"><i aria-hidden="true" class="devicon-ubuntu-plain colored"></i><span class="sr-only">Ubuntu</span></abbr>
            <abbr title="Vite"><i aria-hidden="true" class="devicon-vitejs-plain colored"></i><span class="sr-only">Vite</span></abbr>
            <abbr title="NPM"><i aria-hidden="true" class="devicon-npm-original-wordmark colored"></i><span class="sr-only">NPM</span></abbr>
            <abbr title="GitHub"><i aria-hidden="true" class="devicon-github-original"></i><span class="sr-only">GitHub</span></abbr>
      </p>
      <p><a href="https://github.com/kaovilai/kaovilai.pw">See this code on GitHub!</a></p>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const uptime = ref('00:00:00')
let timer = 0
onMounted(() => {
  const t0 = performance.now()
  timer = window.setInterval(() => {
    const s = Math.floor((performance.now() - t0) / 1000)
    const hh = String(Math.floor(s / 3600)).padStart(2, '0')
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
    const ss = String(s % 60).padStart(2, '0')
    uptime.value = `${hh}:${mm}:${ss}`
  }, 1000)
})
onUnmounted(() => window.clearInterval(timer))
</script>

<style scoped>
i {
  margin: 0px 3px;
}
.footer-status {
  margin-top: 0;
}
.footer-dot {
  color: #3fb950;
}
</style>
