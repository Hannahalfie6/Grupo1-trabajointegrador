//Peli populares
fetch("https://api.themoviedb.org/3/movie/popular?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let info = data.results;
    let section = document.querySelector('.contenedorPadrePeliPopular');
    let peliPopulares = '';
    for (let i=0 ; i < 5 ; i ++){
        peliPopulares += `<article class="contenedor">
                <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
                <h3>${info[i].title}</h3>
                <h4>Estreno: ${info[i].release_date}</h4>
                <a href="./detallePelicula.html?id=${info[i].id}">Ver más</a>
            </article>
        `
    }
    section.innerHTML = peliPopulares ;
})
.catch()

//peli mas valoradas
fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let info = data.results;
    let section = document.querySelector('.contenedorPeliValoradas');
    let peliValoradas = '';
    for (let i=0 ; i < 5 ; i ++){
        peliValoradas += `<article class="contenedor">
                <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
                <h3>${info[i].title}</h3>
                <h4>Estreno: ${info[i].release_date}</h4>
                <a href="./detallePelicula.html?id=${info[i].id}">Ver más</a>
            </article>
        `
    }
    section.innerHTML = peliValoradas ;
})
.catch()

//series populares
fetch("https://api.themoviedb.org/3/tv/popular?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let info = data.results;
    let section = document.querySelector('.contenedorSeriesPopulares');
    let peliPopulares = '';
    for (let i=0 ; i < 5 ; i ++){
        peliPopulares += `<article class="contenedor">
                <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
                <h3>${info[i].title}</h3>
                <h4>Estreno: ${info[i].release_date}</h4>
                <a href="./detallePelicula.html?id=${info[i].id}">Ver más</a>
            </article>
        `
    }
    section.innerHTML = peliPopulares ;
})
.catch()