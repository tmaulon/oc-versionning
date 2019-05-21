let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !'
    }
});
let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous affichez ce message le ' + new Date().toLocaleString()
    }
});
let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

let axiosApp1 = new Vue({
    el: '#axios-app-1',
    data: {
        cineMovieInfo: null,
    },
    mounted() {
        axios
            .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e55b468eef032e9c10c7f385cf40d16f')
            .then(response => {
                this.cineMovieInfo = response.data.results
            })
    }
});