const form = document.getElementById("formulario")
const fetchURL =  "https://jsonplaceholder.typicode.com/users"

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var fechaNacimiento = document.getElementById("fechaNacimiento").value

    var datos = {
        "Nombre": nombre,
        "Apellido": apellido,
        "Fecha de nacimiento": fechaNacimiento   
     };

    var opcionesFetch = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos),
            };

    fetch( fetchURL, opcionesFetch)
    .then (response => response.json())
    .then (data => console.log(data))
})

   