/*
Retomando las APIs...

    - APIs internas (API DOM, localStorage, Drag and Drop): son todas aquellas APIs que vienen por default en el navegador.

    - APIs externas (Google MAps, FakeStore API, API PayPal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.

    Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.

    Ventajas de utilizar una API
        - Reestructurar y organizar los sistemas de forma que sean más sencillos de usar.
        - Permiten que los sistemas sean más robustos
        - Reducen los costos de mantenimiento 
        - Permite que los sistemas sean escalables
        (Si tenemos una tiendita, podemos ver como incluir una pasarela de pago como PayPal, y así empezar a ganar nuestro propio dinero)



    Asincronía

    

    Sincronismo
        Necesiotamos terminar nuestra tarea para empezar otra, se puede decir que JS opera de manera síncrona. Porque se ejecuta de arriba a abajo, izq a derecha)

        Hablar de sincronismo, es como si tuvieramos dos carriles en la carretera, tenemos que esperar a que el carro de adelante avance para que podamos avanzar nosotros.

        Operación Bloqueante.

        Operación autobloqueante y sincrona
            Por ejemplo, cuando vas a una taquerí aa comprar, no te pueden despachar hasta que terminen con la orden que llegó primero que tú.

    
*/

//Ejemplo de una operación síncrona 
console.log("Inicia mi operación síncrona");

function dosSincronica(){
    console.log("dos");
}

function unoSincronico(){
    console.log("uno");
    dosSincronica();
    console.log("tres");
}

console.log("Finaliza mi operación sincrona.");

//Funciones que dependen una detrás de la otra. 

//Los casos donde me conviene tener operaciones sinconas, son lextura de arraysm, uso de lagunos métodos de arrayas, condicionales, ciclos, ejecucución de funciones "normales". Como cuando  a la impresora se le agota una tinta y ya no quiere imprimir, aunque las otras tengan.

//Ejemplo JS Asincrono.

console.log("Inicia mi operación asíncrona");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");

}

unoAsync();
console.log("Finaliza mi operación asíncrona.");
//El TimeOut es, después de cuánto tiempo se ejecuta esa tarea, mientras lo demás sigue su curso natural.


/*

    Mecanismos para manejar la asincronia
    
    Para controlar la asincronía en JS, podemos usar alguno de estos mecanismos:

        - Callback
            La forma más clásica de manejar la asincronía,. se le conoce como "llamada de vuelta". Básicamente, es pasar una función como parámetro de otra función, y se ejecutan una vez que se cumpla la condición esperada.

            Implementa una funnción

            //Método .map de los arrays.
            La expresión más grande de callback.
            Usar una función como parámetro en una función más grande.
            Ejecuta y modifica todos los elementos del array.

            Ambas son dependientes. Si no se ejecuta el map, no se ejecuta lo de adentro.
            Eso es lo malo de los callbacks, se utilizaban en cosas sencillas. Después quisieron hacer cosas más grandes, pero con el paso del tiempo no funcionó.

            Callback Hell. No recomendable.


        - Promesas
            Son objetos que representan un valor al momento de conectar con el servidor.

            Son objetos que guardan una respuesta favorable ante los recursos.

            Como su nombre lo indica, una promesaes algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si noi se cumple. La ventaja que tienen las promesas, es que no se anidan, en una sola función podemos manejar ambas situaciones.

            Independientemente de la respuesta, buena o mala, podamos seguir haciendo cosas. Porque lo demás ya se cargó.
            Ejemplo de los novios que se hicieron promesas y que ya no van a seguir juntos.

            Como coin una computadora, estoy haciendo una soliciutd con el método GET de una foto de perritos al servidor.
            El servidor, a través de una cajita, pondrá la foto del perrito si la encuentra, o sino, te pongo otra cosa.
            Oye... no encontré una foto de perrito, pero te pongo un 404. Todo se almacena en una cajita, llamada promesa.
            La computadora hace intercambios con el servidor de esta cajita.
            Es como esos elevadores donde ponen comida o cosas

            La respuesta (1), que es un objeto, se guarda dentro de otro objeto (o caja)(0). No se manda sueltop para evitar que otro venga a chismear qué es lo que estás pidiendo.
            Si tengo la respuesta(1), puedo acceder a otras cosas(2).

            promesa.perrito.ladrido
              (0)     (1)     (2)

            Las promesas tienen 3 posibilidades:

                - pending: estado inicial, es cuando se crea la promesa. Aquí aún no hay resultado
                - Fullfiled: cuando la operación asíncrona se resuelve con éxito (resolve)
                - Rejected: cuando la operación asíncrona falla (reject)


        - Async/await


*/



//Función especial para consumir APIs y manjear promesas

//Es como un if pokevolucionado.
//Instrucción de la coneción a mi servidor
fetch("https://fakestoreapi.com/products/1")

//Entonces, cacho

//Dos escenarios, (obtengo respuesta, o no obtengo respuesta)

//Método then para encontrar cosas buenas
.then(datos => { //cuando la promesa se resuelve, ejecuto esta función
    console.log(datos);

    return datos.json();//Convertir la respuesta
    
})

//Método catch para encontrar cosas malas
.catch (error =>{
    console.log("Error, no encontramos el producto");
})


/*

Sintaxis del fetch (con promesas)

fetch (url a consumir)
    .then (response => response.text()) //manejo la respuesta
    .then (datos => console.log(datos)) //manejo el dato

    .catch(eroror => console.log(error));


*/

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//Imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus métodos
conexion

//SE USA PRIMERO EL PRIMER THEN PARA VALIDAR
//usar el método then para manjear la respuesta (lo relleno con la respuesta)
.then(function (resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})


//SE USA PRIMERO EL PRIMER THEN PARA ENTREGAR
//Uso el método then para manejar el producto (lo relleno con la info del producto)
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//En caso de que no se conecte, uso el método catch para manejar el error (lo rellenamos para que la caja no llegue vacía)
.catch(function (error){
    console.log("Error", error);
})

let respuestaServidor

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}


//producto como objeto JSON
let productoJSON = {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679
    }}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);


//producto como respuesta de un servidor en formato plano (texto)
let producto = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}



console.log(productoJSON);

//producto como objeto JSON



//Revisar información de un objeto 
console.log(productoJSON.price);


//Objeto JSON que voy a mandar a un servidor
let paciente = {
    nombre: "Felipe",
    edad: 31,
    estatus: "Registrado"
}
console.log(paciente);

//Necesito convertidor a una cadena de texto para que el servidor lo lea
let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);


//Cuando al servidor le cae la información de golpe, él se encarga de clasificar. Lo manda en formato JSON, para que JS lo pueda leer. Cuando llega como JSON, lo manda como tipo cadena para que el servidor lo pueda leer.

let pacienteServidor = '{"nombre":"Felipe", "edad":31, "estatus":"Registrado"}';

let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);

//Si mando un JSON al servidor, lo stringifeo
//Si recibo un string del servidor, lo parseo

function generarTarjetaProducto(producto){

    //crear elemento
    createElement(img);
    img.src
}

//traer elementos de la pokeAPI o de cuaalquier itra API y promesas.

//Investigar programación orientada a objetos, qué es un pilar, por qué es orientada a objetos.


buttonEnviarProducto.addEventListener("click")

//Método POST para envuiar un nuevo producto a nuestra BD de la FakeStoreAPI
fetch ('https://fakestoreapi.com/products',{//end point
            method:"POST", //especidifar el tipo de método
            body:JSON.stringify(//instrucción para serializar el cuerpo de mi solicitud (para la insterpretación del servidor)
                {
                    title: 'Sopa Maruchan Habanero',
                    price: 15.5,
                    description: 'Deliciosa Sopa Maruchan de Habanero',
                    image: '',
                    category: 'Sopas Instantáneas'
                }
            )

})
.then(res=>res.json())//método para la respuesta(saber que mi producto llegó con bien al servidor)
.then(json=>console.log(json))//impresión en consola para revisar la info

//Método POST para envuiar un nuevo producto a nuestra BD de la FakeStoreAPI
fetch ('https://fakestoreapi.com/products',{//end point
            method:"PUT", //especidifar el tipo de método
            body:JSON.stringify(//instrucción para serializar el cuerpo de mi solicitud (para la insterpretación del servidor)
                {
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )

})
.then(res=>res.json())//método para la respuesta(saber que mi producto llegó con bien al servidor)
.then(json=>console.log(json))//impresión en consola para revisar la info