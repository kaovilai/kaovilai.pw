<template>
  <span>{{ underConstruction }}</span><span v-if="notdone" class="blinking">|</span><span v-if="keepWidth" style="visibility: hidden;">{{ widthString }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
      text: { type: String, default: '' },
      keepWidth: { type: Boolean, default: false },
      typingDelay: { type:Number, default:200 },
      // defines how fast to delete text
      deletingDelay: { type:Number, default:100 },
      // defines how long to wait at the full text state before deleting begins
      excitementDelay: { type:Number, default:20000 },
      once: { type:Boolean, default:false },
  },
  data () {
      return {
          underConstruction:'',
          widthString: '',
          notdone: true,
      }
  },
  methods: {
    /**
     * wait {delay} many milliseconds
     * Await the return value to get the intended effect
     * @param delay delay
     * @returns value to await to get the desired delay
     */
    async wait(delay:number){
      return new Promise(r => setTimeout(r,delay))
    },
    /**
     * Loop typing behavior
     * @param once make typing effect occur once
     */
    async underConstructionLoop (once=false) {
      for(let i = 0; i < this.text.length; i++){
        if(this.keepWidth)
          this.widthString = this.widthString.substr(0,this.widthString.length - 1)
        this.underConstruction += this.text.charAt(i)
        await this.wait(this.typingDelay*Math.random())
      }
      // If once is true, do not continue recursion
      if(once){
        this.notdone = false
        return
      }
      await this.wait(this.excitementDelay*Math.random())
      for(let i = 0; i < this.text.length; i++){
        if(this.keepWidth)
          this.widthString += this.underConstruction.charAt(this.underConstruction.length-1)
        this.underConstruction = this.underConstruction.substr(0,this.underConstruction.length - 1)
        await this.wait(this.deletingDelay*Math.random())
      }
      this.underConstructionLoop()
    }
  },
  mounted (){
    if(this.text == '')
      return
    this.underConstructionLoop(this.once)
  }
})
</script>

<style scoped>
</style>