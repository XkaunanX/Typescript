// Definición de un tipo condicional
type IsString<T> = T extends string ? true : false;

// Uso del tipo condicional
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// Ejemplo avanzado con tipos condicionales y mapeados
type Filter<T, U> = T extends U ? T : never;

type Numbers = Filter<number | string | boolean, number>; // type Numbers = number
type Strings = Filter<number | string | boolean, string>; // type Strings = string
