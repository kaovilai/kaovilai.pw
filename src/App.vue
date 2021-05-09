<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css">
    <hello-world/>
    <footer>
    <Footer />
    </footer>
</template>

<script>
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: { Footer, HelloWorld },
}
</script>

<style>
:root {
  /* Go Pack */
  --NCSU_Wolfpack_Red: #CC0000;
  --NCSU_Reynolds_Red: #990000;
  --NCSU_Pyroman_Flame: #D14905;
  --NCSU_Reynolds_Red: #990000;
  --NCSU_Hunt_Yellow: #FAC800;
  --NCSU_Genomic_Green: #6F7D1C;
  --NCSU_Carmichael_Aqua: #008473;
  --NCSU_Innovation_Blue: #427E93;
  --NCSU_Bio-Indigo: #4156A1;
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
  background-color: black;
}
#app a:-webkit-any-link {
  color: var(--NCSU_Wolfpack_Red);
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
</style>
