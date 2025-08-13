import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
// import 'vuetify/styles/main.sass'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.mount('#app')
