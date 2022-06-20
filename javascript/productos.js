class productosSeleccionado {
    constructor (id, insumos, precio, imag){
        this.id = id;
        this.insumos = insumos;
        this.precio = precio;
        this.imag = imag;
    }
}

let listaProductos = [];

const productos = window.localStorage.getItem(`productos_seleccionados`);

if (productos){
    listaProductos = JSON.parse(window.localStorage.getItem(`productos_seleccionados`))
} else {
    listaProductos.push(new productosSeleccionado(1, "Ultrabond Cherimoya 15ml",800, "../imagenes/ultrabond cherimoya.jpg")),
    listaProductos.push(new productosSeleccionado(2, "Lima Cherimoya 100/180",300, "../imagenes/lima cherimoya.png")),
    listaProductos.push(new productosSeleccionado(3, "Gel color OPI",950, "../imagenes/opicolorr.jpg")),
    listaProductos.push(new productosSeleccionado(4, "Gel color OPI",950, "../imagenes/opicolor2.png")),
    listaProductos.push(new productosSeleccionado(5, "Gel color OPI",950, "../imagenes/opicolor3.png")),
    listaProductos.push(new productosSeleccionado(6, "Top Coat Cherimoya 15ml",1150, "../imagenes/cherimoya top.webp")),
    listaProductos.push(new productosSeleccionado(7, "Nail prep Nails Show 10ml",650, "../imagenes/nails_prep.png")),
    listaProductos.push(new productosSeleccionado(8, "Base Coat Cherimoya 15ml",1100, "../imagenes/cherimoya base.jpg")),
    listaProductos.push(new productosSeleccionado(9, "Buffer OPI",250, "../imagenes/buffer opi.jpg"))
}

function guardarProductosLS(listaProductos){
    localStorage.setItem("productos_seleccionados", JSON.stringify(listaProductos));
}

function cargarProductosLS(){
    return JSON.parse(localStorage.getItem("productos_seleccionados"));
}