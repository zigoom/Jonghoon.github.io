<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><b>Portfolio</b>&nbsp;&nbsp;&nbsp;</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul :class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }"
            v-for="menu in menu_category" :key="menu.id"> 
          <!-- ul 의 반복으로는 메뉴의 왼쪽정렬, 오른쪽 정열을 만들어낸다 
              (왼쪽, 오른쪽 이렇게 2반복 한다는거임)-->
            <li class="nav-item" v-for="menu_object in menu.value" :key="menu_object.key">
              <router-link :to="menu_object.url" class="nav-link">
              <b>{{ menu_object.value }}</b>
            </router-link> 
              <!-- router-link에서 router-view에 띄워줄 내용에 대한 속성을 넣어준다,-->
            </li> 
            <!-- 왼쪽,오른쪽 메뉴가 갖고있는 value 값인 메뉴에 대한 정보를 가져와
                 url과 메뉴명 들을 반복해서 띄워줌 -->
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const menus = [
      { key: 'home',    value: ' All ',     url: '/home',   position: 'left', link: 'home'},
      { key: 'vue',     value: ' Vue ',     url: '/vue',    position: 'left', link: 'other'},
      { key: 'python',  value: ' Python ',  url: '/python', position: 'left', link: 'other'},
      { key: 'spring',  value: ' Spring ',  url: '/spring', position: 'left', link: 'other'},
      { key: 'unity',   value: ' Unity ',   url: '/unity',  position: 'left', link: 'other'},
      { key: 'profile', value: ' Profile ', url: '/profile',position: 'right',link: ''},
      { key: 'admin',   value: ' Admin ',   url: '/admin',  position: 'right',link: ''},
    ]

    const left_menus = computed(() => menus.filter((i) => i.position == 'left'))
    const right_menus = computed(() =>
      menus.filter((i) => i.position == 'right')
    )

    const generateLink = (menu_object) => {
      if (menu_object.link === 'other') {
        // link가 'other'인 경우 변수를 함께 보내는 링크 생성
        return {
          path: menu_object.url,
          params: {
            // 변수 지정
            value: menu_object.value
          }
        };
      } else {
        // link가 'other'가 아닌 경우에는 기본적인 링크 생성
        return menu_object.url;
      }
    };

    return {
      menu_category: [
        {
          id: 1,
          me_auto: true,
          value: left_menus.value,
        },
        { id: 2, me_auto: false, value: right_menus.value },
      ],
      generateLink
    }
  },
}
</script>

<style scope>
.notification {
  text-shadow: 2px 2px 2px gray;
}
</style>
  