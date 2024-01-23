<template>
  <div>
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/calcul">Calcul</router-link>   |
      <router-link to="/calcul2">Calcul2</router-link>   |
      <router-link to="/calcul3">Calcul3</router-link>   |
      <router-link to="/calcul4">Calcul4</router-link> 
    </div>
    <router-view/>  
  
    <!-- <router-view /> -->
    <Footer />
  
  </div>
  
</template>
<script>
import Header from './layouts/Header';
import Footer from './layouts/Footer';
export default {
  components: {Header, Footer},
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
