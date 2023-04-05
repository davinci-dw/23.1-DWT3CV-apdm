const imagenPerro = "https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg";
const imagenGato = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg";

const app = new Vue({
    el: '#contenedor',
    data: {
        login: true,
        links: [
            {text: 'Home', url: '/home', enable: true},
            {text: 'About', url: '/about', enable: false},
            {text: 'Contact', url: '/contact', enable: true},
        ]
    }
});