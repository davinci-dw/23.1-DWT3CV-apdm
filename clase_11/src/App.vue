<template>
  <div id="app">
    <HeaderApp/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Estamos probando vue2 via cli"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderApp from './components/HeaderApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    HelloWorld
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
