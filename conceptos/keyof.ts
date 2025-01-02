type User = {
    id: number;
    name: string;
    email: string;
  };
  
  // `keyof` obtiene las claves de un tipo
  type UserKeys = keyof User; // "id" | "name" | "email"
  
  // Uso de `keyof` para validación dinámica
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
  console.log(getValue(user, "name")); // Alice
  