<template>
    <p class="m-2"></p>
    <hr />
    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
      <!-- row 안에 col로 Grid 형태를 만든다. row-cols-1 row-cols-sm-3 는 행에 몇게를 나오게 할지이고, g-2 는 셀간격,    -->
      <div class="col"  v-for="data in filteredProjectList" :key="data.id" >
        <list-card :data="data"  />
      </div>
    </div>
</template>

<script>
import ListCard from '/@components/ListCard.vue'
import {useStore} from 'vuex'
import {computed, ref, onBeforeMount,onBeforeUpdate} from 'vue'
import { useRoute } from 'vue-router';

export default{
  name: 'Home',
  setup(){
    const store =  useStore();
    const projectList = computed(()=>store.state.projectList.slice().reverse());
    const route = useRoute();
    const name = ref('')
    name.value = route.name;

    // 페이지에 들어올 때마다 실행됨
    // onBeforeMount(() => {
    //   console.log('Current route name:', route.name);
    //   name.value = route.name;
    // });
    // 페이지 업데이트될 때마다 실행됨
    onBeforeUpdate(() => {
      name.value = route.name;
    });

   // filteredProjectList 계산된 속성을 정의하여 필터링된 프로젝트 리스트 반환
   const filteredProjectList = computed(() => {
      return projectList.value.filter(data => data.platform === name.value);
    });

    return{
      projectList, name, filteredProjectList
    }
  },
  components:{
    ListCard,
  },
}

</script>
  