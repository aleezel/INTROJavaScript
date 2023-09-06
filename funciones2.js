function exprimirLimones (cantidad){
    console.log("✧˚ · .Exprimiendo " + cantidad + " limones. · ˚✧");
    let jugoExtraido = cantidad *10; //Considera obtener 10 ml de jugo por cada limón
    console.log("Se obtuvo " + jugoExtraido + "ml de jugo de limón.");
    return jugoExtraido;
}

//Función para mezclar el jugo de limón con agua y azúcar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
    console.log("✧˚ · .Mezclando " + cantidadDeJugo + " ml de jugo de limón con " + cantidadDeAgua + " ml de agua y " + cantidadDeAzucar + " gramos de azúcar. · ˚✧");
}

//Función para servir limonada
function servirLimonada (){
    console.log("✧˚ · .Sirviendo la limonada en un vaso. · ˚✧");
    vasoDeLimonada = true;
}

//funci+on principal que prepare mi limonada
function prepararLimonada (cantidadDeLimon){
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); 
    servirLimonada;
}

//Llamamos a la función principal para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(5); //Llamado al programa

/*Crear un programa donde verifiquemos un proceso dentro de nuestro consultorio dental.*/