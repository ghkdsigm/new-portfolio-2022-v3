import { createRouter, createWebHistory} from 'vue-router'
import store from '../store/index'
import Home from '../pages/Home.vue'
import Works from '../pages/Works.vue'
import Career from '../pages/Career.vue'
import Info from '../pages/Info.vue'
import Contact from '../pages/Contact.vue'
import Study from '../pages/Study.vue'
//import Work01 from '../pages/works/Work01.vue'
//import Work02 from '../pages/works/Work02.vue'
import WorksDetailNew from '../pages/works/WorksDetailNew.vue'
import WorksDetailFront from '../pages/works/WorksDetailFront.vue'
import WorksDetailOperation from '../pages/works/WorksDetailOperation.vue'
import NotFound from '../pages/NotFound.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import StudyCreate from '../components/StudyCreate.vue'

//const newLocal = true
//const routes = [
    // { path: '/', name: 'home', component: Home, title: 'HOME', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    // { path: '/info', name: 'info', component: Info, title: 'INFOMATION', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    // { path: '/career', name: 'career', component: Career, title: 'CAREER', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    // { path: '/works', name: 'works', component: Works, title: 'WORKS', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    // { path: '/works/new/:contentId', name: 'worksDetailNew', component: WorksDetailNew, title: 'WORKSDETAILNEW', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
    // { path: '/works/operation/:contentId', name: 'worksDetailOperation', component: WorksDetailOperation, title: 'WORKSDETAILOPERATION', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
    // { path: '/works/frontend/:contentId', name: 'worksDetailFront', component: WorksDetailFront, title: 'WORKSDETAILFRONT', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
    // { path: '/works/work01', name: 'work01', component: Work01, title: 'WORK01', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
    // { path: '/works/work02', name: 'work02', component: Work02, title: 'WORK02', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
    // { 
    //     path: '/works', 
    //     name: 'works', 
    //     component: Works, 
    //     children:[
    //         {
    //             path:"/works/work01",
    //             name: 'work01', 
    //             component:Work01,
    //             title: 'WORK01', 
    //             meta: { isMenu: true, layout: 'SubLayout', requireAuth: true } 
    //         },
    //         {
    //             path:"/works/work02",
    //             name: 'work02', 
    //             component:Work02,
    //             title: 'WORK02', 
    //             meta: { isMenu: true, layout: 'SubLayout', requireAuth: true } 
    //         },
    //     ],
    //     title: 'WORKS', 
    //     icon: 'far fa-bell fa-fw text-2xl', 
    //     meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } 
    // },
    //{ path: '/study', name: 'study', component: Study, title: 'STUDY', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    //{ path: '/contact', name: 'contact', component: Contact, title: 'CONTACT', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    //{ path: '/loading', name: 'loading', component: Loading, title: 'LOADING', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true } },
//]

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home, title: 'HOME', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/info', name: 'info', component: Info, title: 'INFO', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/career', name: 'career', component: Career, title: 'CAREER', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/works', name: 'works', component: Works, title: 'WORKS', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/works/new/:contentId', name: 'worksDetailNew', component: WorksDetailNew, title: 'WORKSDETAILNEW', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
        { path: '/works/operation/:contentId', name: 'worksDetailOperation', component: WorksDetailOperation, title: 'WORKSDETAILOPERATION', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
        { path: '/works/frontend/:contentId', name: 'worksDetailFront', component: WorksDetailFront, title: 'WORKSDETAILFRONT', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
        //{ path: '/works/work01', name: 'work01', component: Work01, title: 'WORK01', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
        //{ path: '/works/work02', name: 'work02', component: Work02, title: 'WORK02', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
        { path: '/study', name: 'study', component: Study, title: 'STUDY', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/contact', name: 'contact', component: Contact, title: 'CONTACT', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/login', name: 'login', component: Login, title: 'LOGIN', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/register', name: 'register', component: Register, title: 'REGISTER', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/studycreate', name: 'studycreate', component: StudyCreate, title: 'STUDYCREATE', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'DefaultLayout', requireAuth: true } },
        
        {
            path: '/:notFound(.*)',
            name: 'notfound',
            component: NotFound,
            title: 'NOTFOUND',
            meta: { isMenu: false, layout: 'DefaultLayout', requireAuth: false } 
        },
        //{ path: '/scroll', name: 'scroll', component: Scroll, title: 'SCROLL', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'DefaultLayout', requireAuth: true } },
    ],   
    scrollBehavior(to, from, next){
        //let scrollPosition = rightWrap.scrollY || rightWrap.scrollTop;    
        //let rightWrap = document.querySelector('.rightWrap')        
        
        //페이지 이동시 스크롤탑이동
        if(router.currentRoute.value.name !== 'worksDetailNew'){
            let rightWrap = document.querySelector('.rightWrap') || document.querySelector('.rightWrap2')     
            rightWrap.scrollTop = 0
        }      
    },
})

router.beforeEach((to, from, next) => {
    store.commit('startSpinner');    

    setTimeout(() => {
        next();
    }, 500);
})

router.afterEach((to, from) => {
    store.commit('endSpinner');
})


export default router