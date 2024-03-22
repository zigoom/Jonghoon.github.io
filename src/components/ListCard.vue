<template>
  <div class="card h-100 border-2 ">
    <!-- <div class="card-header"> </div> -->
    <div class="image-container">
      <img :src="data.image" class="card-img-top" alt="Image" />
    </div>
    <!-- <img :src="data.image" class="card-img-top" alt="Image" /> -->
    <div class="card-body">
      <h5 class="card-title"><b>{{ data.title }}</b></h5>
      <p class="card-text"> {{ data.contents }} </p>
    </div>
    <div class="card-footer" style="background-color: white; border-width: 0 1px 0 1px;">
      <p class="card-text" style=""> <small><b>{{ data.platform }} </b></small></p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        <p class="card-text" v-if="data.gitLink != ''">
          <a :href="data.gitLink" target="_blank">Github Code Link</a>
        </p>
      </small>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue'
export default {
  props: {
    data: Object,
  },
  setup(props) {
    const data = props.data

    return {data}
  },
}
</script>

<style>
/* 이미지 컨테이너 스타일 */
.image-container {
  height: 200px; /* 이미지 영역의 고정 높이 */
  display: flex; /* 이미지를 수평 및 수직으로 중앙 정렬하기 위해 Flexbox 사용 */
  justify-content: center; /* 수평으로 중앙 정렬 */
  align-items: center; /* 수직으로 중앙 정렬 */
}

/* 이미지 스타일 */
.card-img-top {
  width: auto; /* 이미지 너비를 자동으로 조정 */
  height: 100%; /* 이미지 높이를 100%로 설정하여 이미지 영역에 꽉 차게 만듭니다. */
  object-fit: cover; /* 이미지를 자르거나 늘려서 이미지를 완전히 채웁니다. */
}
</style>
  