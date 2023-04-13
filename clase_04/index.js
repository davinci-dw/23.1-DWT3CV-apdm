const imagenPerro = "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg";
const imagenGato = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";

const app = new Vue({
    el: '#contenedor',
    data: {
        panelLoginVisible: false,
        mensaje: 'Vamos a armar la aplicación en Vue modularmente',
        login: false,
        links: [
            {text: 'Información general', url: '/home', enable: true},
            {text: 'Mi perfil', url: '/about', enable: false},
            {text: 'Configuraciones', url: '/contact', enable: false},
        ]
    },
    methods: {
        mostrarPanelLogin() {
            this.panelLoginVisible = true;
        },
        ocultarPanelLogin() {
            this.panelLoginVisible = false;
        },
        iniciarSesion() {
            this.login = true;
            this.ocultarPanelLogin();
        },
        cerrarSesion() {
            this.login = false;
        },
        envioDeInformacion() {
            console.log('Se ha enviado la información');
        },
        probandoEscape() {
            console.log("probandoEscape");
            alert('Se ha presionado la tecla escape');
        }
    }
});