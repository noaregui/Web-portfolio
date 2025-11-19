import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Import Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ✅ Importar íconos de Material Design (ya que tu footer usa mdi-facebook, etc.)
import '@mdi/font/css/materialdesignicons.css'

// Crear instancia de Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(vuetify) // ✅ Registrar Vuetify

app.mount('#app')
