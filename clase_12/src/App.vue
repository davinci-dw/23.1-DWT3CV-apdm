<template>
  <div id="app">
    <v-app>
      <v-snackbar
          v-model="snackbar"
      >
        <span>Inicio de sesión exitoso</span>

        <template v-slot:actions>
          <v-btn
              color="success"
              variant="text"
              @click="snackbar = false"
          >
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar
          v-model="snackbarError"
      >
        <span>Error iniciando sesión</span>

        <template v-slot:actions>
          <v-btn
              color="danger"
              variant="text"
              @click="snackbarError = false"
          >
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
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
                        v-model="email"
                        label="Email*"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="password"
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
                  @click="login"
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
        <v-list-item @click="showDialog">
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
              v-for="item in authorizedItems"
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
import { initializeApp } from "firebase/app";

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app); // Inicializamos el servicio de autenticación



export default {
  name: 'App',
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.session = true;
        console.log(user)
      } else {
        this.session = false;
      }
    });
  },
  data: () => ({
    email: '',
    password: '',
    session: false,
    drawer: false,
    dialog: false,
    snackbar: false,
    snackbarError: false,
    items: [
      { title: 'Información General', icon: 'mdi-view-dashboard', link: '/', 'authRequired': false },
      { title: 'Mi perfil', icon: 'mdi-image', link: '/about', 'authRequired': true },
      { title: 'Configuración', icon: 'mdi-help-box', link: '/contact', 'authRequired': true },
    ],
    right: null,
  }),
  computed: {
    authorizedItems() {
      return this.items.filter(item => !item.authRequired || this.session);
    },
  },
  methods: {
    showDialog() {
      this.drawer = false;
      this.dialog = true;
    },
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.session = true;
            this.dialog = false;
            this.snackbar = true;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.snackbarError = true;
            console.log(errorCode, errorMessage);
          });
    }
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

