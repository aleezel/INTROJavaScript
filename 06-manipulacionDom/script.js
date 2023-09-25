/*
DOM (Document Object Model / Modelo de Objetos del Documento)


Cuando creamos páginas que usan HTML + CSS estamos creadon páginas estáticas (porque no tienen interactividad), cuando agregamos JS, nuestras páginas se convierten en sitios dinámicos (tienen interactividad).

El navegador  lee el documento HTML de arriba a abajo, de izq a derecha (renderización).
En ese periodo de tiempo don de hace flash el navegador, es como si se hiciera un a construcción rápida del arbol genealógico. 

Para que una página se renderice correctamente, se toma en cuenta el contenido, el peso de las imágenes, la conexión a internet, etc.

Cuando el documento se renderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de las etiquetas se consideran "hojas" (nodos).

Cuando hablamos del DOM y entendemos que se reprensenta como un árbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

¿Qué es un nodo?
Representación más básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    - Document: Nodo raíz, a partir del cual se derivan los demás nodos. Es el objeto a partir del cuál se puede acceder a cualquier elemento dentro de él. Todos los nodos derivan de este.

    - Element: Son nodos definidos por etiquetas html (div, p, h1, img, meta, head, script, etc.) ya sea que se vean o no se vean (etiquetas que interpreta el navegador)

    - Text: El texto que hay dentro de un elemento se condisera un noso, con la característica que es un nodo hijo.
        <p> sería el nodo padre, y el lorem dentro, el texto, sería el hijo

    - Attributes : los atributos de las etiquetas también se convierten en nodos. Son nodos que están asociados a un elemento y se pueden considerar también nodos hijos.
        Al añadirle un style a un elemento, hace que tarde más en cargar.

    - Comment: los coimentarios también son un nodo porque forman aprte del documento.


    ¿Para qué usamos JS en un DOM?
        - Agregar elementos HTML
        - Modificar elementos HTML
        - Borrar elementos HTML


    Cuando haces un rederizado, se hace una calca del código original para no modificarlo. Sino que, lo que modificas desde la consola, es la calca. Como si se le hiciera una copia con la impresora. O las fichas bibliográficas.

    js puede modificar el DOM a través de plantillas preestablecidas. Manipulación del DOM. 

*/

//todos los nodos parten del nodo document.
document.body.p

//Es como la analogía de las mamás cuando guardan una cosa dentro de otra y otra.
//caja.folderDocumentos.folderRojo.actadeNacimiento

/**
//Interfaz de Programación de Aplicaciones del Modelo de Objetos del Documento
//API = DOM + JS 

JS sería la hacha, las herramientas para talar o darle forma a nuestro árbol DOM.

 */


/* 
//Comenzamos a trabajar con los nodos de mi documento HTML.
1. Paso Guardar los elementos HTML en variables de JS (let, var, const)

Métodos de selección de elementos: permiten traer una etiqueta HTML

    - Métodos tradicionales
        document.getElementById("");
        document.getElementsByClassName("");
        document.getElementsByTagName("");


*/

//traer elemento por ID -tal-
let nombrePaciente = document.getElementById("nombrePaciente");

//Imprimió toda la etiqueta de HTML, desde el input
console.log(nombrePaciente);

//Toda la información quie podamos obtener por el formulario, es a través del value.
//Aquí obtenermos varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);


//Aquí obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);


//Todo lo quie empieze con el prefijo "ON" se tratará de eventos o animaciones.



/*
Métodos actuales

La única diferencia entre el querySelector y el getEkement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

    - document.querySelector
    - document.querySelectorAll

Si tenemos 5 contenedores padre, y solo me traigo 1. con el individual.

*/


//Aquí obtengo UN elemento por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aquí obtengo varios elementos por el selector


/*
Métodos para modificar elementos en su texto

    - innerHTML: esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. O sea, modificar el texto que tenga. Asignamos una cadena de texto y podemos modificar o eliminar el texto.
    s(Cuando YA existe un texto)


    - textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto.
    (CREAR un texto NUEVO)


*/

//Modificando el texto de un h1 con el innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi título";


//Creando un texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>mensaje de confirmación</p>"


/*
Crear el elemento
    - createElement
    -createTextNode
    - createComment

    -Poner el elemento
        - append
        - appendChild


*/

//Creando uin lemento con createElement
let imagen = document.createElement("img");

// Crear los atributos de un elemento
imagen.src = "https://media.giphy.com/media/l3DdGwSucoEG5VNVC/giphy.gif";
imagen.alt = "Foto de perrito feliz.";

// Obtener el lugar donde quiero poner mi imagen. Poner mi imagen en el contenedor de mensajeConfirmación
mensajeConfirmacion.appendChild(imagen);