/**
 * index.ts
 * Handle redirects from URL paths to different pages.
 */

import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
    { path: '/', component: Home },
    //    { path: '/about', component: AboutView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
