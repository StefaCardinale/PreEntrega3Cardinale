const carrito = JSON.parse(localStorage.getItem("carrito")) || []
const contenedorCarrito = document.querySelector("#carrito")

function mostrarCarrito() {
  carrito.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
        <img src="./img/180x250.webp" alt="${producto.nombre}">
        <h3> ${producto.nombre} </h3>
        <p> ${producto.descripcion} </p>
        <span> $ ${producto.precio} </span>
    `
    contenedorCarrito.append(tarjetaProducto)
  })
}
mostrarCarrito()

const botonLimpiar = document.querySelector(".boton-limpiar")
botonLimpiar.addEventListener("click", () => {
  localStorage.removeItem("carrito")
  actualizarCarrito()
})