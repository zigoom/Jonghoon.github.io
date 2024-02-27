import { createRouter, createWebHistory } from 'vue-router'
import routes from '/@router/routes.js' //라우터를 할 리스트를 여기에서 정의하고 있음.

export const router = createRouter({
  history: createWebHistory(),   //웹사이트 이동 기록 기록 사용여부 (createWebHistory: url 변화없이 사용 , createWebHistory: hash(#)를 url에 붙여줌)
  linkActiveClass: 'active',  //링크에 추가 클래스를 넣어줄수 있음
  routes, // RouteRecordRaw를 넣어줌 (라우터를 할 링크 내용을 넣어주고 있다)
})
