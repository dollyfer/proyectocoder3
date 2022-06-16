class productosSeleccionado {
    constructor (id, insumos, precio, imag){
        this.id = id;
        this.insumos = insumos;
        this.precios = precio;
        this.imag = imag;
    }
}

let listaProductos = [];

const productos = window.localStorage.getItem(`productos_seleccionados`);

if (productos){
    listaProductos = JSON.parse(window.localStorage.getItem(`productos_seleccionados`))
} else {
    listaProductos.push(new productosSeleccionado(1, "pepe",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(2, "perez",350, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(3, "agus",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(4, "Ultrabond Cherimoya 15ml",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(5, "Ultrabond Cherimoya 15ml",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(6, "Ultrabond Cherimoya 15ml",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(7, "Ultrabond Cherimoya 15ml",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(8, "Ultrabond Cherimoya 15ml",300, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(9, "Ultrabond Cherimoya 15ml",300, "../imagenes/ultrabond cherimoya.jpg"))
}

// const productos =[
//     {id: 1, insumos: "Ultrabond Cherimoya 15ml", precio: 800,  imag: "../imagenes/ultrabond cherimoya.jpg"},
//     { id: 2, insumos: "Lima Cherimoya 100/180", precio: 300,  imag: "../imagenes/lima cherimoya.png"},
//     { id: 3, insumos: "Gel color OPI", precio: 950, imag: "../imagenes/opicolor3.png"},
//     { id: 4, insumos: "Gel color OPI", precio: 950,  imag: "../imagenes/opicolor2.png"},
//     { id: 5, insumos: "Gel color OPI", precio: 950, imag: "../imagenes/opicolor1.png"},
//     { id: 6, insumos: "Top Coat Cherimoya 15ml", precio: 1150,  imag: "../imagenes/cherimoya top.webp"},
//     { id: 7, insumos: "Nail prep Nails Show 10ml", precio: 650, imag: "../imagenes/nails_prep.png"},
//     { id: 8, insumos: "Base Coat Cherimoya 15ml", precio: 1100,  imag: "../imagenes/cherimoya base.jpg"},
//     { id: 9, insumos: "Buffer OPI", precio: 250, imag: "../imagenes/buffer opi.jpg" }
// ];

function guardarProductosLS(listaProductos){
    localStorage.setItem("productos_seleccionados", JSON.stringify(listaProductos));
}

function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos_seleccionados"));
}