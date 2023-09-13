/*
Arrays
    Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de varibales (que pueden ser diferentes, pero con un mismo contexto.)


*/

let nombre = "Felipe";
let edad = 31;
let puesto = "instructor";

//Usar un array (arreglo) para juntar nuestras variables.
//Los corchetes son específicamente para arrelgos []

let personasDeLaCH31 = ["Felipe", "Jose Ángel", "Marco", "Evelyn", "Alejandro"];

//Podemos almacenar cualquier tipo de dato en un array, aunque no es recomemdable elistar datos desperdigados juntos
let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof(cosasRandom));//object
console.log(typeof(personasDeLaCH31));

//los tipos de datos primitivos.

//Métodos, lo que se ve y lo que hace.

/*
Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porquie los arrays son objetos (después veremos que tenemois muchos tipos de objetops)

Los arreglos, al ser objetos, cuentan con métodos que nos permiten manipularnos

Los métodos son funciones que pertencen a un objeto. Las funciones pueden estar ahí solitas. Entenderlas nos permiten saber qué si o qué no podemos hacer.

Método = acción;
Propiedad = cómo se ve;


Ya que tengo mi arreglo, ¿cóno podemos acceder a esa información?
Para mostrar la cantidad de elementos que tengo en un arreglo, usamos un método llamado length



*/

console.log(personasDeLaCH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento específico utilizando los índices

console.log(personasDeLaCH31[0]); //Felipe
console.log(personasDeLaCH31[25]); //undefinided, no estaba previsto, porque el elemento aún no existe.


//También podemos acceder a un elemento de mi arreglo por medio de una variable
//Declaro el índice en una variable
let index = 4;

//Paso esta variable como índice del arreglo
//FVorma revoltosa de hacer las cosas
console.log(personasDeLaCH31[index]);


//Ejemplo de
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. García", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index ´para ccdeder al dato y luego lo reasignamos.

dentistas[3] = "Similares";
dentistas[8] = "Dr. Strange";
console.log(typeof(dentistas[7]));


//__________________________________________________________________________________

//Función para imprimir una línea divisoria y tener una separación de los datos que ejecuto
function imprimirDivision(){
    console.log("_______________________________________________________")
}

imprimirDivision();

//__________________________________________________________________________________


//Métodos de arrays

let listaDelSuper = ["Carne", "Verduras", "Manzana verde", "Tortillas", "Frutas"];

//Método length para conocer la longitud del array
console.log("La cantidad de elementos de tu lista es de " + listaDelSuper.length);

//Método PUSH() para poner elementos al final de mi array
listaDelSuper.push("Jabón de ropa");

console.log("En tu lista de super hay " + listaDelSuper);

/*
function push(/* Aquí van los parámetros){

}
*/

//Método pop() para eliminar el elemento final de un array (pop, como si se reventara una burbuja) Siempre será el último elemento del pop. Es una función por lo que se le debe agregar SIEMPRE los paréntesis
listaDelSuper.pop();

console.log("En tu lista de super hay " + listaDelSuper);

//slice / splice = cortar / empalmar

//Agregar un elemento al princiíop del array con el unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posición de las verduritas
console.log(listaDelSuper.indexOf("Verduras"));


//Método splice para agregar, eliminar o reemplazar elementos
//nombreArrglo.splice(inicio, cantidadEkenentosAliminar, elementosAInsertar1, elementosAInsetar2, ...);

listaDelSuper.splice(5, 2, "Plátano");
console.log(listaDelSuper);

imprimirDivision();

//Es uno de los métodos más poderosos.
//Método .map()
let numeros = [1, 2, 3, 4, 5];

//Crear otro arreglo con los números multiplicados x2 [2, 4, 6, 8, 10]

//Va a tomar a cada elemento y lo va a multiplicar por dos. Luego lo guardará en otro arreglo. Es una función anónima porque no tiene un nombre.
let numerosPor2 = numeros.map(function(numero){
    return numero * 2;
});

console.log(numerosPor2);

//Centrarnos en practicar más el slice y el map.

/*
Imaginemos que tenemos un array de pacientes. Este array tiene datos ergistrados como nopmbre, edad.
Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita atención especial.

Aspectos a considerar:
    - 2 arreglos (original y el modificado)
    - Condición tipo if
    - Función para agregar el nuevo dato a cada elemento
    - método map()


*/

//Arrelgo original


let pacientesConsultorio = [
    {nombre: "Felipe", edad: 31},
    {nombre: "Fátima", edad: 26},
    {nombre: "Jesús", edad: 51}
]

//Función para agregar el texto "Necesita atención especial"
function agregarEstadoSalud(paciente){
    let estado = "Saludable";
    
    //Si el paciente tiene más de 40 añs
    //Se hace alusión al objeto y su propiedad a acceder, en este caso, acceder a la edad el paciente
    if (paciente.edad>40) {
        estado = "Necesita atención especial"
    }
    return{
        ...paciente, //copia del paciente
        estadoSalud: estado,//para agregar un nuevo campo o variable (como la edad o nombre)
    };
}

//Vamos a aplicar la función en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);