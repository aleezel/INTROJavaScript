var celsius;

function conversionCaF (celsius){
    let resultadoF = (celsius *(9/5)) + 32;
    console.log(celsius + "°C son equivalentes a " + resultadoF + " °F.");
}

console.log(conversionCaF(15));