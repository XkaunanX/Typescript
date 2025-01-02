// Uso de propiedades opcionales
interface Product {
    id: number;
    name: string;
    description?: string;
  }
  
  const product1: Product = { id: 1, name: "Laptop" };
  const product2: Product = { id: 2, name: "Mouse", description: "Un mouse inalámbrico" };
  
  console.log(product1, product2);
  