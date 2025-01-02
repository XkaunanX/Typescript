// Uso básico de `infer` para deducir tipos
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Ejemplo con funciones
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}`;
}

type AddReturnType = GetReturnType<typeof add>; // type AddReturnType = number
type GreetReturnType = GetReturnType<typeof greet>; // type GreetReturnType = string

// Uso avanzado de `infer` con tuplas
type ElementType<T> = T extends (infer E)[] ? E : never;

type ArrayType = ElementType<string[]>; // type ArrayType = string
type TupleType = ElementType<[number, string]>; // type TupleType = number | string
