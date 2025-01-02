// Uso de parámetros rest
function concatenateStrings(...strings: string[]): string {
    return strings.join(", ");
  }
  
  console.log(concatenateStrings("Alice", "Bob", "Charlie"));
  console.log(concatenateStrings("TypeScript", "es", "genial"));
  