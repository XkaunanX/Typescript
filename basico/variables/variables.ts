// Declaración de variables con diferentes alcances
const pi: number = 3.14;
let count: number = 0;

function incrementCount(): void {
  count++;
  console.log(`Count actual: ${count}`);
}

incrementCount();
incrementCount();

// Intentar reasignar una constante genera un error
// pi = 3.1416; // Error

// Alcance de var (no recomendado)
for (var i = 0; i < 3; i++) {
  console.log(`Dentro del ciclo: ${i}`);
}
console.log(`Fuera del ciclo (con var): ${i}`);
