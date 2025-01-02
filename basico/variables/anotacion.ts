// Ejemplo de anotaciones de tipos
let age: number = 30;
let name: string = "John";
let isActive: boolean = true;

function showInfo(name: string, age: number, active: boolean): string {
  return `Nombre: ${name}, Edad: ${age}, Activo: ${active}`;
}

console.log(showInfo(name, age, isActive));
