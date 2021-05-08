<template>
  <span>{{ underConstruction }}</span><span class="blinking">|</span><span v-if="keepWidth" style="visibility: hidden;">{{ widthString }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
      text: {
          type: String,
          default: ''
      },
      keepWidth: {
          type: Boolean,
          default: false
      }
  },
  data () {
      return {
          underConstruction:'',
          widthString: '',
      }
  },
  methods: {
    async underConstructionLoop () {
      let typingDelay = 100
      let excitementDelay = typingDelay * 80
      console.log("here we go")
      // let excitementDelay = typingDelay * 3
      if(this.underConstruction == ''){
        for(let i = 0; i < this.text.length; i++){
          this.underConstruction += this.text.charAt(i)
          if(this.keepWidth)
            this.widthString = this.widthString.substr(0,this.widthString.length - 1)
          await new Promise(r => setTimeout(r,typingDelay))
        }
        await new Promise(r => setTimeout(r,excitementDelay))
      } else {
        for(let i = 0; i < this.text.length; i++){
          this.underConstruction = this.underConstruction.substr(0,this.underConstruction.length - 1)
          if(this.keepWidth)
            this.widthString += this.underConstruction.charAt(this.underConstruction.length-1)
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