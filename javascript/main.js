

function cargarProductos(){
    let productos2= cargarProductosLS();
    let contenido= "";

  for (const producto of productos2) {
    contenido += `
  <div class="card" style="width: 18rem;">
  <img src="../imagenes/${producto.imag}" class="card-img-top" alt="${producto.insumos}">
  <div class="card-body">
    <h5 class="card-title">${producto.insumos}</h5>
    <p class="card-text">$${producto.precio}</p>
    <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});">Adquirir</a>
  </div>
 </div> `;
    }

    document.getElementById("productos").innerHTML = contenido;
}
guardarProductosLS(productos);
cargarProductos();
actualizarBotonCarrito();
const usuario={
  edad : prompt("ingrese su edad")
}
const permiso =(usuario.edad >=18)? true : false
permiso ? alert("usted es mayor, siga con la compra") : alert ("usted es menor necesita el permiso de un adulto")