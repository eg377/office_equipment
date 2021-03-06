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
const officeDetailView = () => import ('@/views/office/officeDetail.vue')
const equipmentList = () => import ('@/views/equipment/equipments.vue')
const equipmentByOffice = () => import ('@/views/equipment/equipmentByOffice.vue')
const equipmentEditView = () => import ('@/views/equipment/equipmentEdit.vue')
const equipmentDetailView = () => import ('@/views/equipment/equipmentDetail.vue')
const userListView = () => import ('@/views/user/userList.vue')
const userEditView = () => import ('@/views/user/userEdit.vue')
const dashboard1 = () => import ('@/views/report/DashboardV1.vue')

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
            path: '/users/register',
            name: 'registerUser',
            component: userEditView,
        },
        {
            path: '/main',
            name: 'main',      
            component: maingView,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '/offices',
            name: 'offices',      
            component: officeListView,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '/offices/new',
            name: 'addOffice',      
            component: officeEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }
        },
        {
            path: 'offices/edit/:id',
            name: 'editOffice',
            component: officeEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }
        },
        {
            path: '/office/details/:id',
            name: 'officeDetail',
            component: officeDetailView,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '/equipments',
            name: 'allEquipments',
            component: equipmentList,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '/equipments/:id',
            name: 'equipments',
            component: equipmentByOffice,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
            
        },
        {
            path: '/equipment/new',
            name: 'addEquipment',
            component: equipmentEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }
        },
        {
            path: '/equipment/new/:officeId',
            name: 'addEquipmentInOffice',
            component: equipmentEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }
        },
        {
            path: '/equipment/edit/:officeId',
            name: 'editEquipment',
            component: equipmentEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }
        },
        {
            path: '/equipment/details/:id',
            name: 'equipmentDetail',
            component: equipmentDetailView,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '/users',
            name: 'users',
            component: userListView,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '/users/new',
            name: 'addUser',
            component: userEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }
        },
        {
            path: '/user/edit/:id',
            name: 'editUser',
            component: userEditView,
            beforeEnter(to, from, next){
                next(AuthGuard.isManager(to));
            }   
        },           
        {
            path: '/report',
            name: 'report',
            component: dashboard1,
            beforeEnter(to, from, next){
                next(AuthGuard.isAuthenticated(to));
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
