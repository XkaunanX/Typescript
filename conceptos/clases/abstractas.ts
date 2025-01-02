// Clase abstracta
abstract class Shape {
    constructor(protected color: string) {}
  
    abstract area(): number; // Método abstracto
  
    describe(): void {
      console.log(`Esta figura es de color ${this.color}.`);
    }
  }
  
  // Clase concreta que implementa la clase abstracta
  class Circle extends Shape {
    constructor(color: string, private radius: number) {
      super(color);
    }
  
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Ejemplo de uso
  const circle = new Circle("rojo", 5);
  circle.describe(); // Esta figura es de color rojo.
  console.log(`Área: ${circle.area()}`); // Área: 78.53981633974483
  