# Typescript

## Descripcion del Lenguaje

Typescript es un lenguaje de programacion de codigo abierto que es un superconjunto de JavaScript. Es decir, cualquier programa escrito en JavaScript es tambien un programa valido en Typescript, pero Typescript añade funcionalidades adicionales, como el tipado estatico. Typescript fue creado para ayudar a los desarrolladores a escribir aplicaciones mas grandes y complejas de manera mas segura y estructurada, mejorando la mantenibilidad y la escalabilidad del codigo.

## En que contexto nacio Typescript

Typescript fue desarrollado por Microsoft y lanzado en 2012. Nacio como una solucion a los problemas que los desarrolladores enfrentaban cuando trabajaban con aplicaciones JavaScript a gran escala. A medida que las aplicaciones web se hacian mas complejas, los desarrolladores comenzaron a necesitar un sistema de tipado y una mejor gestion del codigo que el proporcionado por JavaScript.

## Que problema vino a solucionar Typescript

Typescript vino a solucionar los siguientes problemas comunes en el desarrollo con JavaScript:

1. **Falta de tipado estatico**: JavaScript es un lenguaje de tipado dinamico, lo que puede causar errores dificiles de detectar. Typescript introduce un sistema de tipado estatico que permite detectar errores en tiempo de compilacion.

2. **Escalabilidad**: A medida que las aplicaciones crecen, el manejo del codigo en JavaScript se vuelve cada vez mas dificil. Typescript facilita la organizacion y gestion del codigo en aplicaciones grandes.

3. **Desarrollo orientado a objetos**: Typescript facilita la programacion orientada a objetos, que no es tan intuitiva en JavaScript.

4. **Compatibilidad con herramientas de desarrollo**: Typescript tiene un buen soporte en editores y herramientas como Visual Studio Code, ofreciendo autocompletado, refactorizacion y verificacion de tipos en tiempo real.

## Caracteristicas Principales

- **Nivel**: Typescript es un lenguaje de alto nivel, ya que abstrae detalles de bajo nivel y permite escribir aplicaciones de manera mas sencilla y entendible.

- **Uso de punteros**: A diferencia de lenguajes como C o C++, Typescript no utiliza punteros de manera directa, ya que se basa en JavaScript y se enfoca en la simplicidad y seguridad de los tipos de datos.

- **Paradigma y explicacion de los paradigmas**: Typescript es un lenguaje multiparadigma, lo que significa que soporta distintos estilos de programacion. Permite la programacion orientada a objetos (con clases e interfaces), la programacion funcional (con funciones de orden superior y tipos de funciones) y la programacion imperativa.

- **Tipo de tipado**: Typescript usa un sistema de tipado estatico, lo que significa que los tipos de las variables se definen en tiempo de compilacion. Esto ayuda a evitar errores de tipo en el momento de la ejecucion.

- **Compilado o interpretado**: Typescript es un lenguaje compilado. El codigo fuente de Typescript se convierte a JavaScript antes de ser ejecutado en el navegador o en el servidor. El compilador de Typescript realiza varias verificaciones de tipo y transformaciones para garantizar que el codigo sea mas seguro y eficiente.

- **Operadores**: Typescript comparte los mismos operadores que JavaScript, como los operadores aritmeticos, logicos, de comparacion y de asignacion. Sin embargo, al ser un superconjunto de JavaScript, Typescript añade funcionalidades adicionales como los operadores de tipos y los operadores de nullabilidad.

## Otros conceptos importantes de TypeScript

- **Interfaces**: Permiten definir contratos para las clases y objetos, asegurando que cumplan con ciertas formas o estructuras.
- **Clases y herencia**: TypeScript soporta la creación de clases y la herencia, lo que facilita la implementación de la programación orientada a objetos.
- **Genericos**: TypeScript permite crear funciones y clases reutilizables mediante genericos, lo que aumenta la flexibilidad del código.
- **Modulos**: TypeScript soporta la modularización del código, permitiendo importar y exportar elementos entre archivos de manera eficiente.
- **Decoradores**: Son una característica experimental que permite modificar clases, métodos y propiedades mediante anotaciones.
- **Union Types**: Permiten a las variables aceptar más de un tipo de dato, proporcionando flexibilidad en el tipo de valores que pueden ser asignados a ellas.
- **Type Inference**: TypeScript es capaz de inferir tipos de datos automáticamente cuando no se especifican explícitamente, mejorando la productividad del desarrollador.
- **Tuples**: Permiten almacenar un conjunto de valores de diferentes tipos en una sola estructura, ofreciendo más flexibilidad que los arreglos tradicionales.
- **Enums**: TypeScript permite el uso de enumeraciones para manejar conjuntos de constantes relacionadas de manera más legible y organizada.
- **Nullability y Opcionales**: TypeScript proporciona un manejo explícito de valores `null` y `undefined` y permite marcar propiedades o parámetros como opcionales.
- **Assertions de tipo**: Permite especificar explícitamente el tipo de una variable cuando TypeScript no puede inferirlo correctamente.
- **Namespaces**: Permiten organizar el código dentro de un espacio de nombres para evitar conflictos y mejorar la estructura del proyecto.

Ejemplo: 

```typescript
// Definicion de un tipo para los items del carrito
interface Item {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
}

// Clase para manejar el carrito de compras
class Carrito {
    private items: Item[] = [];

    // Agregar un item al carrito
    agregarItem(item: Item): void {
        const existente = this.items.find(i => i.id === item.id);
        if (existente) {
            existente.cantidad += item.cantidad;
        } else {
            this.items.push(item);
        }
    }

    // Eliminar un item por su ID
    eliminarItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    // Calcular el precio total del carrito
    calcularTotal(): number {
        return this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
    }

    // Mostrar el contenido del carrito
    mostrarItems(): void {
        console.log("Contenido del carrito:");
        this.items.forEach(item => {
            console.log(`${item.cantidad}x ${item.nombre} - $${item.precio.toFixed(2)} cada uno`);
        });
    }
}

// Funcion principal para probar el carrito
function main(): void {
    const carrito = new Carrito();

    // Agregar items
    carrito.agregarItem({ id: 1, nombre: "Manzana", precio: 1.2, cantidad: 3 });
    carrito.agregarItem({ id: 2, nombre: "Pan", precio: 2.5, cantidad: 2 });
    carrito.agregarItem({ id: 1, nombre: "Manzana", precio: 1.2, cantidad: 2 }); // Agregar mas manzanas

    // Mostrar items
    carrito.mostrarItems();

    // Mostrar el total
    console.log(`Total: $${carrito.calcularTotal().toFixed(2)}`);

    // Eliminar un item
    carrito.eliminarItem(1);

    // Mostrar items y total nuevamente
    carrito.mostrarItems();
    console.log(`Total: $${carrito.calcularTotal().toFixed(2)}`);
}

// Ejecutar la funcion principal
main();
```
