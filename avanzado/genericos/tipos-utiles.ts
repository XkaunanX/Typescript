// Uso de tipos utilitarios

// `Partial`: Hace que todas las propiedades sean opcionales
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  
  function updateProduct(product: Product, updates: Partial<Product>): Product {
    return { ...product, ...updates };
  }
  
  const product: Product = { id: 1, name: "Laptop", description: "Alta gama", price: 1500 };
  const updatedProduct = updateProduct(product, { price: 1400, description: "Actualizado" });
  console.log("Producto actualizado:", updatedProduct);
  
  // `Pick`: Selecciona un subconjunto de propiedades
  type ProductPreview = Pick<Product, "id" | "name">;
  
  const preview: ProductPreview = { id: 1, name: "Laptop" };
  console.log("Vista previa del producto:", preview);
  
  // `Omit`: Excluye propiedades específicas
  type ProductWithoutDescription = Omit<Product, "description">;
  
  const noDescription: ProductWithoutDescription = { id: 2, name: "Mouse", price: 20 };
  console.log("Producto sin descripción:", noDescription);
  
  // Uso avanzado: combinando utilitarios
  type ReadOnlyProduct = Readonly<Product>;
  const readOnlyProduct: ReadOnlyProduct = { id: 3, name: "Teclado", description: "Mecánico", price: 50 };
  // readOnlyProduct.price = 55; // Error: no se puede modificar una propiedad de solo lectura
  console.log("Producto de solo lectura:", readOnlyProduct);
  