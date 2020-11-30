function ejercicio2(){
    const NUMERO1= 4;
    const NUMERO2 = 3;

    var resultadorResta= NUMERO1 - NUMERO2;
    var resultadoMultiplicacion= NUMERO1 * NUMERO2;
    console.log("Ejercicio2");
    console.log("El resultado de la resta es: " + resultadorResta + " Y el de la Multiplcación: " + resultadoMultiplicacion);
    document.getElementById("verEjercicio2").innerHTML = "El resultado de la resta es: " + resultadorResta + " Y el de la Multiplcación: " + resultadoMultiplicacion;
} 