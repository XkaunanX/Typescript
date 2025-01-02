// Decorador de clase
function Entity(config: { tableName: string }) {
    return function (constructor: Function) {
      constructor.prototype.tableName = config.tableName;
      constructor.prototype.save = function () {
        console.log(`Saving to table ${this.tableName}:`, this);
      };
    };
  }
  
  @Entity({ tableName: "users" })
  class User {
    constructor(public id: number, public name: string) {}
  }
  
  const user = new User(1, "Alice");
  user.save(); // Guardando en la tabla users: User { id: 1, name: 'Alice' }
  