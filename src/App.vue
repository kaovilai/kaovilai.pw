<template>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <main id="main-content" tabindex="-1">
      <hello-world/>
    </main>
    <footer>
    <Footer />
    </footer>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
:root {
  /* Go Pack */
  --NCSU_Wolfpack_Red: #CC0000;
  --NCSU_Reynolds_Red: #990000;
  --NCSU_Pyroman_Flame: #D14905;
  --NCSU_Hunt_Yellow: #FAC800;
  --NCSU_Genomic_Green: #6F7D1C;
  --NCSU_Carmichael_Aqua: #008473;
  --NCSU_Innovation_Blue: #427E93;
  --NCSU_Bio-Indigo: #4156A1;
  --LINE_Green: #06c755;

  --filter-dropshadow: drop-shadow(1.1px 1.1px 1.1px grey);
  --sidemargin: 15px;
}
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--NCSU_Wolfpack_Red);
  color: #fff !important;
  border-bottom: none !important;
  padding: 0.5rem 1rem;
  z-index: 9999;
  font-weight: bold;
  border-radius: 0 0 5px 0;
}
.skip-link:focus {
  top: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #b6b6b6;
  margin-top: 60px;
}
body {
  background: linear-gradient(135deg,
    #0a0a0a 0%,
    #1a0a14 25%,
    #0d1117 50%,
    #0a1428 75%,
    #0a0a0a 100%);
  background-size: 400% 400%;
  animation: aiGradient 15s ease infinite;
  min-height: 100vh;
}

@keyframes aiGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#app a:any-link,
#app a:-webkit-any-link {
  color: var(--NCSU_Wolfpack_Red);
  text-decoration: none;
  border-bottom: 1.5px solid var(--NCSU_Wolfpack_Red);
  border-radius: 5px;
}
.blinking {
  animation-name: blink;
  animation-duration: .4s;
  animation-timing-function: cubic-bezier(1, .3, .3, 1);
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
@media (prefers-reduced-motion: reduce) {
  body {
    animation: none;
    background: #0d1117;
  }
  .blinking {
    animation: none;
    opacity: 1;
  }
}
</style>
