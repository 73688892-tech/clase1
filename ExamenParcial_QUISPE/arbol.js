//IDs Empleados - ABB
class NodoArbol {
    constructor(id) {
        this.id = id;
        this.izq = null;
        this.der = null;
    }
}

class ArbolEmpleados {
    constructor() {
        this.raiz = null;
    }

    insertar(nuevoId) {
        if (this.raiz === null) {
            this.raiz = new NodoArbol(nuevoId);
            console.log(`ID ${nuevoId} registrado como raíz`);
            return;
        }
        this._insertarRec(this.raiz, nuevoId);
    }

    _insertarRec(nodo, nuevoId) {
        if (nuevoId === nodo.id) {
            console.log(`ADVERTENCIA: El ID ${nuevoId} ya está registrado, no se duplica`);
            return;
        }
        if (nuevoId < nodo.id) {
            if (nodo.izq === null) {
                nodo.izq = new NodoArbol(nuevoId);
                console.log(`ID ${nuevoId} insertado a la izquierda de ${nodo.id}`);
            } else {
                this._insertarRec(nodo.izq, nuevoId);
            }
        } else {
            if (nodo.der === null) {
                nodo.der = new NodoArbol(nuevoId);
                console.log(`ID ${nuevoId} insertado a la derecha de ${nodo.id}`);
            } else {
                this._insertarRec(nodo.der, nuevoId);
            }
        }
    }

    // listar todos los IDs ordenados (in-order)
    listarIDs() {
        console.log("--- IDs en orden ---");
        this._inOrden(this.raiz);
    }

    _inOrden(nodo) {
        if (nodo !== null) {
            this._inOrden(nodo.izq);
            console.log(nodo.id);
            this._inOrden(nodo.der);
        }
    }
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- PRUEBA ARBOL ---");
let arbol = new ArbolEmpleados();
arbol.insertar(50);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(20);
arbol.insertar(30); // duplicado
arbol.listarIDs();