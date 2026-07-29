import { createApp } from 'vue'
import App from './App.vue'
import './assets/theme.css'
import { reveal } from './directives/reveal'

createApp(App).directive('reveal', reveal).mount('#app')
