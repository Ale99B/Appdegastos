// alert("Bienvenido a la App de gestion de gastos")



class ProductoSemanal{
    constructor(producto, gasto, descuento, ahorro) {
        this.producto = producto
        this.gasto = parseFloat(gasto)
        this.descuento = descuento
        this.ahorro =  ahorro
        this.cantidad = 0
    }

    agregarCantidad(cantidadRequerida) {
        this.cantidad = this.cantidad + cantidadRequerida
    }

    descripcion(){
        return "Producto: " +this.producto+ "Gasto: " + this.gasto+ "Descuento: " +this.descuento+ "Ahorro:" +this.ahorro+ "\n"
    }

    descripcionCarrito() {
        return "Producto: " +this.producto+ "Gasto: " + this.gasto+ "Descuento: " +this.descuento+ "Ahorro:" +this.ahorro+ "Cantidad: " +this.cantidad+ "\n"
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    sumar(productoNuevo) {
        let existe = this.listaCarrito.some(producto => producto.producto == productoNuevo.producto)
        if (!existe){
            this.listaCarrito.push(productoNuevo)
        }
    }

    mostrar() {
        let descripcionDeCompra = "Carrito: "
        this.listaCarrito.forEach( producto => {
            descripcionDeCompra = descripcionDeCompra + producto.descripcionCarrito()
            return descripcionDeCompra
        })
    }

    sumaDelTotal() {
        return this.listaCarrito.reduce ( (total,producto) => total + producto.precio * producto.cantidad, 0)
    }
}

class Lista {
    constructor() {
        this.listaProductos = []
    }

    agregar(producto) {
        this.listaProductos.push(producto)
    }

    mostrar(){
        let listaAcumulativa = "Recuerde que tipo de producto desea agregar"
        this.listaProductos.forEach ( producto => {
            listaAcumulativa = listaAcumulativa + producto.descripcion()
        })
        return listaAcumulativa
    }

    rastrearProducto(producto) {
        return this.listaProductos.find(producto => producto.producto == producto)
    }
}

const p1 = new Producto ("alimentos")
const p2 = new Producto ("higiene2")
const p3 = new Producto ("limpieza")
const p4 = new Producto ("decoracion")
const p5 = new Producto ("ropa")
const p6 = new Producto ("extras")


const inventario = new Lista ()
inventario.agregar(p1)
inventario.agregar(p2)
inventario.agregar(p3)
inventario.agregar(p4)
inventario.agregar(p5)
inventario.agregar(p6)

const carrito = new Carrito ()
const gestorProducto = new Lista ()

gestorProducto.agregar(p1)
gestorProducto.agregar(p2)
gestorProducto.agregar(p3)
gestorProducto.agregar(p4)
gestorProducto.agregar(p5)
gestorProducto.agregar(p6)


// --------------------------

let rta = " "
let listaCompras = ""



do{
    
    alert( gestorProducto.mostrar() )
    
    let articulo  = Number.parseInt(prompt("Ingrese el articulo que quiera agregar"))
    const producto = gestorProducto.rastrearProducto(producto)
    let cantidadDeseada = Number(prompt("Ingrese la cantidad que desea"))
    producto.agregarCantidad(cantidadDeseada)
    carrito.agregar(producto)
    alert( carrito.mostrar() )


    rta = prompt("¿Desea terminar la suma de los gastos? (escriba 'SI' para finalizar)").toUpperCase()
}while(rta != "SI")


alert( "El total es de: $"+carrito.calcularTotal() )

