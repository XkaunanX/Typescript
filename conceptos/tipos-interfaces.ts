// Usando `type`
type UserType = {
    id: number;
    name: string;
  };
  
  // Usando `interface`
  interface UserInterface {
    id: number;
    name: string;
  }
  
  // Diferencia clave: interfaces son abiertas
  interface UserInterface {
    email?: string; // Se puede extender posteriormente
  }
  
  const user: UserInterface = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  