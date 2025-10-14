/**
 * index.ts
 * Handle redirects from URL paths to different pages.
 */

import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/:catchAll(.*)*', component: NotFound },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
