// Array de Productos

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
        precio: 1000
    },
    {
        id: "ME02",
        titulo: "Llave diferencial",
        imagen: "./img/Materiales_Eléctricos/02.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 1000
    },
    {
        id: "ME03",
        titulo: "Cable Unifilar 2x10mm",
        imagen: "./img/Materiales_Eléctricos/03.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 1000
    },
    {
        id: "ME04",
        titulo: "Nicho Cajón Medidor",
        imagen: "./img/Materiales_Eléctricos/04.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 1000
    },
    {
        id: "ME05",
        titulo: "PreEnsamblado 2x6mm",
        imagen: "./img/Materiales_Eléctricos/05.jpg",
        categoria: {
            nombre: "Materiales Eléctricos",
            id: "materialesEléctricos"
        },
        precio: 1000
    },

    // Iluminación
    
    {
        id: "IL01",
        titulo: "Camiseta 01",
        imagen: "./img/Iluminación/01.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL02",
        titulo: "Camiseta 02",
        imagen: "./img/Iluminación/02.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL03",
        titulo: "Camiseta 03",
        imagen: "./img/Iluminación/03.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL04",
        titulo: "Camiseta 04",
        imagen: "./img/Iluminación/04.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL05",
        titulo: "Camiseta 05",
        imagen: "./img/Iluminación/05.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL06",
        titulo: "Camiseta 06",
        imagen: "./img/Iluminación/06.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL07",
        titulo: "Camiseta 07",
        imagen: "./img/Iluminación/07.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    {
        id: "IL08",
        titulo: "Camiseta 08",
        imagen: "./img/Iluminación/08.jpg",
        categoria: {
            nombre: "Iluminación",
            id: "iluminación"
        },
        precio: 1000
    },
    
    /* // Herramientas
    
    {
        id: "HE01",
        titulo: "Pantalón 01",
        imagen: "./img/Herramientas/01.jpg",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "HE02",
        titulo: "Pantalón 02",
        imagen: "./img/Herramientas/02.jpg",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "HE03",
        titulo: "Pantalón 03",
        imagen: "./img/Herramientas/03.jpg",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "HE04",
        titulo: "herramientas",
        imagen: "./img/Herramientas/04.jpg",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    },
    {
        id: "HE05",
        titulo: "Pantalón 05",
        imagen: "./img/Herramientas/05.jpg",
        categoria: {
            nombre: "Herramientas",
            id: "herramientas"
        },
        precio: 1000
    } */
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