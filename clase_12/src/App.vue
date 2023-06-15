<template>
  <div id="app">
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <nav>
        <router-link to="/">Información general</router-link> |
        <router-link to="/about">Mi perfil</router-link> |
        <router-link to="/contact">Configuraciones</router-link>
      </nav>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
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

