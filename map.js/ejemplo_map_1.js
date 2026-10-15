// Crear el mapa
let libretaContactos = new Map();

// Agregar contactos .set
libretaContactos.set("Ana","987655165");
libretaContactos.set("Sandra","959565957");
libretaContactos.set("Carlos","987654321"); // este dato es reemplazado
libretaContactos.set("Jesus","935565957");
libretaContactos.set("Carlos","999888777");

// Consultar si existe una clave .has
console.log(libretaContactos.has("Ana")); // true
let respuesta = libretaContactos.has("Diego");
console.log(respuesta); // false

// Obtener un valor .get
console.log(libretaContactos.get("Carlos")); // 999888777

// Ver el tamaño total con .size
console.log(`Total de contactos: ${libretaContactos.size}`); // Total de contactos: 4

// Recorrer el Map con un bucle for .. of
for(let [nombre, telefono] of libretaContactos){
    console.log(`${nombre} => Telefono: ${telefono}`);
}