// 01 - Escribir una función que muestre por pantalla el saludo ¡Hola amiga!
//      cada vez que se la invoque.

/* function saludar() {
    console.log("¡Hola amiga!");
}

saludar()
 */
// 02 - Escribir una función a la que se le pase una cadena <nombre> y 
//      muestre por pantalla el saludo ¡hola <nombre>!.

/* let nombre = prompt("¿Tu nombre?")

function saludar() {
    console.log("¡Hola " + nombre + "!");
}

saludar() */

// 03 - Escribir una función que reciba un número entero positivo y 
//      devuelva su factorial.

/* let num = parseInt(prompt("Escribe un número entero positivo"))

function factorial(num) {
    if (num < 0) 
        return -1;
  
    else  if (num == 0) return 1; 
    else {
        return (num * factorial(num-1))
    }
}

factorial(num) */

// 04 - Escribir una función que calcule el total de una factura tras aplicarle el IVA. 
//      La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. 


/* const sueldo = 23500
const iva = sueldo * 0.21

function sumar (sueldo, iva) {
    console.log(sueldo + iva)
}
let resultado = sumar(sueldo, iva)

console.log(resultado) */

// 05 - Escribir una función que calcule el área de un círculo y otra que calcule el volumen de un cilindro usando la primera función.


/* function areaCirculo (pi,radio) {
   console.log(`El área del círculo, cuyo radio es ${radio} es: ${(pi*Math.pow(radio,2))}`);
}

const pi = Math.PI
let radio = parseFloat(prompt("Ingresar el radio"));

function areaCirculo() */

// 06 - Escribir una función que reciba una muestra de números en una lista y devuelva su media.

/* function promedio(listaNumeros) {
    let i=0, sum = 0, largoLista = listaNumeros.length
    while (i < largoLista) {
        sum = sum + listaNumeros[i++]
    }
    return sum / largoLista
}

let listaNumeros = [1, 5, 3, 7, 24, 18]
let p = promedio(listaNumeros)
console.log(p) */

// 07 - CREATIVIDAD: escribir una función que resuelva un pequeño problema y cumpla con las siguientes carácteristicas...
//      1. Que no reciba parámetros y no devuelva ningún dato. 
//      2. Que reciba parámetros y no devuelva ningún dato.
//      3. Que no reciba parámetros y devuelva algún dato.
//      4. Que reciba parámetros y devuelva algún dato.