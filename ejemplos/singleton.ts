class Singleton {
    private static instance: Singleton;
  
    private constructor() {
      // Constructor privado para evitar instanciación
    }
  
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    public doSomething(): void {
      console.log("Singleton activo.");
    }
  }
  
  // Ejemplo de uso
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();
  console.log(singleton1 === singleton2); // true
  