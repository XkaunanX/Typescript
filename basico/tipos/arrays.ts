// Declaración de arreglos
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// Operaciones con arreglos
numbers.push(6);
numbers = numbers.map(num => num * 2);

console.log("Arreglo de números multiplicados por 2:", numbers);

names.sort();
console.log("Nombres ordenados:", names);

// Iteración sobre un arreglo
names.forEach((name, index) => {
  console.log(`Nombre ${index + 1}: ${name}`);
});
