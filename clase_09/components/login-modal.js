console.log("Se ha cargado el componente login-modal.js")

Vue.component('login-modal', {
    template: `
        <div v-show="panelLoginVisible" class="modal" tabindex="-1" role="dialog" style="display: block">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Inicio de sesión</h5>
                        <button type="button" class="close" aria-label="Close" @click="ocultarPanelLogin">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="loginOnServer">
                        <div class="modal-body">
                            <p>Por favor, ingrese la contraseña genérica provista.</p>
                            <input type="password">
                            
                            <p style="margin-top: 1.5rem;">Para poder continuar, debe aceptar las politicas de privacidad, y los términos y condiciones</p>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="policies" id="flexCheckDefault" v-model="legals">
                              <label class="form-check-label" for="flexCheckDefault">
                                Politicas de privacidad
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="terms" id="flexCheckChecked" v-model="legals">
                              <label class="form-check-label" for="flexCheckChecked">
                                Términos y condiciones
                              </label>
                            </div>
    
                        </div>
                        <div class="modal-footer">
                            <input type="submit" value="Iniciar Sesión" class="btn btn-primary" :disabled="loginIsDisable">
                            <button type="button" class="btn btn-secondary" @click="ocultarPanelLogin">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    props: ['panelLoginVisible', 'ocultarPanelLogin', 'iniciarSesion'],
    computed: {
        loginIsDisable: function() {
            return this.legals.length !== 2;
        }
    },
    methods: {
        loginOnServer: function() {
            new Promise((success, error) => {
                setTimeout(() => {
                    success();
                }, 2000);
            })
            .then(() => {
                console.log("Estamos autenticando al usuario en el servidor");
                this.iniciarSesion();
                this.$emit('authenticated', true);
            })
            .catch(() => {
                console.log("No se pudo autenticar al usuario en el servidor");
                this.$emit('authenticated', false);
            });
        }
    },
    beforeMount() {
        console.log("Se va a montar el componente login-modal");
        console.log(this.panelLoginVisible);
    },
    beforeUpdate() {
        console.log("Se va a actualizar el componente");
        console.log(this.panelLoginVisible);
    },
    data: function() {
        return {
            legals: [],
        }
    }
});