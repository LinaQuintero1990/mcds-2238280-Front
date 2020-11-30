function ejercicio3(){
    const MIN=0;
    const MAX=10;
    const NUMERO1=8;
    const NUMERO2=4;
    let resultadoFinal;

    let aleatorio= Math.floor((Math.random() * (MAX  - MIN + 1)) + MIN);

    if(aleatorio <5){
        resultadoFinal= NUMERO1 - NUMERO2;
    }else{
        resultadoFinal = NUMERO1 * NUMERO2;
    }
    console.log("Ejercicio3");
    console.log("Numero aleatorio: " + aleatorio);
    console.log("Resultado Final: " + resultadoFinal);

    document.getElementById("verEjercicio3").innerHTML = "Numero aleatorio: " + aleatorio + " Resultado Final: " + resultadoFinal;
}