let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get("query");
let tipo = queryStringObj.get("tipo");
let tituloResultado = document.querySelector("#titulo-resultado");
let spinner = document.querySelector("#spinner");
let listaPeliculas = document.querySelector("#lista-peliculas");
let contenedorResultados = document.querySelector("#contenedor-resultados");
let sinResultados = document.querySelector("#sin-resultados");
let terminoSinResultados = document.querySelector("#termino-sin-resultados");

tituloResultado.innerHTML = "Resultados de búsqueda para: " + terminoBuscado ;

//mostrar el spinner de carga
spinner.style.display = "block";

if (terminoBuscado == null || tipo == null || (tipo != "movie" && tipo != "serie")){
    spinner.style.display = "none";
    sinResultados.style.display = "none";
    if (terminoBuscado != null && terminoBuscado != "") {
        terminoSinResultados.innerText = terminoBuscado;
    } else {
        terminoSinResultados.innerText = "la búsqueda";
    }
    } else {
        let url = //no lo encontre!!!!
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch();
    }