type User = {
    id: number;
    name: string;
    email: string;
  };
  
  type UserIdType = User["id"]; // number
  type UserNameType = User["name"]; // string
  
  // Uso de acceso indexado
  function getUserEmail(user: User): User["email"] {
    return user.email;
  }
  
  const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
  console.log(getUserEmail(user)); // alice@example.com
  