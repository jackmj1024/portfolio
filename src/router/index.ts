/**
 * index.ts
 * Handle redirects from URL paths to different pages.
 */

import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Apollo from '../views/projects/Apollo.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/apollo', component: Apollo },
    { path: '/:catchAll(.*)*', component: NotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
