class Producto {
    constructor (nombre, descripcion, precio, imagen){
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = parseFloat(precio)
    this.imagen = imagen
    }
}
const productos = JSON.parse(localStorage.getItem("productos")) || []

const crearProducto = () => {
    const formularioCrear = document.querySelector("#crearProducto")
    formularioCrear.addEventListener("submit", (e) => {
        e.preventDefault()
        const datos = e.target.children
        const producto = new Producto (
            datos["nombre"].value,
            datos["descripcion"].value,
            datos["precio"].value,
            datos["imagen"].value
            )
        productos.push(producto)
        localStorage.setItem("productos", JSON.stringify(productos))
        formularioCrear.reset()
    })
}
crearProducto()

const contenedorProductos = document.querySelector("#productos")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
        <img src="./img/180x250.webp" alt="${producto.nombre}">
        <h3> ${producto.nombre} </h3>
        <p> ${producto.descripcion} </p>
        <span> $ ${producto.precio} </span>
        <button class="boton borrar"> Borrar </button>
        `
    contenedorProductos.append(tarjetaProducto)
    const botonBorrar = tarjetaProducto.querySelector(".borrar")
    botonBorrar.addEventListener("click", () => {
      productos.splice(producto, 1)
      localStorage.setItem("productos", JSON.stringify(productos))
      tarjetaProducto.remove()
    })
})