const imagenPerro = "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg";
const imagenGato = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";

const app = new Vue({
    el: '#contenedor',
    data: {
        mensaje: 'Vamos a probar el uso de eventos en Vue',
        login: false,
        links: [
            {text: 'Información general', url: '/home', enable: true},
            {text: 'Mi perfil', url: '/about', enable: false},
            {text: 'Configuraciones', url: '/contact', enable: false},
        ]
    },
    methods: {
        iniciarSesion() {
            this.login = true;
        },
        cerrarSesion() {
            this.login = false;
        },
        envioDeInformacion() {
            console.log('Se ha enviado la información');
        }
    }
});