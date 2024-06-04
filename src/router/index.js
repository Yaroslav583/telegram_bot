import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import PageOne from '../components/PageOne.vue';
import PageTwo from '../components/PageTwo.vue';
import PageThree from '../components/PageThree.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/page1', component: PageOne },
    { path: '/page2', component: PageTwo },
    { path: '/page3', component: PageThree },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;