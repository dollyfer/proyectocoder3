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
    `<img src= "${product.imag}" class="card-img-top">
    <div class = "card-body ">
    <h5 class= card-title>  ${product.insumos}</h5>
    <p class= card-text>$${product.precio}</p>
    <a  class="btn btn-primary" onclick="agregarAlCarrito(${product.id});">COMPRAR</a>`;
    resultado.appendChild(nuevo); 
 });
}

/*

fetch('/javascript/productos.json')
.then((response) => response.json())
.then ((data)=> 
data.forEach(productos=> {
    
    let nuevo = document.createElement("div");
    nuevo.classList.add("card");
    nuevo.innerHTML =
    `<img src= "${productos.imag}" class="card-img-top">
    <div class = "card-body ">
    <h5 class= card-title>  ${productos.insumos}</h5>
    <p class= card-text>$${productos.precio}</p>
    <a  class="btn btn-primary" onclick="agregarAlCarrito(${productos.id});">COMPRAR</a>`;
    resultado.appendChild(nuevo);
    
    
}))

*/
guardarProductosLS(listaProductos);
actualizarBotonCarrito();
creacionProductos();




