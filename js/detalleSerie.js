let querySelector = location.search;
let querySelectorTo = new URLSearchParams(querySelector);
let idSerie = querySelectorTo.get('id');

fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=90b45a60c2f1bb623a150a6f0011fbcb&language=es-US`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let main =document.querySelector('.mainindex');
    let generos = '';
    for (let i=0; i < data.genres.length; i++){
        generos += `<a href="./detalleGenero.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=serie">${data.genres[i].name} </a>`;
    }
    main.innerHTML = `
    <img class="detalleSerie" src="./img/${}.jpg" alt="" srcset="">
        <h1 class="detalle-titulo"> ${} </h1>
        <h2 class="detalle-calificacion">Calificacion: ${}</h2>
        <h3 class="detalle-info">Fecha de estreno: ${}</h3>
        <p class="detalle-descripcion"> ${}</p>
        <h3 class="detalle-genero">Genero: ${generos}>Acción</a></h3>
    `;
})
.catch()
