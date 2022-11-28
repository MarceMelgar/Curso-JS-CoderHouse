import * as FuncionesCheckout from "./checkout_modules/funcionesDelCheckout.js";

let carritoAgregados = localStorage.getItem("productos");
carritoAgregados = JSON.parse(carritoAgregados);

FuncionesCheckout.imprimirProductos(carritoAgregados); // Imprime todos los productos en el Carrito lateral
FuncionesCheckout.cargarPrecioTotal(carritoAgregados); // Imprime el precio Total en el Carrito y en el botón de Confirmar Pago