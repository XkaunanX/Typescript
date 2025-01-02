type User = {
    username: string;
    password: string;
  };
  
  class AuthService {
    private users: User[] = [];
  
    register(username: string, password: string): boolean {
      if (this.users.some(user => user.username === username)) {
        throw new Error("El usuario ya existe.");
      }
      this.users.push({ username, password });
      return true;
    }
  
    login(username: string, password: string): boolean {
      const user = this.users.find(
        user => user.username === username && user.password === password
      );
      return !!user;
    }
  }
  
  // Ejemplo de uso
  const auth = new AuthService();
  auth.register("admin", "1234");
  
  try {
    console.log(auth.login("admin", "1234")); // true
    console.log(auth.login("admin", "wrong")); // false
  } catch (error) {
    console.error(error.message);
  }
  