const productos = JSON.parse(localStorage.getItem("productos")) || []
const contenedorProductos = document.querySelector("#productos")

productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
        <img src="./img/180x250.webp" alt="${producto.nombre}">
        <h3> ${producto.nombre} </h3>
        <p> ${producto.descripcion} </p>
        <span> $ ${producto.precio}</span>
        <button class="boton"> Agregar al Carrito </button>
        `
    contenedorProductos.append(tarjetaProducto)
})

const botonesAgregarCarrito = document.querySelectorAll(".boton")

botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener("click", agregarProductoAlCarrito)
})

function agregarProductoAlCarrito(evento) {
    const boton = evento.target
    const idProducto = boton.dataset.id

    const productoSeleccionado = productos.find(producto => producto.id === idProducto)

    agregarAlCarrito(productoSeleccionado)
}

function agregarAlCarrito(productoSeleccionado) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
  
    carrito.push({
      ...productoSeleccionado,
      cantidad: 1
    })
  
    localStorage.setItem("carrito", JSON.stringify(carrito))
  
    actualizarNumeroItemsCarrito()
  }

function actualizarNumeroItemsCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    const numeroItems = carrito.reduce((total, producto) => total + producto.cantidad, 0)

    const botonCarrito = document.querySelector(".boton-carrito")
    botonCarrito.innerHTML = `<i class="fas fa-shopping-cart"></i> (${numeroItems})`
}