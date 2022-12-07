import * as ElementosDom from "./main_modules/elementosDom.js";                   // me traigo todos los elementos exportados del dom
import { imprimirProductos } from "./main_modules/funcionDeProductos.js";
import { buscar } from "./main_modules/buscar.js";
import { categoriaClick } from "./main_modules/buscar.js";

const urlDeProductos = "./js/productos.json";


// Fetch de los productos

const pedirProductos = async () => {
    const respuesta = await fetch(urlDeProductos);
    let productos = await respuesta.json();
    return productos;
};

let productos = pedirProductos();

productos.then((productos) => productosFetcheados(productos))

function productosFetcheados(productos) {
    imprimirProductos(ElementosDom.listadoProductos, productos);

    ElementosDom.buscadorDeArriba.addEventListener("submit", function() {          // Buscador del header
        buscar(event, productos);
    }, false);

    ElementosDom.botonesCategorias.forEach((botonCategoria) => {             // Categorías del main
        botonCategoria.addEventListener("click", function() {
            categoriaClick(event, productos);
        }, false);
    });
}