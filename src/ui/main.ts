import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import type { ToastContainerOptions } from 'vue3-toastify'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';



const vuetify = createVuetify({
    components,
    directives,
})
const toastifyProperties = (
    {
        hideProgressBar: true,
        transition: "flip",
        dangerouslyHTMLString: true,
        autoClose: 5000,
        style: {
            opacity: '1',
            userSelect: 'initial',
        },
    } as ToastContainerOptions);

const app = createApp(App)
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(Vue3Toastify, toastifyProperties);
app.mount('#app')
