 import Home from '/@components/Home.vue'
 import Other from '/@components/Other.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
  template: '<div>Not Found</div>',
})

const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/home',  name: 'home',   component: Home },  
  { path: '/vue',   name: 'vue',    component: Other},
  { path: '/python',name: 'python', component: Other},
  { path: '/spring',name: 'spring', component: Other},
  { path: '/unity', name: 'unity',  component: Other},
  { path: '/:catchAll(.*)+', component: NotFound },
]
// path 를 지정해서 해당 vue를 보여주게 한다.
// redurect : path로 들어온 url을 다른 url로 보여주기 위해 사용한다.
// component : 열리는 vue 대상 
// alias 은 path 와 같은 기능은 하지만 url을 변경하지는 않음


export default routes
