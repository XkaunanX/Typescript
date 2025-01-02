// Declaración básica de interfaces
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };
  const user2: User = { id: 2, name: "Bob", email: "bob@example.com" };
  
  console.log(user1, user2);
  