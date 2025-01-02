// Ejemplo de tipos mapeados
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  // Crear un tipo donde todas las propiedades son opcionales
  type PartialUser = Partial<User>;
  
  // Crear un tipo donde todas las propiedades son de solo lectura
  type ReadonlyUser = Readonly<User>;
  
  // Crear un tipo con solo ciertas propiedades
  type PickedUser = Pick<User, "id" | "name">;
  
  // Ejemplo de uso
  const partialUser: PartialUser = { name: "Alice" }; // válido
  const readonlyUser: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" };
  // readonlyUser.email = "new@example.com"; // Error: es de solo lectura
  
  const pickedUser: PickedUser = { id: 2, name: "Bob" }; // válido
  