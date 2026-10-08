// Visor de Galería - Lista Doble
class NodoFoto {
    constructor(nombreImagen) {
        this.nombreImagen = nombreImagen;
        this.siguiente = null;
        this.anterior = null;
    }
}

class Galeria {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.fotoActual = null;
    }

    agregarFoto(nombre) {
        let nodo = new NodoFoto(nombre);
        if (!this.cabeza) {
            this.cabeza = nodo;
            this.cola = nodo;
            this.fotoActual = nodo;
        } else {
            this.cola.siguiente = nodo;
            nodo.anterior = this.cola;
            this.cola = nodo;
        }
        console.log(`Foto agregada al final: ${nombre}`);
    }

    siguienteFoto() {
        if (this.fotoActual && this.fotoActual.siguiente) {
            this.fotoActual = this.fotoActual.siguiente;
            console.log(`Avanzando a: ${this.fotoActual.nombreImagen}`);
            return this.fotoActual.nombreImagen;
        }
        console.log("No hay siguiente, estás en la última");
        return null;
    }

    fotoAnterior() {
        if (this.fotoActual && this.fotoActual.anterior) {
            this.fotoActual = this.fotoActual.anterior;
            console.log(`Retrocediendo a: ${this.fotoActual.nombreImagen}`);
            return this.fotoActual.nombreImagen;
        }
        console.log("No hay anterior, estás en la primera");
        return null;
    }
}

// --- BLOQUE DE PRUEBAS OBLIGATORIO ---
console.log("--- PRUEBA GALERIA ---");
let galeria = new Galeria();
galeria.agregarFoto("playa.jpg");
galeria.agregarFoto("montaña.png");
galeria.agregarFoto("familia.jpeg");
galeria.siguienteFoto();
galeria.siguienteFoto();
galeria.fotoAnterior();