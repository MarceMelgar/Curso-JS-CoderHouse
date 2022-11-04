// 01 -Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

/* let palabra = prompt("Escribe una palabra (cualquiera)")

for (i = 0; i < 10; i++) {
    console.log(palabra)
} */

// 02 - Escribir un programa que pregunte al usuario su edad y 
//      muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).

/* let edad = parseInt(prompt("Qué edad tenés? (Ingresa solo número)"))

for (i = 1; i <= edad; i++) {
    console.log("Cumpliste " + i + " años")
} */

// 03 - Escribir un programa que pida al usuario un número entero positivo y muestre 
//      por pantalla todos los números desde 1 hasta ese número separados por comas.

/* let i = 1
let numPositivo = parseInt(prompt("Escribe un número entero positivo"))

while (i <= numPositivo) {
    console.log(i + ",")
    i++
} */


// 04 - Escribir un programa que pida al usuario un número entero positivo y muestre 
//      por pantalla la cuenta atrás desde ese número hasta cero separados por comas.

/* let i = 0
let numPositivo = parseInt(prompt("Escribe un número entero positivo"))

while (i <= numPositivo) {
    console.log((numPositivo-i) + ",")
    i++
} */

// 05 - Escribir un programa que pregunte al usuario una cantidad a invertir, el interés 
//      anual y el número de años, y muestre por pantalla el capital obtenido en la inversión 
//      cada año que dura la inversión.

/* let i = 1 
let aInvertir = parseInt(prompt("¿Cuánto querés invertir en dólares (solo número por favor)?"))
let interesAnual = parseInt(prompt("¿A qué tasa de interés anual (solo número por favor?"))
let losAños = parseInt(prompt("¿Durante cuantos años querés que se mueva tu inversión (solo número por favor)?"))

while (i <= losAños) {
    console.log("El año " + i + " ganarías " + ((aInvertir*interesAnual)/100))
    i++    
} */

// 06

/* let numPositivo = parseInt(prompt("Escribe un número entero positivo"))

for (let i = 1; i <=10 ; i++) {
    console.log(numPositivo + " x " + i + " = " + (numPositivo*i))
} */

// 07 - Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
//      pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

/* let password = "Jav@Script"
let preguntoPassword 

let seguiProbando

do {
    preguntoPassword = prompt("Ingresa tu contraseña")
    seguiProbando++
} while (password !== preguntoPassword);

if (password = preguntoPassword) {
    console.log("Ingreso habilitado, bienvenido")
}
 */

// 08

/* let numIngresado = parseInt(prompt("Escribe un número entero positivo"))
let esPrimo = true

for (let i = 2; i < numIngresado/2; i++) {
    if (numIngresado % i === 0) {
            esPrimo = false;
    }
}

if (esPrimo) {
    console.log("El número " + numIngresado + " es primo")
} else {
    console.log("El número " + numIngresado + " no es primo")
}
 */