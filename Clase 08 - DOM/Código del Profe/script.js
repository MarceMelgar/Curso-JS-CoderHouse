/* 
console.log(document.body)
console.dir(document.body)


let contenedorProductos = document.getElementById("productos")
console.log(contenedorProductos)
console.dir(contenedorProductos.id) */

/* let productos = document.getElementsByClassName("producto")
console.dir(productos)
console.dir(productos[0])
console.dir(productos[1])
console.dir(productos[2]) */

/* let productos = document.getElementsByTagName("h3")
console.dir(productos[0])
console.dir(productos[1])
console.dir(productos[2])

console.log("----------------")

for (const producto of productos) {
  console.dir(producto)
} */

/* let contenedorNombre = document.getElementById("contenedorNombre")
console.log(contenedorNombre.innerText) */

/* let nombre = "Juan"
contenedorNombre.innerText = nombre
console.log(contenedorNombre.innerText)

console.dir(contenedorNombre) */


/* let elementoNombre = document.createElement("h3")
elementoNombre.innerText = "Juan"
contenedorNombre.appendChild(elementoNombre) */

/* contenedorNombre.innerHTML = '<h3>'+nombre+'</h3>'
contenedorNombre.className = 'caja' */

//CODIGO JS
/* document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value = 39; */

let productos = [
  { id: 34, nombre: "Pelota", precio: 4000, stock: 20, imgUrl: "./images/descarga.png" },
  { id: 67, nombre: "Pelota Int", precio: 4000, stock: 3, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_785363-MLA49610130239_042022-V.webp" },
  { id: 78, nombre: "Short", precio: 6700, stock: 10, imgUrl: "./images/short.jpg" },
  { id: 90, nombre: "Remera", precio: 9000, stock: 10, imgUrl: "./images/remera.webp" }
]

let contenedorProductos = document.getElementById("contenedorProductos")

for (const producto of productos) {
  let tarjetaProducto = document.createElement("div")

  if (producto.stock < 5) {
    tarjetaProducto.className = "productoSinStock"
  } else {
    tarjetaProducto.className = "producto"
  }

  tarjetaProducto.id = producto.id
  
  tarjetaProducto.innerHTML = `
    <h3 class="nombreProducto">${producto.nombre}</h3>
    <h4>$${producto.precio}</h4>
    <p>Quedan ${producto.stock} u.</p>
    <img src=${producto.imgUrl}>
  `
  
  contenedorProductos.append(tarjetaProducto)
}