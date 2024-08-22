import { createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppSearch from './pages/AppSearch.vue';
import Error404 from './pages/errors/Error404.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/search',
            name: 'search',
            component: AppSearch
        },
        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/404',
            name: '404-not-found',
            component: Error404
        },
    ]
});

export { router };