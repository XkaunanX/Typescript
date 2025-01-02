// Propiedades de solo lectura
interface Point {
    readonly x: number;
    readonly y: number;
  }
  
  const startPoint: Point = { x: 0, y: 0 };
  
  // startPoint.x = 10; // Error: Cannot assign to 'x'
  console.log(startPoint);
  