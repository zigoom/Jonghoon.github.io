import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {    
    path:'/calcul',
    name:'calcul',
    component: () => import('../views/Calculator.vue') 
  },
  {    
    path:'/calcul2',
    name:'calcul2',
    component: () => import('../views/CompositionAPI.vue') 
  },
  {    
    path:'/calcul3',
    name:'calcul3',
    component: () => import('../views/CompositionAPI3.vue') 
  },
  {    
    path:'/calcul4',
    name:'calcul4',
    component: () => import('../views/CompositionAPI4.vue') 
  }
]


// history 모드일 경우에 빌드를 하면 절대경로로 설정되어 페이지가 표시간 안되는 현상 (https://hanalen.tistory.com/16)
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
