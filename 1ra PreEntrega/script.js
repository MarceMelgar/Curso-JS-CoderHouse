// Calculo de edad promedio de personas ingresadas al sistema.

let personasRegistradas = parseInt(prompt("¿Cuantas personas registradas existen en tu Ecommerce?"))
let acumularEdades = 0

if (personasRegistradas = " ") {
    alert("No ingresaste ningun número, vuelve a intentarlo recargando la página.")
}
else if (personasRegistradas < 0){
    alert("Es imposible que el número de personas registradas sea negativo, recargue la página y vuelva a ingresar un número positivo")
} 
else if (personasRegistradas === 0) {
    alert("Al menos tiene que existir una persona registrada para saber el promedio de edad de tu Ecommerce")
}
else {
    for (i = 1; i <= personasRegistradas; i++) {
        let edad = parseInt(prompt("Ingrese la edad de la persona nº " + i))
        acumularEdades = acumularEdades + edad 
    }

    console.log("El promedio de edad de todas las personas registradas en tu Ecommerce es: " + (acumularEdades/personasRegistradas).toFixed(2))
}

