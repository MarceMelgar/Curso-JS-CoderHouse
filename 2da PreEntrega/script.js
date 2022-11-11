// Este programa es una especie de asistente virtual para una futura tienda online del rubro electricidad. 

// Defino un array de objetos que contiene todos los elementos de cada uno de los productos.

let productos = [
    {id: 3712, nombre: 'Llave Térmica', precio: 50, stock: 30, promedio_votos: 7.1, color: "blanco", categoria: "Materiales Eléctricos"},
    {id: 3718, nombre: 'Multímetro', precio: 50, stock: 30, promedio_votos: 7.1, color: "negro", categoria: "Herramientas"},
    {id: 3714, nombre: 'Cable unipolar', precio: 50, stock: 30, promedio_votos: 7.1, color: "negro", categoria: "Materiales Eléctricos"},
    {id: 3734, nombre: 'Llave diferencial', precio: 50, stock: 30, promedio_votos: 7.1, color: "azul", categoria: "Materiales Eléctricos"},
    {id: 2710, nombre: 'Soldador', precio: 50, stock: 30, promedio_votos: 7.1, categoria: "Herramientas"},
    {id: 4713, nombre: 'Tablero para térmicas', precio: 50, stock: 30, promedio_votos: 7.1, color: "negro", categoria: "Materiales Eléctricos"},
    {id: 7719, nombre: 'Jabalina homologada', precio: 50, stock: 30, promedio_votos: 7.1, color: "negro", categoria: "Materiales Eléctricos"},
    {id: 8712, nombre: 'Lámpara Smart', precio: 50, stock: 30, promedio_votos: 7.1, color: "RGB", categoria: "Iluminación"},
    {id: 1714, nombre: 'Spot para luz LED', precio: 50, stock: 30, promedio_votos: 7.1, color: "rojo", categoria: "Iluminación"},
]

// Defino dos funciones para llamar más adelante.

function validarNombre () {
    while ((nombre.trim() === "") || (!isNaN(nombre))) {
       nombre = prompt("Ingresaste un campo vacío o un número y hasta donde me han enseñado las personas no se pueden llamar así. Por favor, ingresa tu nombre para poder conversar contigo.")
    }
}

function validarProductoIngresado () {
    while ((productoIngresado.trim() === "") || (!isNaN(productoIngresado))) {
       productoIngresado = prompt("Ingresaste un campo vacío o un número, esos no son valores de nombre de los productos de nuestro sistema. Por favor, ingresa tu nombre de producto real.")
    }
}

function bienvenida () {
    alert(`Es un gusto recibirte por aquí ${nombre}. Te cuento que haz accedido al "Ecommerce fantasma" de MATERIALES ELÉCTRICOS donde aún no hay "nada para ver" y sin embargo hay productos cargados en el sistema. Loco, ¿no? 🤪 Hacé clic en Aceptar para continuar.`)
}

function mostrarProductosFiltradosPorCategoria() {
    console.log("\n----------------------\n Productos Ordenados 👇\n----------------------\n")
    let iluminacion = productos.filter(producto => producto.categoria === "Iluminación")
    iluminacion.map(producto => console.log(producto.nombre, " y su categoría es: ", producto.categoria))
    console.log("----------")
    let materialesElectricos = productos.filter(producto => producto.categoria === "Materiales Eléctricos")
    materialesElectricos.map(producto => console.log(producto.nombre, " y su categoría es: ", producto.categoria)) 
    console.log("----------")
    let herramientas = productos.filter(producto => producto.categoria === "Herramientas")
    herramientas.map(producto => console.log(producto.nombre, " y su categoría es: ", producto.categoria)) 
}

function final() {
    alert("Ahora que veo los productos estan un tanto desordenados... Con tu permiso voy a proceder a mostartelos clasificados por categorías.")
    mostrarProductosFiltradosPorCategoria()
    alert('Ya sabes todos los productos que tendremos en nuestro "Ecommerce fantasma", espero que cuando innauguremos y abramos en serio nos compres alguno jeje. Muchas gracias por conversar conmigo hoy, que tengas buen día.')
}


// Defino el programa

let i = 1

let nombre = prompt("Hola, soy Junior tu asistente virtual. ¿Cuál es tu nombre?")
validarNombre()
bienvenida()

let productoIngresado = prompt("Te reto a que encuentres un producto (de nuestro rubro) que tengamos cargado al sistema (solo tenes 3 intentos). Ingresa un producto. 👇")
validarProductoIngresado()
let productoBuscado = productos.find(producto => producto.nombre === productoIngresado)
let mostrarProductos

if (productoBuscado) {
    alert(`¡Bien vos ${nombre}! diste en el "clavo" jeje, en nuestro Ecommerce venderemos el producto: ${productoBuscado.nombre}\n\nComo premio te mostraré todos los productos que tenemos con su precio través de la consola.`)
    mostrarProductos = productos.map(producto => console.log(producto.nombre, ", precio: $", producto.precio))
    final()
}
else {
    while ((!productoBuscado) && (i<3)) {
        alert(`mmm, no tenemos ese producto en el sistema... clic en aceptar para intentarlo nuevamente`)
        productoIngresado = prompt(`Ingresa un producto. 👇 (este es tu intento ${i+1} de 3).`)
        validarProductoIngresado()
        productoBuscado = productos.find(producto => producto.nombre === productoIngresado)
        i = i + 1
    }
    if (productoBuscado) {
        alert(`¡Bien vos ${nombre}! diste en el "clavo" jeje, como premio te mostraré todos los productos que tenemos con su precio través de la consola.`)
        mostrarProductos = productos.map(producto => console.log(producto.nombre,", precio: $", producto.precio))
        final()
    }
    else {
        alert("Parece que no aprobaste el reto, de todas formas, hoy me agarraste de buenas, dale clic al botón de 'Aceptar' de aquí abajo y le pediré al programa que te muestre en la consola todos los productos que tenemos cargados al sistema junto con su precio.")
        mostrarProductos = productos.map(producto => console.log(producto.nombre, ", precio: $", producto.precio))
        final()
    }
    
} 
