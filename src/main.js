import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/base.css'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import CKEditor from '@ckeditor/ckeditor5-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig)
app.use(CKEditor)

app.mount('#app')
