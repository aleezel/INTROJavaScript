/*
NECESITAMOS HACER ESTO PARA TERRIZAR LAS COSAS

Sistema para registrar pacietnes y citas de estos pacientes, utilizando métodos de arrays

Lista de cosas para hacer / cosas por tomar en cuenta

- Un array para pacientes
- Un array para citas

- Prompt para regitrar los datos
- Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
- Function registrarPaciente
- Function registrarCita
- Métodos para modificar los arrays (push, forEach, splice)

Desarrollar la lógica de programación. Cuando hay cosas muy grandes, se necesita segmentar.
Para identificar mínimo por donde comenzar a atacar.

*/

//Crear un array para almacenar mis pacientes

//La variable paciente está declarada e inicializada (tiene un nombre, y un valor, a pesar de que su arreglo esté vacío)

//Los índices de arreglo están undefined, porque no hay elementos pero sí hay espacios disponibles
//El null siempre es intencional
let pacientes = [];
let citas = [];

/*
Genero un paciente y lo guardamos en la carpeta de PACIENTES

*/

//Primero se piden los datos.
function registrarPaciente(nombre, edad){

    //Crear un array dentro de otro array. Estamos declarando las variables, pero no tienen un valor.
    //Se inicializan hasta que se les asigna un dato. Mientras están en stand by.
    //Citas ya está inicializado, porque ya tiene un valor, que es un array.

    //Jugar al inception. Hay que hacer cambios en algunos elementos.  "Escape de caracteres"

    //Paso 2. Guiardo cada par de datos, (nombre y edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas : [],
    }

    //Agregar paciente al array
    //Paso 3. Ya que tengo el par de datos, le hago un pusha mi array para guardar al paciente.
    pacientes.push(paciente);
    //Si no usamos el retorno, el paciente se queda ahí adentro y solo ahí va a vivir. Lo que pasa en las vegas, se queda en las vegas.
    return paciente;

    //Ya que se piden los datos y se almacenan.
    //
}


//Función para registrar citas de un paciente

//Cuando ejecuto mi función, becesito un paciente, una hora y una fecha para registrar la cita.
function registrarCita(paciente, fecha, hora){

    //Cuando tenga estos datos, buscaré dentro del paciente el apartado citas para hacerle un push ahí
    paciente.citas.push(
        fecha, hora
    )
}


//Funcion para mostrar la información del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    console.log("Citas registrradas: ");

    //forEach para imprimir citas en función flecha
    paciente.citas.array.forEach((cita, indice) => {
        console.log("índice: " + indice + "Fecha: " + cita.fecha + "Hora: " + cita.hora)
    });
}

/*
Funcionamiento del forEach anterior
1.Definir una variable temporal, lladam


*/



//Registrar paciente desde la invocación de la fgunción
let paciente1 = registrarPaciente("Felipe", 31,);
let paciente2 = registrarPaciente("Naruto", 21);

//Registrar la cita de un paciente desde la invocación de la función de registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");

mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);

//El for each permite meternos al arreglor y jugar con cada elemento para immprimirlos.

//El 90% de las veces, for each es para imprimir cosas. Para modificarlas, e usa el .map

/*
let carritoSuper = ["manzanas", "papitas", "huevo", "jabón de trastes", "pan"];

//Oye JS, para cada elemento del tipo "producto" que tenga una posición dentro del arreglo llamado "carritoSuper", vas a hacer algo

carritoSuper.forEach(function(producto)//variable temporal llamada producto
{
    console.log("Producto: " + producto + " con la posición: ");
});

//los entrevistadores ven los más mínimos detalles, desde como abres Visual Studio code, como nombras tus variables, archivos y lo último es sobre cómo compila.

//Función que se ejecuta dentro de otra función, con un .map es un callback. El callback se va a detener hasta que ya no hayan elementos. 
*/