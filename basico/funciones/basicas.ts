// Declaración y retorno
function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // Función sin retorno
  function logMessage(message: string): void {
    console.log(`Mensaje: ${message}`);
  }
  
  // Uso de las funciones
  console.log(`Resultado de multiplicar: ${multiply(3, 7)}`);
  logMessage("Hola desde TypeScript");
  