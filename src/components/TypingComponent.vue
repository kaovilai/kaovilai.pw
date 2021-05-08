<template>
  <span>{{ underConstruction }}</span><span class="blinking">|</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        text: {
            type: String,
            default: ''
            
        }
    },
    data () {
        return {
            underConstruction:'',
        }
    },
    methods: {
            async underConstructionLoop () {
      let typingDelay = 100
      let excitementDelay = typingDelay * 20
      console.log("here we go")
      // let excitementDelay = typingDelay * 3
      if(this.underConstruction == ''){
        for(let i = 0; i < this.text.length; i++){
          this.underConstruction += this.text.charAt(i)
          await new Promise(r => setTimeout(r,typingDelay))
        }
        await new Promise(r => setTimeout(r,excitementDelay))
      } else {
        for(let i = 0; i < this.text.length; i++){
          this.underConstruction = this.underConstruction.substr(0,this.underConstruction.length - 1)
          await new Promise(r => setTimeout(r,typingDelay/2))
        }
      }
      this.underConstructionLoop()
    }
  },
  mounted (){
    this.underConstructionLoop()
  }
})
</script>

<style scoped>
</style>