type User = {
    id: number;
    name: string;
    email: string;
  };
  
  class UserManager {
    private users: User[] = [];
    private nextId: number = 1;
  
    createUser(name: string, email: string): User {
      const newUser: User = { id: this.nextId++, name, email };
      this.users.push(newUser);
      return newUser;
    }
  
    getUserById(id: number): User | undefined {
      return this.users.find(user => user.id === id);
    }
  
    updateUser(id: number, updates: Partial<Omit<User, "id">>): User | undefined {
      const user = this.getUserById(id);
      if (user) {
        Object.assign(user, updates);
      }
      return user;
    }
  
    deleteUser(id: number): boolean {
      const initialLength = this.users.length;
      this.users = this.users.filter(user => user.id !== id);
      return this.users.length < initialLength;
    }
  }
  
  // Ejemplo de uso
  const userManager = new UserManager();
  const user1 = userManager.createUser("Alice", "alice@example.com");
  console.log("Creado:", user1);
  
  const updatedUser = userManager.updateUser(user1.id, { name: "Alicia" });
  console.log("Actualizado:", updatedUser);
  
  console.log("Eliminar:", userManager.deleteUser(user1.id));
  