let urlApi = "https://rickandmortyapi.com/api/character"

fetch(urlApi)
.then(response => response.json())
.then(datos=> {
    console.log(datos);
    console.log(datos.results);
    console.log(datos.results[5]);
    console.log(datos.results[5].name);
}
    )