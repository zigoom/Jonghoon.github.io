import { createApp } from 'vue'
import { router } from '/@router/router.js' //해당위치에 라우터를 사용할것임
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'   // 부트스트랩의 css를 사용함 (하위 vue 들에서도 사용하도록 전역으로 선언함)
import 'bootstrap/dist/js/bootstrap.esm.min.js' // 부트스르랩의 js를 선언
import store from '/@store/index.js' // 전체에 데이터를 공유하려고


const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app');
