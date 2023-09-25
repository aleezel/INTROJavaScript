/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.


    Clase:

    Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.


*/

//creando mi primera clase

//deberíamos aterrizar lo más general posible aquí
class persona {
    //Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";
    //rol = ""; //tipo de persona que manejo (paciente, doctor, recepcionista)

    // 3.  Defino un constructor que tomará los atributos como "material" para la instancia o creación de mis objetos
    //El constructor en una función especial, cuya función es la de construir o instanciar objetos

    //Al pasar los atributos como parámetros, es importante pasarlos con el mismo orden con el que se declararon
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }



    //2. Métodos o comportamientos (funciones)
    //Para definir los métodos de mi objeto, ya no utilizar la palabra funciton
    hablar(){
        console.log("Hola, estoy hablando...")
    }//Ciere de método hablar

    dormir(){
        console.log("zzzZZZZzzZZ")
    }//Ciere de método dormir

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
    }//Ciere de método mostrar info
    

}//Ciere de clase persona

/*

Instancia de objetos del tipo persona

Sintaxis básica de una instancia

Variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos);


*/

//innstaciación o materialización de una persona que viene de una plantilla ya declarada. Esta información no se registra en la plantilla base, y así permite registrar infinita cantidad de nuevas personas.

let persona1 = new persona("Felipe", "Maqueda", "31", "felipemaqueda@mail.com", 5512345678);
let persona2 = new persona("Alejandra", "Piedra", 21, "alepiedra@mail.com", 9933001122);
let persona3 = new persona("Finn", "Mertens", 17, "finnelhumano@at.com", "1234567890");

//imprimir el objeto completo
console.log(persona1);

//imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//  INVOCAR EL MÉTODO del objeto
persona1.dormir();
persona2.mostrarInfo();

//  Imprimir dos datos en una misma consola
console.log(persona1.nombre, persona1.apellido);


/*

Existen 4 pilares de la POO que nos permiten ampliar caracterísitcas y dotar de funcionalidades y operaciones a nuestro código

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstracción


*/


//Creando una nueva clase para aplicar la herencia (extends)

//El uso de extends es para extender los atributos y métodos de la clase padre PERSONA y pasarle todo eso al HIJO paciente.
//Por ejemplo, en JS no se puede heredar ni extender de DOS padres, solo de uno

class paciente extends persona {
    //1. Definición de atributos o propiedades
    doctorAtiende = "";
    historialMedico = "";
    alergias = "";

    // 3. Generación de constructor, que te vas a traer cosas de la clase superior
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono);
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    // 2. Métodos, aunque no escribamos los métodos heredados, aún así se agregan
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial médico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }
}

//si no especificamos el tipo de dato, lo toma de forma genérica. ¿Qué tipo de SCOPE se genera o qué característica se le genera?

//Las funciones REGEX validan en dato que estamos mandando

//No heredar de más de 3 clases, porque sino, sería una mala práctica


//Instancia de un paciente
let paciente1 = new paciente("Adrian", "Piedra", 24, "adrianpiedra@mail.com", "9900112233", "Dr. Simi", "No tiene", "Penicilina");

//Imprimir objeto paciente
paciente1.mostrarInfo;
paciente1.dormir;


//Diferencias entre un objeto literal (normal), y un JSON


//Todas las claves y los valores van dentro de comillas
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}


/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

Atributos:
    - nombre
    - nota calificaci+on

Método: 
    - Constructor
    - Método evaluación (si aprueba o no)
    - Método imprimirInfo (nombre y la nota)

Lógica del negocio
    - If para evaluar la nota
    - Recuperamos la información por medio de un prompt
    - Generamos 3 instancias para probar mi código (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)


*/



//creación de la clase en 3 pasos
class alumno {

    //1. Atributos o propiedades
    nombreAlumno;
    notaAlumno;


    // 3. Constructor

    //LA palabra THIS generalmente solo se usa en el constructor para asignar los valores a los que corresponden
    constructor(nombreAlumno, notaAlumno){
        this.nombreAlumno = nombreAlumno;
        this.notaAlumno = notaAlumno;
    }


    // 2. Métodos
    //Método general, un m+etodo que no requiere personalización porque aplica para cualquier objeto

    evaluarNota(notaAlumno){
        if(notaAlumno >= 6){
            console.log("Aprobado");
        }else{
            console.log("Reprobado");
        }
    }

    //PARA MOSTRAR Info es mejor no pasarlos como parámetros, sino simplemente invocarlos con .this
    mostrarNota(){
        console.log("Nombre del alumno: ", this.nombreAlumno);
        console.log("Nota del alumno: ", this.notaAlumno)
    }
}

let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);

alumno1.evaluacion(alumno1.notaAlumno);
alumno2.evaluacion(alumno2.notaAlumno);
alumno3.evaluacion(alumno2.alumno3);