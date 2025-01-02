// Decorador de propiedad para validación
function MinValue(min: number) {
    return function (target: any, propertyKey: string) {
      let value: number;
  
      const getter = function () {
        return value;
      };
  
      const setter = function (newValue: number) {
        if (newValue < min) {
          throw new Error(`${propertyKey} debe ser mayor o igual a ${min}`);
        }
        value = newValue;
      };
  
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
      });
    };
  }
  
  class Product {
    @MinValue(0)
    price: number;
  
    constructor(price: number) {
      this.price = price;
    }
  }
  
  try {
    const prod = new Product(-10); // Error: price debe ser mayor o igual a 0
  } catch (err) {
    console.error(err.message);
  }
  
  const validProduct = new Product(50);
  console.log("Producto válido con precio:", validProduct.price);
  