
Swal.fire({
  title: 'Bienvenido a la tienda de Nails With Do',
  text: 'Los mejores productos y precios',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})



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



