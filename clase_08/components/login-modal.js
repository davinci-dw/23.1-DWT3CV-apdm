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
                    <div class="modal-body">
                        <p>Por favor, ingrese la contraseña genérica provista.</p>
                        <input type="password" v-on:keyup.enter="loginOnServer">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="loginOnServer">Iniciar Sesión</button>
                        <button type="button" class="btn btn-secondary" @click="ocultarPanelLogin">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['panelLoginVisible', 'ocultarPanelLogin', 'iniciarSesion'],
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
    data: function(){
        return {
        }
    }
});