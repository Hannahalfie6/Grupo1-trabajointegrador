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
spinner.classList.remove("oculto"); 

if (
    terminoBuscado == null || tipo == null || (tipo != "movie" && tipo != "serie")
    )
    {
    spinner.classList.add("oculto");
    contenedorResultados.classList.add("oculto");
    sinResultados.classList.remove = ("oculto");
    terminoSinResultados.innerText = terminoBuscado || "la busqueda";
    }
    if (terminoBuscado != null && terminoBuscado != "") {
        terminoSinResultados.innerText = terminoBuscado;
    } 
    else if {
        terminoSinResultados.innerText = "la búsqueda";
    }
    else {
        fetch(`https://api.themoviedb.org/3/search/${tipo}movie?api_key=90b45a60c2f1bb623a150a6f0011fbcb&include_adult=false&language=en-US&page=1`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            spinner.classList.add("oculto");
            
                if (data.results.length === 0){
                    contenedorResultados.classList.add("oculto");
                    sinResultados.classList.remove("oculto");
                    terminoSinResultados.innerText = terminoBuscado;
                }
                else{
                    contenedorResultados.classList.remove("coulto");
                    sinResultados.classList.add("oculto");
                }
                
        })
        .catch();
    }