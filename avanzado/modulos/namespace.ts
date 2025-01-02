// Archivo: shapes.ts
export namespace Shapes {
    export class Circle {
      constructor(public radius: number) {}
  
      area(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
  
    export class Rectangle {
      constructor(public width: number, public height: number) {}
  
      area(): number {
        return this.width * this.height;
      }
    }
  }
  
  // Archivo: namespace.ts
  import { Shapes } from "./shapes";
  
  const circle = new Shapes.Circle(10);
  console.log("Área del círculo:", circle.area());
  
  const rectangle = new Shapes.Rectangle(20, 30);
  console.log("Área del rectángulo:", rectangle.area());
  