// Calculo de edad promedio de personas ingresadas al sistema.

let personasRegistradas = parseInt(prompt("¿Cuantas personas registradas existen en tu Ecommerce?"))
let acumularEdades = 0

 while ((personasRegistradas <=0) || (isNaN(personasRegistradas))) {
    personasRegistradas = parseInt(prompt("Dato equivocado, el número ingresado no puede ser negativo, igual a 0 o un caracter. Vuelva a intentarlo.¿Cuantas personas registradas existen en tu Ecommerce?"))
} 

for (i = 1; i <= personasRegistradas; i++) {
        let edad = parseInt(prompt("Ingrese la edad de la persona nº " + i))
        if (edad>0) {
        acumularEdades = acumularEdades + edad 
        }
        else {
            alert("Ingrese un dato valido")
            let edad = parseInt(prompt("Ingrese la edad de la persona nº " + i))
        }
    }
    alert("El promedio de edad de todas las personas registradas en tu Ecommerce es: " + (acumularEdades/personasRegistradas).toFixed(2))
    console.log("Gracias por utilizar este programa")

