// Array de Objetos - Productos

const productos = [

    // Materiales Eléctricos
    
    {
        id: "ME01",
        titulo: "Llave Térmica",
        imagen: "./img/Materiales_Eléctricos/01.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 140
    },
    {
        id: "ME02",
        titulo: "Llave diferencial",
        imagen: "./img/Materiales_Eléctricos/02.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 560
    },
    {
        id: "ME03",
        titulo: "Cable Unifilar 2x10mm (rollo)",
        imagen: "./img/Materiales_Eléctricos/03.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 1090
    },
    {
        id: "ME04",
        titulo: "Nicho Cajón Medidor",
        imagen: "./img/Materiales_Eléctricos/04.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 378
    },
    {
        id: "ME05",
        titulo: "PreEnsamblado 2x6mm (rollo)",
        imagen: "./img/Materiales_Eléctricos/05.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 2600
    },

    // Iluminación
    
    {
        id: "IL01",
        titulo: "Spot 2 luces redondo",
        imagen: "./img/Iluminación/01.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 210
    },
    {
        id: "IL02",
        titulo: "Spot 1 luz para riel",
        imagen: "./img/Iluminación/02.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 135
    },
    {
        id: "IL03",
        titulo: "Spot 1 luz de vidrio",
        imagen: "./img/Iluminación/03.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 330
    },
    {
        id: "IL04",
        titulo: "Spot 1 luz dorado",
        imagen: "./img/Iluminación/04.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 169
    },
    {
        id: "IL05",
        titulo: "Aplique de 2 luces",
        imagen: "./img/Iluminación/05.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 430
    },
    {
        id: "IL06",
        titulo: "Aplique de 3 luces",
        imagen: "./img/Iluminación/06.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 570
    },
    {
        id: "IL07",
        titulo: "Aplique 4 luces",
        imagen: "./img/Iluminación/07.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 669
    },
    {
        id: "IL08",
        titulo: "Colgante de techo",
        imagen: "./img/Iluminación/08.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1300
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}