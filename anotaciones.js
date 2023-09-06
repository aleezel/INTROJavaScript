//Funciones con Mariana

/*
Funciones
    Una función es un bloque de código que realiza una tarea específica cuando se le llama

    *Cada función de JavaScript en un objeto Función

    Es un objeto porque pertenece a una clase.

*/

function saludar(){
    console.log("Holi, soy una función c:");
}
saludar();
/*
Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y qfunciones que generan otras funciones.

Declarar funciones

    1. La palabra reservada function, que nos indica que estamos definiendo una función.
    2. El nombre de la función, dependiendo de la acción a realidar.
    3. Un par de parentesis () después del nombre. Puede contener parámetros. En este caso, no hya ninguno.



*/

function suma (a,b){
    return a +b;
}

var resultado = suma (5,3); //Almacenar función en una variable
console.log(resultado);
/*
La función suma todos los argumentos a y b y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado.

Antonio comenta: dentro del log imprimimos resultado en vez de suma. Igual se podría imprimir con console.log(suma(5, 3)).
*/ 

//Funciópn que muestra un mensaje en la consola
function saludar (nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar ("Ale");//Imprime el saludo}

/*
La función saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque 
*/

/*
Hoisting

    Es fundamental en el entendimiento de la forma en que se jeecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.

    Yo puedo invocar una función antes de siquiera declararla.

*/

console.log(miVariable); // No da error, pero imprime undefined
var miVariable = 10;
//Scope = Alcance, hace referencia al alcance de una variable en nuestro código de JS.


/*
        Global : quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo.
        var : no es tan recomendado, por comportamiento de la variable y la poca adaptabilidad.
        let:es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local.
        const: se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.
 */

//Variable local
function funcionConVariableLocal() {
    var mensaje = "Esta es una variable local";
    console.log (mensaje);
}
//funcionConVariableLocal ();
//var mensaje = "holis"; 
//console.log(mensaje);

/*
En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error.
 */

//Variable Global
var mensajeGlobal = "Esta es una variable global";

function funcionConVariableGlobal () {
    console.log (mensajeGlobal );
}
funcionConVariableGlobal();//la estamos llamando

//En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal.



/////////////////////////
///Funciones anónimas//
////////////////////////

/*
Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones.
La diferencia principal de estas funciones es que se declaran sin un nombre.

    function () {
        console.log("Hola mundo"); Funcion anonima
    }
*/


const saludo = function () {
    console.log ("Hola mundo");
}
saludo();




///////////////
//Funciones flecha//
/////////////////
/*
 Una forma mas concisa de definir funciones anonimas. Se le llama flecha debido a su sintaxis que utiliza (=>)
 Basicamente, se tratra de reemplazar la palabra funtion y añadir => antes de abrir nuestras llaves
 */

const resta = (a,b) => a - b;
/*
    Esta funcion flecha es una forma mas corta de :
    const resta = function (a,b){
    return a -b;
    }
*/
console.log (resta(5,3));
 
