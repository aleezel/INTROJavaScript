//alert("Hola mundo");


/* var frasco = "pastillas";
var frasco = "pasitasConChocolate";
var frasco = "shampoo";

console.log(frasco); */

/*Tipos de datos primitivos y no primitivos

string
number
boolean
undefined
null
symbol
object(no es primitivo)
*/

//string es una cadena de texto, que siempre debe ir entre comillas simles o comillas dobles.
// var vaso ="leche";
// var vaso = "3825871030";

//number no lleva comillas, y se refiere a un número con el cual podemos hacr operaciones.
// var edad = 31;

//boolean solamente tiene dos salidas que es true or false. 
// var cuentasPremium = false;

//undefined es un tipo de ato que existe pero que no está definido o inicializado.
// var proximaCita = ;



//null es un valor que no tenemos pero que declaramos
//var asistenciaInvitado = null;

var edad = "31";
var peso = 66;

console.log(typeof(edad));
/* typeof es una palabra reservada que nos ayuda a saber qué tio de dato tenemos. */


//var


/*
var edadTexto  = edad.toString();
console.log  ((edad.toString));
console.log(typeof(edad));
*/

/*
    Cons
        Constante variable, que no cambia, que se mantendrá de esta misma manera.
        Por ejemplo, PI.


*/

// Modificar a string, estamos declarando la variable que será convertida. Es importante que se guarde la variable original en otra variable para que pueda hacer la conversión.
var pesoCadena = peso.toString();
console.log(pesoCadena);
console.log(typeof(pesoCadena));

var edadNumero = parseInt(edad);
console.log (edadNumero);
console.log (typeof(edadNumero));
