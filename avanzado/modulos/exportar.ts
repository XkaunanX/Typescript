// Archivo: userModel.ts
export class User {
    constructor(public id: number, public name: string) {}
  }
  
  export function getUser(id: number): User {
    return new User(id, `User${id}`);
  }
  
  // Archivo: exporting-modules.ts
  import { User, getUser } from "./userModel";
  
  const newUser = new User(1, "Alice");
  console.log("New User:", newUser);
  
  const fetchedUser = getUser(2);
  console.log("Fetched User:", fetchedUser);
  