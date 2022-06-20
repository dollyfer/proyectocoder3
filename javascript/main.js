Swal.fire({
  title: 'Bienvenido a la tienda de Nails With Do',
  text: 'Los mejores productos y precios',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})


const resultado = document.getElementById("productos");

const creacionProductos = () => {
  listaProductos.forEach((product) => {
  let nuevo = document.createElement("div");
    nuevo.classList.add("card");
    nuevo.innerHTML =
    `<img src= "${product.imag}" class="card-img-top imagencard">
    <div class = "card-body ">
    <h5 class= card-title>  ${product.insumos}</h5>
    <p class= card-text>$${product.precio}</p>
    <a  class="btn btn-primary" onclick="agregarAlCarrito(${product.id});">COMPRAR</a>`;
    resultado.appendChild(nuevo); 
 });
}

guardarProductosLS(listaProductos);
actualizarBotonCarrito();
creacionProductos();




