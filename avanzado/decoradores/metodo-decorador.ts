// Decorador de método para registrar tiempo de ejecución
function LogExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(`${propertyKey} ejecutado en ${(end - start).toFixed(2)} ms`);
      return result;
    };
  }
  
  class Calculator {
    @LogExecutionTime
    expensiveOperation(num: number): number {
      // Simula una operación costosa
      for (let i = 0; i < 1e6; i++) {}
      return num * num;
    }
  }
  
  const calc = new Calculator();
  console.log(calc.expensiveOperation(5));
  