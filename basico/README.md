# TypeScript - Conceptos Basicos

Este repositorio aborda conceptos esenciales de TypeScript relacionados con funciones, interfaces, tipos de datos, variables y más. A continuación, se describen los temas tratados en este repositorio.

## Funciones

En TypeScript, las funciones son bloques de código reutilizables que se pueden definir para ejecutar tareas específicas. Las funciones en TypeScript pueden aceptar parámetros y devolver valores. Además, se puede declarar el tipo de retorno y los tipos de los parámetros para asegurar un manejo adecuado de los datos.

### Funciones Basicas

Las funciones básicas en TypeScript son similares a las de JavaScript, pero con la ventaja de poder especificar los tipos de los parámetros y el valor de retorno. Esto mejora la seguridad del tipo y ayuda a prevenir errores en tiempo de compilación.

### Parametros Opcionales

TypeScript permite declarar parámetros opcionales en las funciones. Estos parámetros pueden o no ser proporcionados al momento de la llamada de la función, y su valor por defecto es `undefined` si no se pasa ningún valor.

### Rest Params

Los parámetros rest permiten a una función aceptar un número variable de argumentos. En lugar de declarar un número fijo de parámetros, se usa un solo parámetro que recoge todos los valores restantes en una lista o arreglo.

## Interfaces

Las interfaces en TypeScript permiten definir la estructura de objetos y clases. A través de interfaces, se pueden especificar qué propiedades y métodos deben tener los objetos. Son fundamentales para la programación orientada a objetos y la creación de APIs robustas.

### Interfaces Basicas

Las interfaces básicas definen la estructura de un objeto mediante propiedades y métodos. Al implementarlas en una clase, aseguran que la clase cumpla con la forma especificada en la interfaz.

### Propiedades

En las interfaces, las propiedades definen los atributos que un objeto debe tener. Las propiedades pueden tener diferentes tipos y deben seguir las reglas del tipo que se asignen.

### Readonly

El modificador `readonly` en las interfaces de TypeScript se utiliza para hacer que ciertas propiedades de un objeto no puedan ser modificadas después de que el objeto haya sido creado. Esto ayuda a garantizar la inmutabilidad de las propiedades en ciertos escenarios.

## Tipos

TypeScript ofrece una serie de tipos básicos y avanzados que permiten definir los tipos de datos de manera más estricta y segura, garantizando que el código sea más confiable y fácil de mantener.

### Arrays

Los arreglos en TypeScript son colecciones ordenadas de elementos del mismo tipo. Los arreglos permiten almacenar múltiples valores en una sola variable, y TypeScript proporciona herramientas para manejar su tipo y operaciones de manera eficiente.

### Enums

Los `enums` en TypeScript son un tipo especial que permite definir un conjunto de constantes numeradas o con cadenas de texto. Son útiles cuando se necesita trabajar con un conjunto de valores fijos y proporcionar un nombre significativo para ellos.

### Primitivos

Los tipos primitivos en TypeScript incluyen valores básicos como `string`, `number`, `boolean`, `null`, `undefined`, y `symbol`. Estos son los tipos fundamentales que se usan para almacenar datos simples y realizar operaciones básicas.

### Tuplas

Las tuplas en TypeScript son un tipo de arreglo que permite almacenar una colección de elementos de diferentes tipos. A diferencia de los arreglos tradicionales, las tuplas tienen un tamaño y tipo fijo para cada uno de sus elementos.

## Variables

Las variables en TypeScript permiten almacenar datos y realizar operaciones sobre ellos. Se pueden declarar con tipos explícitos para mejorar la seguridad de los datos.

### Anotacion

La anotación de tipo en TypeScript permite especificar el tipo de una variable al momento de su declaración. Esto garantiza que la variable solo puede contener valores del tipo especificado, lo que ayuda a detectar errores en tiempo de compilación.

### Variables

En TypeScript, las variables pueden declararse usando `let`, `const` o `var`. `let` y `const` son preferidos por su manejo adecuado del ámbito de bloque, mientras que `var` tiene un alcance más amplio y no se recomienda para nuevos proyectos.

Estos conceptos son fundamentales para escribir código seguro y eficiente en TypeScript, aprovechando su sistema de tipos estáticos para mejorar la calidad del software.
