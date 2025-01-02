interface Person {
    name: string;
    age: number;
  }
  
  interface Employee {
    employeeId: number;
    department: string;
  }
  
  type Worker = Person & Employee;
  
  const worker: Worker = {
    name: "John",
    age: 30,
    employeeId: 12345,
    department: "IT",
  };
  
  console.log(worker);
  