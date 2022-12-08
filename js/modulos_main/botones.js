import { carritoAgregados } from "./funcionDeProductos.js";
import { imprimirProductos } from "./funcionDeProductos.js";
import { imprimirProductosEnCarrito } from "./funcionDeProductos.js";
import { numerito } from "./funcionDeProductos.js";
import { toastify } from "./toastify.js";
import * as ElementosDom from "./elementosDom.js";


export function asignarBotonesAgregar(productos) {          // Aquí se reasigna todos los botones de agregar al carrito cada vez que cambian los productos que se muestran

    const botonesAgregar = document.querySelectorAll('.agregarProducto');
    botonesAgregar.forEach((botonAgregar) => {

        botonAgregar.addEventListener('click', function() {
            botonAgregarClicked(event, productos);
        }, false);

    });

};
  
function botonAgregarClicked(event, productos) {
    
    const productoAgregadoPadre = event.target.closest('.producto');

    // Busca el producto por SKU en el array fetch

    const productoAgregado = productos.find((buscarProducto) => buscarProducto.sku == productoAgregadoPadre.id);

    // Busca en el array de productos en el carrito

    const estaEnCarrito = carritoAgregados.find((buscarSiEsta) => buscarSiEsta.sku == productoAgregadoPadre.id);
    if (estaEnCarrito) {
        estaEnCarrito.cantidad++; // Si está en el carrito, aumenta solamente la cantidad

    } else {
        Object.assign(productoAgregado, {cantidad: 1}); // Si no está, le define cantidad y lo agrega
        carritoAgregados.push(productoAgregado);        
    }

    imprimirProductosEnCarrito();
    toastify("agregado");
}

export function asignarBotonesMasMenos() {              // Asigna los botones + y - de los productos del carrito y su evento

    const botonesMas = document.querySelectorAll('.mas');
    const botonesMenos = document.querySelectorAll('.menos');

    botonesMas.forEach((botonMas) => {

        botonMas.addEventListener('click', botonMasClicked);

    });

    botonesMenos.forEach((botonMenos) => {

        botonMenos.addEventListener('click', botonMenosClicked);

    });
};

function botonMasClicked(event) {

    const productoAgregadoPadre = event.target.closest('.nuevoProducto');

    // Busca el producto en el array fetch

    const productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
  
    productoAgregado.cantidad++;
    imprimirProductosEnCarrito();
}

function botonMenosClicked(event) {
    const productoAgregadoPadre = event.target.closest('.nuevoProducto');

    // Busca el producto en el array fetch
    
    const productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);
    
    if (productoAgregado.cantidad > 1) {

        productoAgregado.cantidad--;
        imprimirProductosEnCarrito();
    }
}

export function asignarBotonesBorrar() {            // Se reasignan todos los botones de borrar producto en el carrito

    const botonesBorrar = document.querySelectorAll('.carritoBorrar i');

    botonesBorrar.forEach((botonBorrar) => {

        botonBorrar.addEventListener('click', botonBorrarClicked);
    });
};

function botonBorrarClicked(event) {

    const productoAgregadoPadre = event.target.closest('.nuevoProducto');
    
    // Busca el producto en el array fetch

    const productoAgregado = carritoAgregados.find((buscarProducto) => "agregado" + buscarProducto.sku == productoAgregadoPadre.id);

    const index = carritoAgregados.indexOf(productoAgregado); // Busca el index de este producto en el array

    if (index > -1) {
        carritoAgregados.splice(index, 1); // y lo elimina
    }

    imprimirProductosEnCarrito();
    toastify("borrado");
}

// Evento de vaciar el carrito e inicio del SweetAlert

ElementosDom.botonVaciar.addEventListener('click', popUpVaciarCarrito);
function popUpVaciarCarrito() {

    swal(`Hay ${numerito} ${numerito > 1 ? "productos" : "producto"} en tu carrito actualmente.`, {
        title: "¿Seguro?",
        icon: "warning",
        buttons: {
        cancel: "Cancelar",
        aceptar: {
            text: "Sí, segurisimo",
            value: "aceptar",
        },
        },
    })
    .then((value) => {

        switch (value) {

        case "aceptar":
            swal (`Vaciaste tu carrito`, {icon: "success",});
            botonVaciarClicked();
            break; 
        }
    });
}

function botonVaciarClicked() {

    // Borra todos los productos del array del carrito

    while (carritoAgregados.length) {
        carritoAgregados.pop();
    }

    imprimirProductosEnCarrito(); 
}


// Eventos de abrir y cerrar el carrito

ElementosDom.botonCarrito.addEventListener("click", function(){

    ElementosDom.carrito.classList.remove("cerrado");
    ElementosDom.botonCarrito.classList.add("cerrado");

}); 

ElementosDom.cerrarCarrito.addEventListener("click", function(){

    ElementosDom.carrito.classList.add("cerrado");
    ElementosDom.botonCarrito.classList.remove("cerrado");

});

// Ocultar el carrito si está vacío después de cualquier acción

export function estaVacioCheck() {

    if(numerito == "0" || numerito == null) {

        ElementosDom.carrito.classList.add("cerrado");

    } else {

        if(ElementosDom.carrito.classList.contains("cerrado")){

            ElementosDom.botonCarrito.classList.remove("cerrado");
        }
    }
}


// Asigna el botón de "ver todos" en las búsquedas y categorías

export function asignarBotonVerTodos(productos) {
    
    let verTodos = document.querySelector(".verTodos");
    verTodos.addEventListener("click", function() {

        verTodosClicked(productos);
    }, false);

};

// Se imprimen todos los productos del array fetch

function verTodosClicked(productos) {

    ElementosDom.listadoProductos.scrollIntoView();
    imprimirProductos(ElementosDom.listadoProductos, productos);
    
    ElementosDom.botonesCategorias.forEach((botonCategoria) => {

      botonCategoria.children[0].classList.remove("active"); // Quita las classes active que puedan tener las categorías
    
    });
};

ElementosDom.tituloCategorias.addEventListener("click", function(){

    if ((screen.width < 577)) {

        for(let categoria of ElementosDom.botonesCategorias) {
            categoria.style.maxHeight = categoria.style.maxHeight === "100px" ? "0px" : "100px";
        }
        
    }
}); 