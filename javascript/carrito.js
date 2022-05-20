function buscarProducto(id) {
    let productos = cargarProductosLS();

    return productos.find(x => x.id == id);
}

function cargarProductosCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

function agregarAlCarrito(id) {
    let producto = buscarProducto(id);
    let productos_carrito = cargarProductosCarrito();
    productos_carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function actualizarBotonCarrito() {
    let productos_carrito = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-secondary position-relative" style="width: 54px;"><img src="../imagenes/cart4.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${productos_carrito.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}
function eliminarProducto(id) {
    let productos_carrito = cargarProductosCarrito();
    let productos_carrito_actualizado = productos_carrito.filter(x => x.id != id);
    localStorage.setItem("carrito", JSON.stringify(productos_carrito_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function cargarProductosSeleccionados() {
    if (document.getElementById("productos_seleccionados")) {
        let productos = cargarProductosCarrito();
        let productos_seleccionados = document.getElementById("productos_seleccionados");
        let contenido = "";

        if (productos.length == 0) {
            contenido = "<p class='text-center bg-light p-3'>No se encontraron Productos seleccionados!</p>";
            productos_seleccionados.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const producto of productos) {
                contenido += `<tr>
                <td>${producto.insumos}</td>
                <td class='text-end'><b>$${producto.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${producto.id});'>[ X ]</button></td>
                </tr>`;
                total += producto.precio;
            }

            contenido += `<tr class="bg-light">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            productos_seleccionados.innerHTML = contenido;
        }
    }
}

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);