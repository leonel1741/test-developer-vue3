import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MoviesList from '../views/MoviesList.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: MoviesList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;