import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound';
import MainList from './pages/MainList';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/goods'},
        {path: '/goods', component: MainList},
        {path: '/:notFound(.*)', component: NotFound},
    ]
});

export default router;