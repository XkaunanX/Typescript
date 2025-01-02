// Restricciones en genéricos
interface HasId {
    id: number;
  }
  
  function getById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
  }
  
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  const user = getById(users, 2);
  console.log("Usuario encontrado:", user);
  
  // Clases con restricciones genéricas
  class Repository<T extends HasId> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    findById(id: number): T | undefined {
      return this.items.find(item => item.id === id);
    }
  }
  
  const repo = new Repository<{ id: number; name: string }>();
  repo.add({ id: 1, name: "Producto A" });
  repo.add({ id: 2, name: "Producto B" });
  
  console.log("Producto encontrado:", repo.findById(1));
  