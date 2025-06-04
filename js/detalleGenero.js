let querySelector = location.search;
let queryStringObj = new URLSearchParams(querySelector);
let idGenero = queryStringObj.get('id');
let type = queryStringObj.get("type");
let nameGenero = queryStringObj.get("name")


let titulo = document.querySelector(".TituloDetalleGenero");
let section = document.querySelector(".lista-peliculas");
let peliculas = '';

if (type=="pelicula"){
    titulo.innerHTML = `Peliculas de ${nameGenero}`
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1&with_genres=${idGenero}`)
    
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results;
        
        for (let i=0 ; i < info.length ; i ++){
            peliculas += ` <a href="detallePelicula.html?id=${info[i].id}" class="pelicula">
                    <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Foto de ${info[i].title}">
                    <h3>${info[i].title}</h3>
                </a>
            `
        }
        section.innerHTML = peliculas ;
        
    })
    .catch()
} else{
    titulo.innerHTML = `Series de ${nameGenero}`
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1&with_genres=${idGenero}`)
    
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results;
        
        for (let i=0 ; i < info.length ; i ++){
            peliculas += ` <a href="detallePelicula.html?id=${info[i].id}" class="pelicula">
                    <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Foto de ${info[i].name}">
                    <h3>${info[i].name}</h3>
                </a>
            `
        }
        section.innerHTML = peliculas ;
        
    })
    .catch()

}
