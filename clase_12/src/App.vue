<template>
  <div id="app">
  <v-app>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Inicio de sesión</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      label="Email*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Password*"
                      type="password"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                      label="Politicas de privacidad*"
                  ></v-checkbox>
                  <v-checkbox
                      label="Términos y condiciones*"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
            <small>*campos obligatorios</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Cerrar
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Iniciar Sesión
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <nav>
      </nav>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        left
        temporary
    >
      <v-list-item @click="iniciarSesion">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Ejemplo Vuetify
          </v-list-item-title>
          <v-list-item-subtitle>
            inicie sesión
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.link">
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    drawer: false,
    dialog: false,
    items: [
      { title: 'Información General', icon: 'mdi-view-dashboard', link: '/' },
      { title: 'Mi perfil', icon: 'mdi-image', link: '/about' },
      { title: 'Configuración', icon: 'mdi-help-box', link: '/contact' },
    ],
    right: null,
  }),
  methods: {
    iniciarSesion() {
      this.drawer = false;
      this.dialog = true;
    },
  },
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

