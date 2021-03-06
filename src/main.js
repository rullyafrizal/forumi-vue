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
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

const app = createApp(App)

const options = {
  // You can set your default options here
  position: POSITION.TOP_CENTER,
  timeout: 2100
}

Sentry.init({
  app,
  dsn: 'https://876f6ce10db54412a87093eabf2136b1@o1069250.ingest.sentry.io/6477321',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['https://forumi.my.id', /^\//]
    })
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

app.use(Toast, options)
app.use(VueAxios, axios)
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(plugin, defaultConfig)
app.use(CKEditor)
app.use(VueLoading)

if (!localStorage.getItem('forumi-query-params')) {
  localStorage.setItem('forumi-query-params',
    JSON.stringify({ _currentPage: 1, _currentPageDashboard: 1, _search: '' })
  )
}

app.mount('#app')
