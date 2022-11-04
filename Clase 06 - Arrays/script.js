// 01 - Escribir un programa que almacene las asignaturas de un curso, 
//      en un array y la muestre por pantalla (por ejemplo: Matemáticas, Física, Química, Historia y Lengua).

/* let materiasCurso = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
console.log(materiasCurso)  */

// 02 - Escribir un programa que almacene las asignaturas de un curso (por ejemplo:
//      Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por pantalla el mensaje; 
//      "Yo estudio <asignatura>, donde <asignatura> es cada una de las asignaturas del array."

/* let materiasCurso = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]

for (let i = 0; i < materiasCurso.length; i++) {
    console.log("Yo estudio " +  materiasCurso[i] + " , donde " + materiasCurso[i] + " es cada una de las asignaturas del array.")         
}
 */

// 03 - Escribir un programa que almacene las asignaturas de un curso (por ejemplo: Matemáticas, Física, Química, Historia y Lengua) 
//      en un array, pregunte al usuario la nota que ha sacado en cada asignatura, y después las muestre por pantalla con el mensaje: 
//      "En <asignatura> has sacado <nota> donde <asignatura> es cada una des las asignaturas del array y <nota> una de las correspondientes notas introducidas por el usuario."

/* let materiasCurso = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
let nota = []

for (let i = 0; i < materiasCurso.length; i++) {
    agregaNota = parseInt(prompt("¿Que nota sacaste en el examen de: "+ materiasCurso[i]+ "?"))
    nota.push(agregaNota)
} 

for (let i = 0; i < materiasCurso.length; i++) {
    console.log("En " +  materiasCurso[i] + " has sacado " + nota[i]+ ", donde " + materiasCurso[i] + " es cada una des las asignaturas del array y " + nota[i] + " una de las correspondientes notas introducidas por el usuario.")         
}  */

// 05 - Escribir un programa que almacene en un array los números del 1 al 10 y los muestre por pantalla en orden inverso separados por comas.

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeros)

numeros.reverse()

console.log(numeros)
 */

// 06 - Escribir un programa que almacene las asignaturas de un curso (por ejemplo: Matemáticas, Física, Química, Historia y Lengua) 
//      en un array, pregunte al usuario la nota que ha sacado en cada asignatura y elimine del array las asignaturas aprobadas. 
//      Al final el programa debe mostrar por pantalla las asignaturas que el usuario tiene que repetir.

/* let curso = [
    {materia: "Matemáticas", nota: 9}, 
    {materia: "Física", nota: 9},
    {materia: "Química", nota: 7},
    {materia: "Historia", nota: 10}, 
    {materia: "Lengua", nota: 5},
];

console.log(curso)


const materiasParaExamen = curso.filter(x => x.nota <6)     
console.log("Del curso tienes que volver a rendir: ")
console.log(materiasParaExamen)
 */

// 07 - Escribir un programa que almacene el abecedario en un array, elimine las letras
//      que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista resultante.

/* const abecedario = ["a", "b", "c", "d", "e", "f", "g"," h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
const abecedarioNuevo = []

console.log(abecedario)

for (let i = 0; i < abecedario.length; i++) {
    if (i%3 !== 0) {
        abecedarioNuevo.push(abecedario[i]);
    }
}

console.log(abecedarioNuevo) */

// 08 - Escribir un programa que pida al usuario una lista de letras y muestre por pantalla
//      el número de veces que ingresó cada vocal

/* let letra = []
let unicosElementos = []
let almacenadorDeVecesRepetidas = []
let contador = 1

for (let i = 0; i < 6; i++) {
    letra[i] = prompt("Escribe una letra")
}

console.log(letra)

for (let i= 0; i < letra.length; i++) {
    if(letra[i+1] === letra[i]){
        contador++
    } else {
     unicosElementos.push(letra[i]) 
        almacenadorDeVecesRepetidas.push(contador)
        contador=1
    }
}
console.log(unicosElementos) 
console.log(almacenadorDeVecesRepetidas)

for (let i = 0; i < unicosElementos.length; i++) {
    console.log("El valor "+ unicosElementos[i]+ " se repite "+ almacenadorDeVecesRepetidas[i])
} */



// 09 - Escribir un programa que almacene en un array los siguientes precios, 50, 75, 46,
//      22, 80, 65, 8, y muestre por pantalla el menor y el mayor de los precios.

/* const precios = [50, 75, 46, 22, 80, 65, 8]

const mayor = Math.max(...precios)

console.log(mayor)

const menor = Math.min(...precios)


console.log(menor)
 */



