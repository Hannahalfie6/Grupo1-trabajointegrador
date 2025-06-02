const header = document.querySelector("header");
header.innerHTML = `

        <img class="logo" src="./img/Disney_Plus_logo.svg.png" alt="">

        <form class="buscador" action="./resultadosDeBusqueda.html" method="get">
            <div class="inputRadioButton">
                <input type="text" name="" id="" placeholder="Buscar..." required>
                <div class="radios">
                <label><input type="radio" name="tipo" value="peliculas"> Peliculas </label>
                <label><input type="radio" name="tipo" value="series"> Series </label>
                </div>
                <button type="submit">Buscar</button>
            </div>
        </form>
        
        <nav class="formularioNavegador">
            <ul>
                <li>
                    <a href="./index.html">Inicio</a>
                </li>
                <li>
                    <a href="./generosPeliculas.html"> Generos de peliculas </a>
                </li>
                <li>
                    <a href="./generosSeries.html"> Generos de series</a>
                </li>
                <li>
                    <a href="./login.html"> Log in </a>
                </li>
                <li>
                    <a href="./registro.html"> Registro </a>
                </li>
            </ul>
        </nav>

`;

//cambiar en css los valores de los los radio button del header para que queden adentro del buscador

const footer = document.querySelector("footer");
footer.innerHTML= `
        <p>Hannah Alfie | Delfina Iribarren | Magdalena Sanchez</p>
        <p>📧 Disneyplus@gmail.com | 📞 11-2345-6789</p>
    
`;

