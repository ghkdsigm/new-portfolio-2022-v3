import { createRouter, createWebHistory} from 'vue-router'
import store from '../store/index'
import Home from '../pages/Home.vue'
import Works from '../pages/Works.vue'
import Career from '../pages/Career.vue'
import Info from '../pages/Info.vue'
import Contact from '../pages/Contact.vue'
import Study from '../pages/Study.vue'
import Work01 from '../pages/works/Work01.vue'
import Work02 from '../pages/works/Work02.vue'
// import Loading from '../components/common/Loading.vue'

const routes = [
    { path: '/', name: 'home', component: Home, title: 'HOME', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    { path: '/info', name: 'info', component: Info, title: 'INFOMATION', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    { path: '/career', name: 'career', component: Career, title: 'CAREER', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    { path: '/works', name: 'works', component: Works, title: 'WORKS', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    { path: '/works/work01', name: 'work01', component: Work01, title: 'WORK01', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
    { path: '/works/work02', name: 'work02', component: Work02, title: 'WORK02', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'SubLayout', requireAuth: true } },
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
    { path: '/study', name: 'study', component: Study, title: 'STUDY', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    { path: '/contact', name: 'contact', component: Contact, title: 'CONTACT', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
    //{ path: '/loading', name: 'loading', component: Loading, title: 'LOADING', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
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