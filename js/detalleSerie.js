//traemos serie
let querySelector = location.search;
let queryParams = new URLSearchParams(querySring);
let idSerie = queryParams.get('id');








// En la página detalle de una serie debe figurar al menos:
// Foto de la portada.
// Nombre o título.
// Calificación (rating).
// Fecha de estreno.
// Sinópsis.
// Género al que pertenece la serie.
// Funcionalidad: La información de cada página de detalles debe provenir de forma dinámica desde un endpoint de la API. Para acceder a cada página de detalle deberán incorporar query strings en la URL (indicando qué película o serie desean obtener) para obtener los datos puntuales desde un endpoint de la API.
// Atención: cada referencia cruzada en las páginas de detalle debe permitir navegación. Ejemplo: si en el detalle de películas se ve el nombre de un género al clickear sobre el mismo el sitio debe llevarme al detalle del género.
