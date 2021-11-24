import VueRouter from 'vue-router'

import MainLayout from './components/MainLayout';
import Home from './components/views/Home';
import CatalogLayout from './components/catalog/CatalogLayout';
import CartLayout from './components/catalog/CartLayout';
import Registr from './components/views/registratsiya/Registr';

export default new VueRouter({
    mode: 'history',
    routes :[
        {
            path: '/',
            component: MainLayout,
            name: 'main-layout',
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/catalog-layout',
                    name: 'catalog-layout',
                    component: CatalogLayout
                },
                {
                    path: '/cart-layout',
                    name: 'cart-layout',
                    component: CartLayout,
                    props: true
                },
                {
                    path: '/registr',
                    name:'registr',
                    component: Registr
                }
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            redirect: { name: 'Dashboard' },
            component: () => import('./views/admin/Dashboard'),
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: () => import('./views/admin/Dashboard')
                }
            ]
        }
    ]
})