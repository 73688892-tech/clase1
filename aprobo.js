class Estudiante {
    constructor(nombre, carrera, edad){
        this.nombre = nombre;
        this.carrera = carrera;
        this.edad = edad;
        this.notas = [];
    }

    agregarNota(nota){
        this.notas.push(nota);
    }

    promedio(){
        if(this.notas.length === 0) return 0;
        let suma = this.notas.reduce((a,b) => a + b, 0);
        return suma / this.notas.length;
    }

    aprobo(){
        let prom = this.promedio();
        if(prom >= 11){
            return `${this.nombre} APROBÓ con ${prom.toFixed(2)}`;
        } else {
            return `${this.nombre} DESAPROBÓ con ${prom.toFixed(2)}`;
        }
    }
}

let e1 = new Estudiante("Yulisa", "Sistemas", 20);
e1.agregarNota(15);
e1.agregarNota(10);
e1.agregarNota(12);
console.log(e1.aprobo());