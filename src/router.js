import Vue from 'vue'
import Router from 'vue-router'

import {AuthGuard} from "./guards/AuthGuard";

// Layouts
//import Layout from '@/components/Layout/Layout'
//import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
//import LayoutPage from '@/components/Layout/LayoutPage'

const maingView = () => import ('@/views/landing/main.vue')
const loginView = () => import ('@/views/login/login.vue')
const officeListView = () => import ('@/views/office/officeList.vue')
const officeEditView = () => import ('@/views/office/officeEdit.vue')
const userListView = () => import ('@/views/user/userList.vue')
const userEditView = () => import ('@/views/user/userEdit.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'root',      
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',          
            component: loginView,
        },
        {
            path: '/main',
            name: 'main',      
            component: maingView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },
        {
            path: '/offices',
            name: 'offices',      
            component: officeListView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },
        {
            path: '/offices/new',
            name: 'addOffice',      
            component: officeEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },
        {
            path: 'offices/edit/:id',
            name: 'editOffice',
            component: officeEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },
        {
            path: '/userList',
            name: 'users',
            component: userListView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },
        {
            path: '/users/new',
            name: 'addUser',
            component: userEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },
        {
            path: '/user/edit/:id',
            name: 'editUser',
            component: userEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.canActivate(to));
            }
        },     
        {
            path: '*',
            redirect: '/'
        }
    ]
})
