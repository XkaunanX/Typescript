// Uso básico de genéricos
function reverseArray<T>(items: T[]): T[] {
    return items.reverse();
  }
  
  // Uso con diferentes tipos
  const numbers = [1, 2, 3, 4, 5];
  const reversedNumbers = reverseArray<number>(numbers);
  console.log("Números invertidos:", reversedNumbers);
  
  const strings = ["TypeScript", "es", "genial"];
  const reversedStrings = reverseArray<string>(strings);
  console.log("Cadenas invertidas:", reversedStrings);
  
  // Clase genérica
  class Pair<T, U> {
    constructor(public first: T, public second: U) {}
  
    swap(): Pair<U, T> {
      return new Pair(this.second, this.first);
    }
  }
  
  const pair = new Pair<number, string>(1, "uno");
  console.log("Par original:", pair);
  console.log("Par intercambiado:", pair.swap());
  