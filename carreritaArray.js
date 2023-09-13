//__________________________________________________________________________________

//Función para imprimir una línea divisoria y tener una separación de los datos que ejecuto
function imprimirDivision(){
    console.log("_______________________________________________________")
}

imprimirDivision();

//__________________________________________________________________________________




//Corredores y su posición
let carreritas = [
    {posicion: 1, corredor: "Roberto"},
    {posicion: 2, corredor: "Andrea"},
    {posicion: 3, corredor: "Jorge"},
    {posicion: 4, corredor: "Ramiro"},
    {posicion: 5, corredor: "Sofía"},
]

console.log("A continuación... Los corredores y sus respectivas posiciones iniciales " + carreritas.posicion, carreritas.corredor);

console.log("Después de tres vueltas...")

//carreritas[0] = {posicion: 5, corredor: "José"};

carreritas[1] = {posicion: 4, corredor: "Andrea"};
carreritas[2] = {posicion: 2, corredor: "Jorge"};
carreritas[3] = {posicion: 1, corredor: "Ramiro"};
carreritas[4] = {posicion: 3, corredor: "Sofía"};
carreritas.shift();
carreritas.unshift(5, "José");

carreritas.sort((x, y) <= x.posicion - y.posicion);

console.log("ALTO! Tenemos un ganador. A continuación los resultados de la carrera... " + carreritas);

//Los métodos están asociados a objetos, son funciones, pero un método lo hace método al estar asociado a una acción a un objeto.

//Para checar https://es.stackoverflow.com/questions/511479/como-se-accede-a-un-array-de-objetos-en-javascript https://www.techiedelight.com/es/sort-array-of-objects-javascript/

