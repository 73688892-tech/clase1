//Taquilla Cine - Cola
class TaquillaCine {
    constructor() {
        this.fila = [];
    }

    llegarCliente(nombre) {
        this.fila.push(nombre);
        console.log(`${nombre} llegó y se formó al final de la fila`);
    }

    atenderCliente() {
        if (this.fila.length === 0) {
            console.log("No hay clientes en fila");
            return null;
        }
        let atendido = this.fila.shift();
        console.log(`Atendiendo a: ${atendido} - ¡Que disfrute la película!`);
        return atendido;
    }

    mostrarFila() {
        if (this.fila.length === 0) {
            console.log("Fila vacía");
        } else {
            console.log("Clientes esperando: " + this.fila.join(" -> "));
        }
    }
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- PRUEBA TAQUILLA ---");
let taquilla = new TaquillaCine();
taquilla.llegarCliente("Juan");
taquilla.llegarCliente("Ana");
taquilla.llegarCliente("Luis");
taquilla.mostrarFila();
taquilla.atenderCliente();
taquilla.mostrarFila();