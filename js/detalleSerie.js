//traemos serie
let querySelector = location.search;
let queryParams = new URLSearchParams(querySring);
let idSerie = queryParams.get('id');

fetch('https://api.themoviedb.org/3/tv/series_id?language=en-US')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let main = document.querySelector('.mainindex');
    let detalles = '';
    for(let i=0; i<  data.length; i++){ //ALGO MAS EN EL LENGTH//
        detalles += //FALTA EL LINK ACA
    };
    main.innerHTML= `
    <img class="detalleSerie" src="./img/${}.jpg" alt="" srcset="">
        <h1 class="detalle-titulo"> ${} </h1>
        <h2 class="detalle-calificacion">Calificacion: ${}</h2>
        <h3 class="detalle-info">Fecha de estreno: ${}</h3>
        <p class="detalle-descripcion"> ${}</p>
        <h3 class="detalle-genero">Genero: ${generos}>Acción</a></h3>
    `;
    })
.catch(error)
