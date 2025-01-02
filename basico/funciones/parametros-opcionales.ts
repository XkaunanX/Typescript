// Parámetros opcionales
function buildName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName;
  }
  
  console.log(buildName("Alice"));
  console.log(buildName("Bob", "Smith"));
  