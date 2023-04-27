const imagenPerro = "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg";
const imagenGato = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";

Vue.component('page-content', {
    template: `
        <div class="pageContent">
            <h1 class="pageContent__title">{{titulo}}</h1>
            <p class="pageContent__text">{{mensaje}}</p>
        </div>
    `,
    props: ['titulo', 'mensaje'],
    data: function(){
        return {
        }
    }
});

const app = new Vue({
    el: '#contenedor',
    data: {
        panelLoginVisible: false,
        mensaje: 'Vamos a armar la aplicación en Vue modularmente',
        login: false,
        articles: [
            {
                titulo: 'Perro',
                mensaje: 'El perro es un mamífero carnívoro de la familia de los cánidos que constituye una subespecie del lobo. Es un animal doméstico en la mayor parte de los hogares humanos y ha sido el mejor amigo del hombre durante milenios.',
            },
            {
                titulo: 'Gato',
                mensaje: 'El gato es un mamífero carnívoro de la familia de los felinos. Es un animal doméstico, aunque se le puede encontrar en estado salvaje. Es un animal muy inteligente y curioso, y se le considera un animal de compañía.',
            },
            {
                titulo: 'Pez',
                mensaje: 'El pez es un animal acuático, vertebrado, de cuerpo blando y simétrico, que vive en el agua y respira por branquias. Los peces se clasifican en dos grandes grupos: los peces cartilaginosos y los peces óseos.',
            },
            {
                titulo: 'Pájaro',
                mensaje: 'El pájaro es un animal vertebrado, de sangre caliente, que tiene el cuerpo cubierto de plumas y que se caracteriza por tener dos alas y dos patas. Los pájaros son ovíparos, es decir, nacen de huevos.',
            }
        ],
        links: [
            {text: 'Información general', url: '/home', enable: true, active: true},
            {text: 'Mi perfil', url: '/about', enable: false, active: false},
            {text: 'Configuraciones', url: '/contact', enable: false, active: false},
        ]
    },
    mounted() {
        const isLogin = JSON.parse(localStorage.getItem('login'));
        if(isLogin) { //"true", "false" -> true
            this.login = true;
        }
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
            localStorage.setItem('login', 'true');
            this.ocultarPanelLogin();
        },
        toogleLogin() {
            if(!this.login) { // Si no está logueado
                this.mostrarPanelLogin();
            } else {
                console.log('Se ha cerrado la sesión');
                localStorage.setItem('login', 'false');
                this.login = false;
            }
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