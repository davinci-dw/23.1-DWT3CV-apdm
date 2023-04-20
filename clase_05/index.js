const imagenPerro = "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg";
const imagenGato = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";

Vue.component('page-content', {
    template: `
        <div>
            <h1>{{titulo}}</h1>
            <p>{{mensaje}}</p>
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
            }
        ],
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