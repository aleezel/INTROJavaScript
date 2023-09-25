/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.


*/


//guardando mi primer dato en LocalStorage


//Primero empezamos con el tipo de dato que queramos guardar local o sessionStorage
//localStorage.setItem(key, value)

localStorage.setItem("Nombre", "Alejandra");
localStorage.setItem("Apellido", "Piedra");

//Guardando carrito de compras
let carritoComprasFelipe = ["Sabritones", "CocaCola", "Tortillitas"];

localStorage.setItem("CarritoCompras", carritoComprasFelipe);


//Obtener la información alamacenada en mi localStorage
//localStorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//recuperando el carrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);

//borrar un elemento del localStorage
localStorage.removeItem("CarritoCompras");

//Conocer el largo o longitud del localStorage, todos los elementos guardados
//localStorage.length

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
//tienen que coincidir las llaves, si no, crea uno nuevo
localStorage.setItem("Apellido", "Gonzalez");