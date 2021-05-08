<template>
  <div class="hello">
    <h1 style="background: var(--NCSU_Reynolds_Red)">{{ title }}{{ underConstruction }} <b class="blinking">|</b></h1>
    <a href="http://kaovilai.pw"><p>Learn more about me</p></a>
    <div class="displayArea">
      <div class="introArea">

      </div>
    </div>
    <div class="walletArea">
      <h2 style="
  transform: rotate(180deg);
  writing-mode: tb;
  text-align: end;
  margin-top: 10%;
  ">My wallet</h2>
      <iframe style="height: 100vh; border: none; margin-left: -30px;" src="https://github.tig.pw/blog.tig.pw/cardstackiframe.html"></iframe>
    </div>
    <h2>Essential Links</h2>
    <!-- <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul> -->
    <h2>Projects</h2>
    <!-- <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: 'HelloWorld',
  data () {
    return {
      title: 'Hey there',
      underConstruction: '',
      underConstructionTxt: ' -- Under Construction'
    }
  },
  methods: {
    underConstructionLoop () {
      
    }
  },
  mounted: () => {
    
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.displayArea{
  width: 100%;
  height: 100%;

}
.walletArea {
  position: fixed;
  display: flex;
  left: calc(100vw - 100px);

  transition: .5s;
  transition-timing-function: ease-in-out;
}
.walletArea:hover {
  left: calc(100vw - 337px);
}
</style>
