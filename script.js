var personaJSON = []
var tabla = document.getElementById("tablaDatos");

const apiBase =  "http://127.0.0.1:8000"

function obtener_personas(){
    const url = new URL(apiBase + "/obtener_personas").toString()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        personaJSON = data
        actualizarTabla()
    })
    .catch(error => console.log(error))
}


function actualizarTabla(){
    personaJSON.forEach(function (persona) {
        var fila = tabla.insertRow();
        var celdaNombre = fila.insertCell(0);
        var celdaIdentificacion= fila.insertCell(1);
        var celdaEdad = fila.insertCell(2);
        var celdaSexo = fila.insertCell(3);
        var celdaFrecuencia = fila.insertCell(4);
            
        celdaNombre.textContent = persona.nombre
        celdaIdentificacion.textContent = persona.identificacion
        celdaEdad.textContent = persona.edad
        celdaSexo.textContent = persona.sexo  
        celdaFrecuencia.textContent = "Masculino" == persona.sexo ? (220-persona.edad) : (226-persona.edad)
       
      });
}

//var numero1
//var resultado = consicion ? evaluacionVerdadera : evaluacionFalsa
//console.log(resultado)
//hombres -> 220 - tu edad = FC max
//mujeres -> 226 - tu edad = FC max

 

document.addEventListener('load', obtener_personas())