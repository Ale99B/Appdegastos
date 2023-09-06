// alert("Bienvenido a la App de gestion de gastos")


class ProductoSemanal{
    constructor(nombre, precio, descuento) {
        this.nombre = nombre
        this.precio = precio
        this.descuento = descuento
    }
}

class Gestion{
    constructor(){
        this.listaGestion = []
    }
}

class GestionDeProductos{
    constructor(){
        this.gestionarListado = []
    }

    agregar(productoSemanal) {
        this.gestionarListado.push(productoSemanal)
    }

    presentar() {
        let ordenDeProductos = ""
        this.gestionarListado.forEach ( productoSemanal => {
            // alert(productoSemanal.nombre+" "+productoSemanal.precio)
            ordenDeProductos =  ordenDeProductos + " Nombre: " +productoSemanal.nombre+ " Precio: "+productoSemanal.precio+"\n"
            return ordenDeProductos
        })
    }
}



const p1 = new ProductoSemanal("alimentos",5000)
const p2 = new ProductoSemanal ("higiene",6000)
const p3 = new ProductoSemanal ("limpieza",3000)
const p4 = new ProductoSemanal ("decoracion",6500)
const p5 = new ProductoSemanal ("ropa",9000)
const p6 = new ProductoSemanal ("extras",7000)

const reguladorDeGestion = new GestionDeProductos()

reguladorDeGestion.agregar(p1)
reguladorDeGestion.agregar(p2)
reguladorDeGestion.agregar(p3)
reguladorDeGestion.agregar(p4)
reguladorDeGestion.agregar(p5)
reguladorDeGestion.agregar(p6)

alert( reguladorDeGestion.presentar() )

