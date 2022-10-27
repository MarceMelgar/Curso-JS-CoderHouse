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

let num = parseInt(prompt("Escribe un número entero positivo"))

function factorial(num) {
    if (num < 0) 
        return -1;
  
    else  if (num == 0) return 1; 
    else {
        return (num * factorial(num-1))
    }
}

factorial(num)

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