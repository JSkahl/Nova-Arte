import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GeneratorView from '../views/GeneratorView.vue'
import HistoryView from '../views/HistoryView.vue'
import FavoriteView from '../views/FavoriteView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/generator',
            name: 'generator',
            component: GeneratorView

        },
        {
            path: '/history',
            name: 'history',
            component: HistoryView
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: FavoriteView
        }
    ]
})

export default router