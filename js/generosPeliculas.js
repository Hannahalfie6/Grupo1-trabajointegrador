fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=en-US&page=1")
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    let info = data.genres;
    let section = document.querySelector('.contenedorGeneroPeliculas');
    let generoPeliculas = '';
    for (let i=0 ; i < info.length ; i ++){
        generoPeliculas += `<li>
                <a href="./detalleGenero.html?id=${info[i].id}&type=pelicula&name=${info[i].name}">${info[i].name}</a>
            </li>
        `
    }
    section.innerHTML = generoPeliculas ;
    
})
.catch()