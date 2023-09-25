/*
Sistema para registrar pacientes y mostrarlos en tarjetas




*/

//Primer paso: obtener todos los elementos de nuestro HTML y guardarlo.

//Inputs separados, boton, textoConfirmación

let nombrePaciente = document.getElementById("nombrePaciente");
let edadPaciente = document.getElementById("edadPaciente");
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente");
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

//Array para almacenar a mis pacientes
let pacientes = [];

// PRIMERO, queremos acceder al valor de un dato, así que lo gaurdamos en una variable

// SEGUNDO. Lo mandamos a llamar dentro del array para guardarlos.


// Función para registrar a un nuevo paciente
function registrarPaciente(){
    // 1. paso 1
    let valorNombrePaciente = nombrePaciente.value;
    let valoredadPaciente = edadPaciente.value; 

    //Array para guardar la información del paciente
    //paso 2.
    let paciente = {
        nombre : valorNombrePaciente,
        edad : valoredadPaciente,
        citas: []
    };

    //Cuando tengo la información del paciente
    // PASO 3. GUARDAR CON PUSH
    pacientes.push(paciente); //array.push(valorAAgregar);


    // 1. Muestro la info en consola.
    mostrarInfoPaciente(paciente); //Invocación de otra función para mostrar la info en consola

    // 2. Mensaje de confirmación (textContext)
    mensajeConfirmacion.textContent = "Paciente " + paciente.nombre + "  registrado correctamente";

    // 3. Generar la tarjeta
    generarTarjetaPaciente(paciente); //Invocación de una funci+pn para generar tarjetas

    // 4. Retorno en autobus.
    return paciente;

}

// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
}

//Funcion para genera tarjetas de pacientes
function generarTarjetaPaciente(paciente){

    //crear
    let tarjetaDiv = document.createElement("div");
    tarjetaDiv.className = "col";

    //crear el contenido de la tarjeta
    //Se usan las backsticks porque ya se unan las comillas. Alt + 96 
    tarjetaDiv.innerHTML=`
        <div class="card border-info mb-3">
            <div class="card-header">Paciente</div>
            <div class="card-body">
                <img class="imgDienteBrillos" src="https://img.freepik.com/premium-vector/happy-tooth-icon-cute-tooth-character-brush-your-teeth-with-dental-floss-dental-personage_697711-540.jpg?w=996" alt="Diente con hilo y brillitos">
                <h5 class="card-title">${paciente.nombre}</h5>
                <p class="card-text textoprueba"><i>Agregar descripción.</i></p>
                <p>Edad: ${paciente.edad}</p>
            </div>
        </div>
    `


    //POner
    contenedorTarjetas.appendChild(tarjetaDiv);
}

//Qué crees JavaScript... a este botón le voy a añadir un evento para que lo puedas esucchar al hacer "click"

//Defino el evento quue va a detonar y le añado el elemento

botonRegistrarPaciente.addEventListener('click', registrarPaciente);