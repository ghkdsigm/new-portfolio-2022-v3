import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import magicmouse from "magicmouse.js";
import swal from 'sweetalert'

createApp(App).use(magicmouse).use(router).use(store).mount('#app')
