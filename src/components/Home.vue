<template>
    <p class="m-2"></p>
    <!-- <hr /> -->
    <div class="row row-cols-1 row-cols-sm-3 g-2 m-0" style="padding: 5px 80px 10px 80px;">
      <!-- row 안에 col로 Grid 형태를 만든다. row-cols-1 row-cols-sm-3 는 행에 몇게를 나오게 할지이고, g-2 는 셀간격,    -->
      <div class="col" v-for="data in projectList" :key="data.id">
        <list-card :data="data" />
      </div>
    </div>

</template>

<script>
import ListCard from '/@components/ListCard.vue'
import {useStore} from 'vuex'
import  {computed} from 'vue'

export default{
  name: 'Home',
  setup(){
    const store =  useStore();
    const projectList = computed(()=>store.state.projectList.slice().reverse());
      
      return{
        projectList
      }
  },
  components:{
    ListCard,
  },
}

</script>
  