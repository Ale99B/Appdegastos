alert("Bienvenido a la App de gestion de gastos")


class ProductoSemanal{
    constructor(nombre, precio, descuento) {
        this.nombre = nombre
        this.precio = precio
        this.descuento = descuento
        this.cantidad = 0
    }

    agregarCantidad(cantidadDeseada){
        this.cantidad = this.cantidad + cantidadDeseada
    }

    detalle(){
        return "    Nombre: " + this.nombre + " Precio: $" + this.precio + "\n";
    }

    detalleGestionCarrito(){
        return "    Nombre: " + this.nombre + " Precio: $" + this.precio + "Cantidad: "+this.cantidad+ "\n";
    }
}

class GestionCarrito{
    constructor(){
        this.listaGestionCarrito = []
    }

    // agregar(productoSemanalNuevo) {
	// 	let subsiste = this.listaGestionCarrito.some((productoSemanal) => productoSemanal.nombre == productoSemanalNuevo.nombre);
	// 	if (!subsiste) {
	// 		this.listaGestionCarrito.push(productoSemanalNuevo);
	// 	}
	// }
    agregar(productoSemanalNuevo) {
		let subsiste = this.listaGestionCarrito.some((productoSemanal) => productoSemanal.nombre == productoSemanalNuevo.nombre);
		if (!subsiste) {
			this.listaGestionCarrito.push(productoSemanalNuevo);
		}
	}


    mostrar(){
        let ordenDeCarrito = "Carrito: \n\n";
        this.gestionCarrito.forEach(productoSemanal => {
            ordenDeCarrito += productoSemanal.detalleGestionCarrito()
        });
        return ordenDeCarrito;
    }

    calcularTotal(){
        return this.listaGestionCarrito.reduce( (cantidad, producto => cantidad + producto.precio * producto.cantidad, 0 ))
    }
}

class GestionDeProductos {
    constructor() {
        this.gestionarListado = [];
    }

    agregar(productoSemanal) {
        this.gestionarListado.push(productoSemanal);
    }

    presentar() {
        let ordenDeProductos = "Por favor, tenga presente el nombre del producto que desea añadir: \n\n";
        this.gestionarListado.forEach(productoSemanal => {
            ordenDeProductos += productoSemanal.detalle()
        });
        return ordenDeProductos;
    }

    explorar(nombre) {
        return this.gestionarListado.find(productoSemanal => productoSemanal.nombre == nombre)
    }
}

const p1 = new ProductoSemanal("Alimentos", 5000);
const p2 = new ProductoSemanal("Higiene", 6000);
const p3 = new ProductoSemanal("Limpieza", 3000);
const p4 = new ProductoSemanal("Decoracion", 6500);
const p5 = new ProductoSemanal("Ropa", 9000);
const p6 = new ProductoSemanal("Extras", 7000);

const gestionCarrito = new GestionCarrito();
const reguladorDeGestion = new GestionDeProductos();

reguladorDeGestion.agregar(p1);
reguladorDeGestion.agregar(p2);
reguladorDeGestion.agregar(p3);
reguladorDeGestion.agregar(p4);
reguladorDeGestion.agregar(p5);
reguladorDeGestion.agregar(p6);

let aclaracion = ""

do{
    alert(reguladorDeGestion.presentar());
    let nombre = prompt("Ingrese el nombre del producto que desea añadir.")
    const productoSemanal =reguladorDeGestion.explorar(nombre)
    let cantidadDeseada = Number.parseInt(prompt("Ingrese el cantidad que desea"))
    productoSemanal.agregarCantidad(cantidadDeseada);
    gestionCarrito.agregar(productoSemanal)
    alert(gestionCarrito.detalleGestionCarrito())

    aclaracion = prompt("Escriba 'SI', si desea terminar de añadir productos").toLowerCase()
}while(aclaracion != SI)


alert("El total es de $"+gestionCarrito.calcularTotal())


const economia = [
    { nombre: 'Alimentos', gasto: $55000},
    { nombre: 'Higiene', gasto: $30000},
    { nombre: 'Limpieza', gasto: $45000},
    { nombre: 'Decoracion', gasto: $100000},
    { nombre: 'Ropa', gasto: $120000},
    { nombre: 'Extras', gasto: $23000},
]
economia.some((economia) => {
    return economia.gasto <= $50000 
})

console.log(economia.gasto())





// Este DOM implementarlo con mi app para que cumpla dos funciones
// una va ser que este en el inicio y se pueda adaptar a cualquier
// y la otra es que cuando se carge algun producto semanal indique
// la fecha de cuando lo cargo 

// tratar de implementar bien el constructor

// const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// class Reloj{
//     constructor(fecha) {
//         this.fecha = fecha
//     }
// }


// const ahora = new Fecha();

// function actualizarTiempo() {
//     document.getElementById("tiempo").innerText =
//         cronograma(ahora.obtenerHora(), 2) + ":" +
//         cronograma(ahora.obtenerMinutos(), 2) + ":" +
//         cronograma(ahora.obtenerSegundos(), 2);

//         document.getElementById("fecha").innerText =
//         ahora.obtenerAñoCompleto() + "-" +
//         cronograma(ahora.obtenerMes() + 1, 2) + "-" +
//         cronograma(ahora.obtenerFecha(), 2)+ "-" +
//         semana[ahora.obtenerDia()];
// }

// actualizarTiempo();
// intervalo(actualizarTiempo, 1000);

// function cronograma(num, digital) {
//     return String(num).padStart(digital, '0');
// }

