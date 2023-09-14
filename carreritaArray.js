//__________________________________________________________________________________

//Función para imprimir una línea divisoria y tener una separación de los datos que ejecuto
function imprimirDivision(){
    console.log("_______________________________________________________")
}

imprimirDivision();

//__________________________________________________________________________________


//Esta fue mi primera idea pra resolver el problema y aunque me trabé, quise seguir intentando con esa manera.

//Corredores y su posición
let carreritas = [
    {posicion: 1, corredor: "Roberto"},
    {posicion: 2, corredor: "Andrea"},
    {posicion: 3, corredor: "Jorge"},
    {posicion: 4, corredor: "Ramiro"},
    {posicion: 5, corredor: "Sofía"},
]

console.log("A continuación... Los corredores y sus respectivas posiciones iniciales");
carreritas.forEach((corredor) => {
    console.log("En el lugar " + corredor.posicion + " está el competidor " + corredor.corredor)
});

console.log("Después de tres vueltas...");
console.log("LAS POSICIONES FINALES");

//carreritas[0] = {posicion: 5, corredor: "José"};

carreritas[1] = {posicion: 4, corredor: "Andrea"};
carreritas[2] = {posicion: 2, corredor: "Jorge"};
carreritas[3] = {posicion: 1, corredor: "Ramiro"};
carreritas[4] = {posicion: 3, corredor: "Sofía"};
//Quitamos a Roberto
carreritas.shift();
//Agregamos a José y su posición
let jose = {
    posicion: 5,
    corredor:"José"
}
carreritas.unshift(jose);

//Ordenar objetos que están dentro del array. Se le puede meter una función para definir cómo ordenarlas.
//La función recibe dos parametros que se pueden llamar como sea. Es para identificar cuál va antes y cuál va después en la comparación
carreritas.sort((a, b) => {
    if (a.posicion < b.posicion){
        return -1;
    }
    if (a.posicion > b.posicion){
        return 1;
    }
    return 0;
})



//forEach para imprimir los corredores, que se pasan al forEach a través del primer parámetro, y de ahí, podemos indagar más sobre los valores de ese parámetro.
carreritas.forEach((corredor) => {
    console.log("En la posición " + corredor.posicion + " se encuentra el competidor " + corredor.corredor)
});

//Los métodos están asociados a objetos, son funciones, pero un método lo hace método al estar asociado a una acción a un objeto.

//Para checar https://es.stackoverflow.com/questions/511479/como-se-accede-a-un-array-de-objetos-en-javascript https://www.techiedelight.com/es/sort-array-of-objects-javascript/


//__________________________________________________________________________________
imprimirDivision();
//__________________________________________________________________________________
