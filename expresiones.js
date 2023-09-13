console.log("Estoy vivvooooooo");


/*
 Operador

    Un elemento que nos permite realizar una operacion entre dos o mas elementos.


    - Operadores aritmeticos (+, -. *, /)
    - Operadores de asignacion (=, / asignacion)
    - Operadores logicos (&&, ||, !)
    - Operadores de comparacion (<,>, <=, >=, ==. === )



 Operadores aritmeticos 
    Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas.

    Suma            +
    Resta           -
    Multiplicación  *
    División        /
    Residuo/modulo  (lo que queda de hacer la división)
    Exponenciación  **
    Incremento      ++
    Decremento      --
*/



var celsius;

function conversionCaF (celsius){
    let resultadoF = (celsius *(9/5)) + 32;
    console.log(celsius + "°C son equivalentes a " + resultadoF + " °F.");
}

console.log(conversionCaF(45));

/*
Primero, declrar la operación, luego declarar la operación en su propia variable, y luego mandarla a llamar desde el console log. Porque pueden llegar a ser borradas por accidente.

Las variables deben ser lo más específicas posible

Jerarquía de operaciones: primero divisiones, luego multiplicación, luego suma y resta.

Importa la jerarquía de llaves y corchetes. 

Ej.




Simpre procurar hacer un incremento o decremento DENTRO de una variable. Porque fuera, puede cambiar las cosas.
*/

let numero1 = 10;
let numero2 = 2;


//Nota: cuando usamos incrementos el valor se reasigna (suma y reasidnga en la misma operaci´ón)
incremento = numero1++;
decremento = numero2--;

//Incremento de número por bloques de 10 números. 
numero1 += 10; //suma y reasigna al mismo tiempo.


/*
    Operadores de comparación
        operadores que nos permiten comprara dos datosm y al hacerlo obtrendremos un valo rbooleando (true or false)

        Mayor qué           >
        Menos qué           <
        Mayor o igual qué   >=
        Menor o igual qué   <=
        Igual                =
        Estrictamente igual  ===            compara valor y tipo de dato
        Diferente            !=
        No es estrictamente igual !==       compara valor y tipo de dato

        El pollito habre el piquito donde hay más comida.

        PREGUNTA DE ENTREVISTA
        Estrictamente igual  ===            compara valor y tipo de dato
        No es estrictamente igual !==       compara valor y tipo de dato
        13 == "13"  true
        13 === "13"  false

*/


/*
Operadores lógicos
Nos devuelven un resultado a partir de que se cumpla (o no) una condición, el resultado es booleano (true or false)

    - AND &&: sirva para dettermias si dos expresiones son verdaderas. Si ambas sojnj verdaderas, el resultado es verradero; Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsos, todo el falso.



dos negaciones es una afirmaci'on, negando la negación. (no * no = sis)
!no me gusta Java

!Vamos a comer

*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

//si una de las dos es falsa, todo es falso
if(tengoUnCrush  && miCrushMeQuiere){
    console.log("Estoy feliz.");
} else{
    console("A llorar a la llorería.");
}

/*
    OR //
        Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero, si las dos son falsas,todo es falso.

        Una u otra.
*/

if(hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido");
}


// NOT (!)  Rregresa lo contrario de lo que evaluamos
//Como MAX, 3 condiciones anidadas, en el siguiente ejemplo hay DOS

// if(edadFelipe >= 18 && dineroFelipe = !0) || (edadFelipe >=18 && amigosQueInvitan = true){}


//ESTE CÓDIGO ESTÁ INCOMPLETO, puede causar errores (esplicación de anidación de operadores lógicos)
let escenario1 = (edadFelipe >= 18 && dineroFelipe = !0);

let escenario2 = (edadFelipe >=18 && amigosQueInvitan = true);

if(escenario1 || escenario2){

}