// 01

/* let edad = parseInt(prompt("cual es tu edad?"))

console.log(edad)

if (edad >= 18) {
    console.log("Sos mayor de edad")
}
else {console.log("Sos menor de edad")}
 */

// 02

/* const pass = "coder"

let pidoPass = prompt("¿Cómo es tu password?").toLowerCase ()

if (pidoPass = pass) {
    console.log("Buena memoria")
}
else {console.log("Mala memoria, contraseña incorrecta")} */

// 03

/* let num1 = parseInt(prompt("Hagamos una división. 😃 Elije un número"))

let num2 = parseInt(prompt("Elije otro número"))

switch (num2) {
    case 0: console.log("Esta división no puede realizarse. Nada puede dividirse entre 0")
    break
    default: console.log(num1/num2)
    break
} */

// 04

/* let num = parseInt(prompt("Ingresa un número entero"))

if (num %2 == 0) {
    console.log("El número " + num + " es par")
}
else {
    console.log("El número " + num + " es impar")
}
 */

// 05

/* let edad = parseInt(prompt("Qué edad tenés? (Ingresa solo número)"))
let cobra = parseInt(prompt("Cuánto cobras? (Ingresa solo número)"))

if ((edad >= 16) && (cobra >= 1000)) {
    console.log("Tenés que tributar")
}
else {
    console.log("Te salvaste, aún no tenes que tributar")
} */

// 06

/* let sexo = prompt("¿Sos hombre o mujer?")
let nombre = prompt("¿Cuál es tu nombre?").toUpperCase ()

if (((sexo == "mujer") && (nombre < "M")) || ((sexo == "hombre") && (nombre > "N"))) {
    console.log("Perteneses al grupo A")
}
else {console.log("Sos parte del grupo B")} */

// 07

/* let renta = parseInt(prompt("Ingrese su renta anual (solo numeros)"))

if (renta >= 0 && renta < 10000) {
  console.log("Su tipo impositivo es del  5%")
} else if (renta >= 10000 && renta < 20000) {
  console.log("Su tipo impositivo es del  15%")
} else if (renta >= 20000 && renta < 35000) {
  console.log("Su tipo impositivo es del  20%")
} else if (renta >= 35000 && renta < 60000) {
  console.log("Su tipo impositivo es del  30%")
} else if (renta >60000) {
  console.log("Su tipo impositivo es del  45%")
} else {
  console.log("Su renta es imposible señor, no puede ser negativa su renta (eso se llama DEUDA")
} */


// 08

/* let edad = parseInt(prompt("Ingrese edad (solo numeros)"))

if (edad >= 0 && edad < 4) {
  console.log("Podés entrar gratis")
} else if (edad >= 4 && edad <= 12) {
  console.log("La entrada cuesta 5€")
} else if (edad >= 13 && edad <= 17) {
  console.log("La entrada cuesta 8€")
} else if (edad >= 18 && edad <= 120) {
  console.log("La entrada cuesta 10€")
} else {
  console.log("Por ser tan lonjebo, le regalamos la entrada, pero cuentenos su receta")
} */