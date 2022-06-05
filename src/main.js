import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/base.css'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import CKEditor from '@ckeditor/ckeditor5-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast, { POSITION } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const options = {
  // You can set your default options here
  position: POSITION.TOP_CENTER,
  timeout: 2500
}

app.use(Toast, options)
app.use(VueAxios, axios)
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(plugin, defaultConfig)
app.use(CKEditor)

app.mount('#app')
