// Yulisa Quispe

// Tarea 1 - Caso 1: lista simplemente enlazada para el inventario de una tienda.

class ProductoNodo {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.siguiente = null;
  }
}

class Inventario {
  constructor() {
    this.cabeza = null;
  }

  // agrega un producto nuevo al final de la lista
  agregarProducto(nombre, cantidad, precio) {
    const nuevo = new ProductoNodo(nombre, cantidad, precio);

    if (!this.cabeza) {
      this.cabeza = nuevo;
      return;
    }

    let temp = this.cabeza;
    while (temp.siguiente) {
      temp = temp.siguiente;
    }
    temp.siguiente = nuevo;
  }

  // busca el producto por nombre y muestra cantidad y precio
  consultarStock(nombre) {
    let temp = this.cabeza;

    while (temp) {
      if (temp.nombre === nombre) {
        console.log("Producto: " + temp.nombre + " - Cantidad: " + temp.cantidad + " - Precio: S/ " + temp.precio);
        return;
      }
      temp = temp.siguiente;
    }

    console.log("No se encontro el producto: " + nombre);
  }
}

// pruebas
const inventario = new Inventario();

inventario.agregarProducto("Arroz", 50, 4.5);
inventario.agregarProducto("Aceite", 20, 9.9);
inventario.agregarProducto("Azucar", 35, 3.8);

inventario.consultarStock("Aceite");
inventario.consultarStock("Fideos");