<template>
  <span aria-live="polite" aria-atomic="true">{{ underConstruction }}</span><span v-if="notdone" aria-hidden="true" class="blinking" style="display: inline-flex; width: 0px;">|</span><span v-if="keepWidth" aria-hidden="true" style="visibility: hidden;">{{ widthString }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  keepWidth?: boolean
  typingDelay?: number
  deletingDelay?: number
  excitementDelay?: number
  once?: boolean
}>(), {
  text: '',
  keepWidth: false,
  typingDelay: 200,
  deletingDelay: 100,
  excitementDelay: 20000,
  once: false,
})

const underConstruction = ref('')
const widthString = ref('')
const notdone = ref(true)

/**
 * wait {delay} many milliseconds
 * Await the return value to get the intended effect
 * @param delay delay
 * @returns value to await to get the desired delay
 */
async function wait(delay: number) {
  return new Promise((r) => setTimeout(r, delay))
}

/**
 * Loop typing behavior
 * @param once make typing effect occur once
 */
async function underConstructionLoop(once = false) {
  for (let i = 0; i < props.text.length; i++) {
    if (props.keepWidth) {
      widthString.value = widthString.value.slice(0, -1)
    }
    underConstruction.value += props.text.charAt(i)
    await wait(props.typingDelay * Math.random())
  }
  // If once is true, do not continue recursion
  if (once) {
    notdone.value = false
    return
  }
  await wait(props.excitementDelay * Math.random())
  for (let i = 0; i < props.text.length; i++) {
    if (props.keepWidth) {
      widthString.value += underConstruction.value.charAt(underConstruction.value.length - 1)
    }
    underConstruction.value = underConstruction.value.slice(0, -1)
    await wait(props.deletingDelay * Math.random())
  }
  void underConstructionLoop()
}

onMounted(() => {
  if (props.text == '') {
    return
  }
  if (props.keepWidth) {
    widthString.value = props.text
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    underConstruction.value = props.text
    notdone.value = false
    return
  }
  void underConstructionLoop(props.once)
})
</script>

<style scoped>
</style>
