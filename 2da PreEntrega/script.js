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

function mostrarProductosFiltradosPorCategoria() {
    console.log("----------")
    let iluminacion = productos.filter(producto => producto.categoria === "Iluminación")
    iluminacion.map(producto => console.log(producto.nombre, " y su categoría es: ", producto.categoria))
    console.log("----------")
    let materialesElectricos = productos.filter(producto => producto.categoria === "Materiales Eléctricos")
    materialesElectricos.map(producto => console.log(producto.nombre, " y su categoría es: ", producto.categoria)) 
    console.log("----------")
    let herramientas = productos.filter(producto => producto.categoria === "Herramientas")
    herramientas.map(producto => console.log(producto.nombre, " y su categoría es: ", producto.categoria)) 
}

function bienvenida (nombre) {
    alert(`Es un gusto recibirte por aquí ${nombre}. Te cuento que haz accedido al "Ecommerce fantasma" de MATERIALES ELÉCTRICOS donde aún no hay "nada para ver" y sin embargo hay productos cargados en el sistema. Loco, ¿no? 🤪 Hacé clic en Aceptar para continuar.`)
}

let nombre = prompt("Hola, soy Junior tu asistente virtual. ¿Cuál es tu nombre?")
bienvenida(nombre)

let productoIngresado = prompt("Te reto a que encuentres un producto del rubro que tengamos cargado al sistema (solo tenes 3 intentos). Ingresa un producto. 👇")
let productoBuscado = productos.find(producto => producto.nombre === productoIngresado)

if (productoBuscado) {
    console.log(`¡Bien vos! diste en el "clavo" jeje, en nuestro Ecommerce venderemos el producto: ${productoBuscado.nombre}`)
} 
else {
    alert("mmm, no tenemos ese producto en el sistema... Hagamos algo más fácil, dale clic al botón de 'Aceptar' de aquí abajo y le pediré al programa que te muestre en la consola todos los productos que tenemos cargados al sistema junto con la categoría a la que pertenecen")
    let mostrarProductos = productos.map(producto => console.log(producto.nombre, ", y pertenece a la categoría: ", producto.categoria))
} 

alert("Ahora que los veo, los productos estan un tanto desordenados. Con tu permiso voy a proceder a mostartelos clasificados por categorías.")
mostrarProductosFiltradosPorCategoria()

let categoria = prompt("Elige una de las siguientes categorías para filtrar los productos de nuestro Ecommerce y verlos en consola. 'Herramientas', 'Iluminación' o 'Materiales Eléctricos'")
