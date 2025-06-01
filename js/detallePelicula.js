//trae pelicula sacandole el atributo id
let querySelector = location.search;
let querySelectorTo = new URLSearchParams(querySelector);
let idPelicula = querySelectorTo.get('id');

