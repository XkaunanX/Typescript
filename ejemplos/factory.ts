interface Product {
    name: string;
    price: number;
  }
  
  class ProductFactory {
    static createProduct(type: "phone" | "laptop"): Product {
      if (type === "phone") {
        return { name: "Smartphone", price: 700 };
      } else if (type === "laptop") {
        return { name: "Laptop", price: 1500 };
      }
      throw new Error("Tipo de producto no soportado");
    }
  }
  
  // Ejemplo de uso
  const phone = ProductFactory.createProduct("phone");
  const laptop = ProductFactory.createProduct("laptop");
  console.log(phone, laptop);
  