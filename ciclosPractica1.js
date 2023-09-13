/* 
Instrucción: Encontrar ciclos que se puedan aplicar al contexto del Consultorio Dental / Proyecto Integrador
While: Tratamiento de brackets, mientras los dientes están chuecos se sigue el tratamiento.
El objetivo es que no quede ningún diente por alinear durante todo el proceso de tratamiento de brackets.
Se tiene que el paciente tiene cierta cantidad de dientes chuecos.
Se realiza un bucle en el que por cada cita que asista, cada diente chueco se alínea y por ende (disminuye su valor). 
*/

let dientesTotalesPorAlinear = 0;
let dientesChuecos = 5;
while(dientesChuecos > dientesTotalesPorAlinear){
    //seguir tomando el tratamiento
    console.log("Sigue asistiendo a tus citas");
    //por cada cita que asista, se alinea un diente
    dientesChuecos--;
}


/*
Do-While: Para cuántas limpiezas limpiezas hay material por día, mientras haya material se hacen limpiezas

Queremos determinar si podemos seguir haciendo limpiezas o no en función del material disponible
Indicamos en una variable para cuántas limpiezas tenemos material disponible, ya sea que lo indiquemos directamente en la variable o lo pidamos al usuario
Hacemos limpiezas mientras no superemos el número de limpiezas ya establecido

*/

let limpiezasDisponibles = 5;//O también let limpiezasDisponibles = prompt(“¿Para cuántas limpiezas tienes material hoy?”);
let limpiezas = 0;
do{
    //hacer limpieza
    limpiezas++;
    if (limpiezas == limpiezasDisponibles){
        console.log("Última limpieza hecha, se acabó lo que se vendía.");
    }
} while (limpiezas < limpiezasDisponibles);


/*
For: Para poder atender a cada paciente, limpiar los utensilios utilizados.
Se tienen 5 utensilios sucios que tienes que limpiar antes de recibir a cada paciente.
Si el número de utensilios es mayor a 0.
Por cada iteración se tiene que decrementar hasta que no quede ninguno sucio.

*/

function checarUtensilios(){
    //Los utensiliosSucios son 5, si lo sutensilios son mayores a 0, decrementar utensiliosSucios.
    for(var utensiliosSucios = 5; utensiliosSucios > 0; utensiliosSucios--){
        console.log("Esperando a que se limpien " + utensiliosSucios + " utensilios sucios…");   
    }
    //Hasta que se terminen de limpiar todos, o sea que no sea mayor a cero, indicar que ya no quedan más utensiliosSucios
    console.log("Ya no quedan más por limpiar");
}

//Ejecutar función
checarUtensilios();



//Instrucción: Encontrar ciclos que se puedan aplicar al contexto del Proyecto Integrador


let articulosDisponibles = 6;
while(articulosDisponibles != 0){
	console.log("Publicación activa hasta agotar existencias");
	articulosDisponibles--;
}
