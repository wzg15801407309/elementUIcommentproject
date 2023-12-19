<template>
  <div id="app">
    <mainControl msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import mainControl from './views/mainControl.vue'

export default {
  name: 'App',
  components: {
    mainControl
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
  margin-top: 60px;
}
</style>
