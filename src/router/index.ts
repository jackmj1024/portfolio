/**
 * index.ts
 * Handle redirects from URL paths to different pages.
 */

import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

import Apollo from '../views/projects/Apollo.vue';
import NASAApp from '../views/projects/NASA.vue';
import Cthulhuson from '../views/projects/Cthulhuson.vue';
import Portfolio from '../views/projects/Portfolio.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/apollo', name: 'apollo', component: Apollo },
    { path: '/nasa', name: 'nasa', component: NASAApp },
    { path: '/cthulhuson', name: 'cthulhuson', component: Cthulhuson },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/:catchAll(.*)*', name: '404', component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,

    // Make sure pages open at the correct scroll position.
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
