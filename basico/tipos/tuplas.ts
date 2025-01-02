// Declaración de una tupla
let person: [string, number, boolean] = ["Alice", 25, true];

// Acceso a elementos
console.log(`Nombre: ${person[0]}, Edad: ${person[1]}, Activo: ${person[2]}`);

// Modificación de elementos
person[1] = 26;
person[2] = false;
console.log("Tupla modificada:", person);

// Uso de tuplas en una función
function getPerson(): [string, number, boolean] {
  return ["Bob", 30, true];
}

const anotherPerson = getPerson();
console.log("Otra persona:", anotherPerson);
