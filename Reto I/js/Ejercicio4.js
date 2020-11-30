function ejercicio4(){
    const MIN=1;
    const MAX =12;
    let aleatorio= Math.floor((Math.random() * (MAX  - MIN + 1)) + MIN);
    console.log("Ejercicio4");
    console.log("Numero aleatorio: " + aleatorio);
    var mesAnio = aleatorio == 1? 31 :
                  aleatorio == 3? 31 :
                  aleatorio == 5? 31 :
                  aleatorio == 7? 31 :
                  aleatorio == 8? 31 :   
                  aleatorio == 10? 31 :
                  aleatorio == 12? 31 :
                  aleatorio == 4? 30 :
                  aleatorio == 6? 30 :
                  aleatorio == 9? 30 :
                  aleatorio == 11? 30 :
                  29;
    console.log("Mes del Añio: " + mesAnio);
    document.getElementById("verEjercicio4").innerHTML = "Numero aleatorio: " + aleatorio + " Mes del Añio: " + mesAnio;

}