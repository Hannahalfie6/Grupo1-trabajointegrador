//trae pelicula sacandole el atributo id
let querySelector = location.search;
let querySelectorTo = new URLSearchParams(querySelector);
let idPelicula = querySelectorTo.get('id');

fetch("https://api.themoviedb.org/3/movie/${idPelicula}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=es-US")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let main =document.querySelector('.mainindex');
    let generos = '';
    for (let i=0; i < data.genres.length; i++){
        generos += '<a href="./detalleGenero.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=pelicula">${data.genres[i].name} </a>';
    }
    main.innerHTML = `
    <img class="detallePelicula" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
    <h1 class="detalle-titulo">${data.title} </h1>
    <h2 class="detalle-calificacion">Calificacion: ${data.vote_average}/10</h2>
    <h3 class="detalle-info">Fecha de estreno: ${data.release_date}</h3>
    <h3 class="detalle-info">Duracion: ${data.runtime} minutos </h3>
    <p class="detalle-descripcion"> ${data.overview} </p>
    <h3 class="detalle-genero">Genero: ${generos} </h3>
    `;
})
.catch()

//data.genres.length esta mal en el for