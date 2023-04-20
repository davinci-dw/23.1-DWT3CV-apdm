const imagenPerro = "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg";
const imagenGato = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";

Vue.component('page-content', {
    template: `
        <div>
            <h1>{{titulo}}</h1>
            <p>{{mensaje}}</p>
        </div>
    `,
    props: ['mensaje'],
    data: function(){
        return {
            titulo: 'Contenido de la página'
        }
    }
});

const app = new Vue({
    el: '#contenedor',
    data: {
        panelLoginVisible: false,
        mensaje: 'Vamos a armar la aplicación en Vue modularmente',
        login: false,
        links: [
            {text: 'Información general', url: '/home', enable: true, active: true},
            {text: 'Mi perfil', url: '/about', enable: false, active: false},
            {text: 'Configuraciones', url: '/contact', enable: false, active: false},
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
        toogleLogin() {
            if(!this.login) {
                this.mostrarPanelLogin();
            }
            this.login = !this.login;
        },
        envioDeInformacion() {
            console.log('Se ha enviado la información');
        },
        probandoEscape() {
            console.log("probandoEscape");
            alert('Se ha presionado la tecla escape');
        },
        agregarMiPerfil() {
            const miPerfil = {url: '/about', enable: true};
            this.links.push(miPerfil);
        },
        sacarMiPerfil() {
            this.links.splice(1, 1);
            console.log('Se ha sacado el perfil');
        }
    }
});