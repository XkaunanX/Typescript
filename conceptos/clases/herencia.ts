// Clase base
class Animal {
    constructor(protected name: string) {}
  
    move(): void {
      console.log(`${this.name} está moviéndose.`);
    }
  }
  
  // Clase derivada
  class Dog extends Animal {
    constructor(name: string, private breed: string) {
      super(name);
    }
  
    bark(): void {
      console.log(`${this.name} dice: ¡Guau!`);
    }
  
    getBreed(): string {
      return this.breed;
    }
  }
  
  // Ejemplo de uso
  const dog = new Dog("Rex", "Labrador");
  dog.move(); // Rex está moviéndose.
  dog.bark(); // Rex dice: ¡Guau!
  console.log(dog.getBreed()); // Labrador
  