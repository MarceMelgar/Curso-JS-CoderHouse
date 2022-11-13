/* function mostrarNombre(nombre, apellido, edad) {
  if (!nombre || !apellido || !edad) {
    console.log("ERROR")
  } else {
    console.log(nombre + " " + apellido + " tiene " + edad + " años.")
  }
    
}

let nombreIngresado = prompt("Ingrese nombre")
let apellidoIngresado = prompt("Ingrese apellido")
let edadIngresado = parseInt(prompt("Ingrese edad"))

mostrarNombre(nombreIngresado, apellidoIngresado, edadIngresado)
mostrarNombre("Juan", "Gomez", 65)
mostrarNombre("Carla", "Martinez", 53) */

/* function sumar(primerNumero, segundoNumero) {
  console.log(primerNumero + segundoNumero)
}
let resultado = sumar(5, 8)
console.log("resultado: ", resultado) */

// (5 + 8) / (9 - 4)
/* function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero
  return resultado
}

const sumar = (primerNumero, segundoNumero) => {
  let resultado = primerNumero + segundoNumero
  return resultado
}

function restar(primerNumero, segundoNumero) {
  let resultado = primerNumero - segundoNumero
  return resultado
}

const restar = (primerNumero, segundoNumero) => {
  let resultado = primerNumero - segundoNumero
  return resultado
}


let resultado = sumar(5, 8) / restar(9, 4)
console.log("resultado: ", resultado) */



// nombre - apellido
/* function nombreCompleto(nombre, apellido) {
  let resultado = nombre + " - " + apellido
  return resultado
}


let resultadoDeLaFuncion = nombreCompleto("Juan", "Perez")
console.log(resultadoDeLaFuncion)

// la siguiente linea tira error ya que resultado fue declarado como variable local dentro de la funcion nombreCompleto
console.log(resultado) */

/* function pedirUser() {
  usuarioIngresado = prompt("Ingrese usuario")
  return usuarioIngresado
}

function pedirPassword() {
  contraseniaIngresada = prompt("Ingrese contraseña")

  return contraseniaIngresada
}

function resultadoFinal(intentos) {
  if (intentos < 3) {
    alert("BIENVENIDO/A")
  } else {
    alert("Vuelva a intentar más tarde")
  }
}

function iniciarSesion(userDB, passwordDB ) {
  let intentosRealizados = 0
  do {
    userIngresado = pedirUser()
    passwordIngresada = pedirPassword()
    intentosRealizados++
  } while ((userDB !== userIngresado || passwordDB !== passwordIngresada) && intentosRealizados < 3)
  resultadoFinal(intentosRealizados)
}

let userDB = "juan@gmail.com"
let passwordDB = "Juan123"
let userIngresado
let passwordIngresada

iniciarSesion(userDB, passwordDB) */



// EJERCICIO SIMPLE SIN FUNCIONES
/* let numero1 = parseInt(prompt("Ingrese numero 1"))
let numero2 = parseInt(prompt("Ingrese numero 1"))

let resultado = numero1 + numero2
console.log(resultado) */


// MISMO EJERCICIO MODULARIZADO CON FUNCIONES
function pedirNumero() {
  let numeroIngresado = parseInt(prompt("Ingrese numero 1"))
  return numeroIngresado
}

/* const calcularResultado = (num1, num2) => {
  return num1 + num2
} */
const calcularResultado = (num1, num2) => num1 + num2

/* function calcularResultado(num1, num2) {
  let resultado = num1 + num2
  return resultado
} */

let numero1 = pedirNumero()
let numero2 = pedirNumero()

let resultado = calcularResultado(numero1, numero2)
console.log(resultado)

resultado = calcularResultado(2,6)
console.log(resultado)