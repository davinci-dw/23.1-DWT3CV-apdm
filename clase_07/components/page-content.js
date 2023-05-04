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
