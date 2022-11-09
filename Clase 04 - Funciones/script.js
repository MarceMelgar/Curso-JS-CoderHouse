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