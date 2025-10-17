/**
 * index.ts
 * Handle redirects from URL paths to different pages.
 */

import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Apollo from '../views/projects/Apollo.vue';
import NASAApp from '../views/projects/NASA.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/apollo', name: 'apollo', component: Apollo },
    { path: '/nasa', name: 'nasa', component: NASAApp },
    { path: '/:catchAll(.*)*', name: '404', component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from) {
        if (to.name === "home" && from.name && from.name !== '404') {
            return {
                el: '#projects',
                behavior: 'smooth',
                top: 32
            }
        }

        return { top: 0 }
    }
});
