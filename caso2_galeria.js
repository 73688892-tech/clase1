// Yulisa Quispe

class FotoNodo {
  constructor(urlImagen) {
    this.urlImagen = urlImagen;
    this.siguiente = null;
    this.anterior = null;
  }
}

class GaleriaFotos {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.actual = null;
  }

  // agrega una foto nueva al final de la galeria
  agregarFoto(url) {
    const nueva = new FotoNodo(url);

    if (!this.cabeza) {
      this.cabeza = nueva;
      this.cola = nueva;
      this.actual = nueva;
      return;
    }

    nueva.anterior = this.cola;
    this.cola.siguiente = nueva;
    this.cola = nueva;
  }

  // avanza a la siguiente foto
  siguienteFoto() {
    if (!this.actual) {
      console.log("La galeria esta vacia");
      return;
    }

    if (!this.actual.siguiente) {
      console.log("No hay mas fotos, llegaste al final de la galeria");
      return;
    }

    this.actual = this.actual.siguiente;
    console.log("Mostrando: " + this.actual.urlImagen);
  }

  // retrocede a la foto anterior
  anteriorFoto() {
    if (!this.actual) {
      console.log("La galeria esta vacia");
      return;
    }

    if (!this.actual.anterior) {
      console.log("Estas al inicio de la galeria, no hay fotos anteriores");
      return;
    }

    this.actual = this.actual.anterior;
    console.log("Mostrando: " + this.actual.urlImagen);
  }
}

// pruebas
const galeria = new GaleriaFotos();

galeria.agregarFoto("foto1.jpg");
galeria.agregarFoto("foto2.jpg");
galeria.agregarFoto("foto3.jpg");

galeria.siguienteFoto();
galeria.siguienteFoto();
galeria.siguienteFoto();
galeria.anteriorFoto();