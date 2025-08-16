// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import SizingGuide from '../views/SizingGuide/SizingGuide.vue'
import NotFound from '../views/NotFound.vue'
import { ROUTES_LIST } from './routes.enum'

const routes = [
    {
        path: ROUTES_LIST.HOME,
        name: 'Home',
        component: Home
    },
    {
        path: ROUTES_LIST.ABOUT_US,
        name: 'About',
        component: About
    },
    {
        path: ROUTES_LIST.CONTACT_US,
        name: 'Contact',
        component: Contact
    },
    {
        path: ROUTES_LIST.SIZING_GUIDE,
        name: 'Sizing Guide',
        component: SizingGuide
    },

    {
        path: ROUTES_LIST.NOT_FOUND,
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router
