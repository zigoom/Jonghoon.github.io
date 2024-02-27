<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from '/@components/NavBar.vue'

export default {
  name: 'App',
  setup() {
  },
  components: {
    NavBar,
  },
}
</script>

<style scoped>
</style>
