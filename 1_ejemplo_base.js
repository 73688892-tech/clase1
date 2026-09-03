class NodoDoble{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDoble {
    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(dato) {
        const nuevoNodo = new NodoDoble(dato);

        if(this.cabeza === null){
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
            return;
        }

        this.cola.siguiente = nuevoNodo;
        nuevoNodo.anterior = this.cola;
        this.cola = nuevoNodo;
    }

    imprimir(){
        let actual = this.cabeza;
        let resultado = "Este es el inicio: ";
        while(actual != null){
            resultado += `[${actual.dato}] <-> `;
            actual = actual.siguiente;
        }
        return resultado + "fin";
    }
}

// PROBANDO
let lista = new ListaDoble();
lista.agregar(5);
lista.agregar(15);
lista.agregar(25);
console.log(lista.imprimir());