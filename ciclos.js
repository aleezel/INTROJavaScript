/*

Condiciones
    Alteran el orden natural del código de estructura de control
        Controlar la ejecución del codigo


Ciclos o bucles (loops)
    También conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de código de forma repetida, hasta que se cumpla una condición específica.

    Importante usar ciclos para automatizar tareas repetitivas.
    Para hacer más eficiente el trabajo.

    En JS existen los siguientes ciclos:
        - While:
        - Do while
        - For


iteración



While
    Ejecuta un bloque de código mientras se cumpla una con

    while(condición){
        //código que se ejecuta
    }

    While: Primero pregunta y si es verdadero ejecuta.


*/

//Siempre habrá dos opciones - true or false
while(miCrushMeQuiere){
    console.log("Seré feli.")
}


//Ejemplo de consultorio dental

let capacidadPacientes = 10;
let pacientesEnConsultorio = 15;

while (pacientesEnConsultorio < capacidadPacientes){
    //seguiré dando servicio
    console.log("Seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
}



/*
    Do while / hacer mientras
    Se ejecuta la instrucción mientras sea verdadero (pedir perdón por ir a la fiesta)

    El bucle do while se diferencia del while yua que aquí se ejecuta la instrucción al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

    do{
        //codigo a ejecutar
    }while(condición)


    Do While: Primero ejecuta, despues pregunta y si es verdadero, vuelve a ejecutar

*/

var contadorPacientes = 0;

do{
    var nombre = prompt ("Ingresa el nombre del paciente");
    //si se ingresa un nombre
    if (nombre != "") {
        //aumenta 1 a 1 mis pacientes
        contadorPacientes ++;
    }
//mientras el contador sea menor a 15 o confirme que sea ingresar otro paciente
}while (contadorPaciente <15 && confirm("quieres registrar otro paciente?"));

console.log("Número total de pacientes: ", contadorPacientes);


/*

    For(para)
        Se utiliza cuando conocemos el número exacto de iteraciones que vamos a realizar.
        Consiste de 3 partes fundamentales:

            -inicialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
            - condición: es el detonande que verificamos antes de cada iteración, para saber si se sigue ejecutando o no (siempre y  cuando sea verdadera)
            - expresión de iteración (contador): tiene la finalidad de modificar la varianle de inicio y poder tener un punto de cierre.

            for(inicialización; condición; presión de iteracion){
                //bloque de código a ejecutar
            }
        
        Ej. para seguir registrando uin paciente tras otro
*/

for (var valorInicial = 0; valorInicial<5; valorInicial++){
    console.log(valorInicial);
}

//version más comercial. Cae en una redundancia o error de lógica
for(var i = 0; i<5; i+=5){
    console.log(i);
}

//Consultorio dental
//Código de Alan
let cantidadDeCitasDiarias = 5;

//primero se establece el número de partida, hasta llegar al número indicado, o sea 5,de ahí, se va a incrementar hasta llegar a la 1
for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    console.log(i);
}

/*Pregunta de quiz
cual es la impresión de pantalla del sigueinte bucle.
Ver desde donde se empieza

*/