// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import SizingGuide from '../views/SizingGuide/SizingGuide.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pages/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/pages/size-guide',
        name: 'Contact',
        component: SizingGuide
    }
]

const router = createRouter({
    history: createWebHistory(), // history mode (no # in URL)
    routes
})

export default router
