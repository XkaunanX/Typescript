class Person {
    public name: string;
    private age: number;
    protected address: string;
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    getDetails(): string {
      return `${this.name}, ${this.age} años, vive en ${this.address}`;
    }
  }
  
  class Employee extends Person {
    constructor(name: string, age: number, address: string, private job: string) {
      super(name, age, address);
    }
  
    getJobDetails(): string {
      return `${this.name} trabaja como ${this.job} en ${this.address}`;
    }
  }
  
  // Ejemplo de uso
  const emp = new Employee("Carlos", 30, "Calle Falsa 123", "Desarrollador");
  console.log(emp.getDetails()); // Carlos, 30 años, vive en Calle Falsa 123
  console.log(emp.getJobDetails()); // Carlos trabaja como Desarrollador en Calle Falsa 123
  