//  Simulador Deshacer - Pila
class EditorTexto {
    constructor() {
        this.pilaAcciones = [];
    }

    escribirAccion(accion) {
        this.pilaAcciones.push(accion);
        console.log(`Acción guardada: ${accion}`);
    }

    deshacer() {
        if (this.pilaAcciones.length === 0) {
            console.log("No hay nada que deshacer");
            return null;
        }
        let accionBorrada = this.pilaAcciones.pop();
        console.log(`Se revirtió la acción: ${accionBorrada}`);
        return accionBorrada;
    }

    verEstadoActual() {
        if (this.pilaAcciones.length === 0) {
            console.log("Editor vacío");
        } else {
            console.log(`Última acción en cima: ${this.pilaAcciones[this.pilaAcciones.length - 1]}`);
        }
    }
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- PRUEBA EDITOR ---");
let editor = new EditorTexto();
editor.escribirAccion("Escribió Hola");
editor.escribirAccion("Borró una palabra");
editor.verEstadoActual();
editor.deshacer();
editor.verEstadoActual();