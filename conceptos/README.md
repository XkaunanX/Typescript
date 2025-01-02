# TypeScript - Conceptos Clave

Este repositorio cubre conceptos importantes en TypeScript relacionados con el manejo de asincronía, clases, interfaces, y más. A continuación, se describen algunos de los conceptos clave que se tratan en este repositorio.

## Async

En TypeScript, `async` es una palabra clave que se usa para declarar funciones que realizan operaciones asincrónicas. Una función `async` siempre devuelve una promesa, y dentro de esta función, se pueden usar operaciones asincrónicas como `await`.

## Async-Await

`async` y `await` son un par de palabras clave que permiten trabajar con promesas de manera más sencilla. La palabra clave `await` se usa dentro de una función `async` para esperar la resolución de una promesa. Esto permite escribir código asincrónico de manera más legible, como si fuera código síncrono.

## Promesas

Las promesas en TypeScript son una forma de manejar operaciones asincrónicas. Una promesa representa una operación que podría completarse en el futuro, pero cuyo resultado aún no está disponible. Las promesas pueden estar en uno de tres estados: pendiente, resuelta o rechazada.

## Clases

Las clases en TypeScript son plantillas para crear objetos con propiedades y métodos. Son una característica fundamental de la programación orientada a objetos (OOP) y permiten la creación de estructuras de datos complejas de manera más organizada y estructurada.

## Clases Abstractas

Las clases abstractas en TypeScript son clases que no se pueden instanciar directamente, pero que sirven como base para otras clases. Pueden contener métodos abstractos, que son métodos que deben ser implementados en las clases derivadas.

## Herencia

La herencia es un mecanismo de la programación orientada a objetos que permite que una clase derive de otra, heredando sus propiedades y métodos. En TypeScript, una clase puede heredar de otra utilizando la palabra clave `extends`, permitiendo reutilizar y extender funcionalidades de clases ya existentes.

## Modificadores de Acceso

Los modificadores de acceso en TypeScript se utilizan para controlar la visibilidad de las propiedades y métodos de una clase. Los modificadores más comunes son `public`, `private` y `protected`. `public` hace que la propiedad o método sea accesible desde cualquier parte del código, `private` limita el acceso solo dentro de la clase, y `protected` permite el acceso desde la clase y sus clases derivadas.

## Indexed Access

El acceso indexado en TypeScript se refiere a la habilidad de acceder a las propiedades de un objeto mediante un índice. Este mecanismo es útil cuando se trabaja con tipos dinámicos y se necesita acceder a propiedades en tiempo de ejecución.

## Keyof

La palabra clave `keyof` en TypeScript se utiliza para obtener el tipo de las claves de un objeto. Esto permite trabajar con los nombres de las propiedades de un objeto de manera dinámica y segura, especialmente cuando se manejan tipos complejos y genéricos.

## Tipos-Interfaces

En TypeScript, tanto los tipos (`type`) como las interfaces (`interface`) se utilizan para definir la estructura de los objetos. Aunque son similares, las interfaces son más adecuadas para definir estructuras de objetos y clases, mientras que los tipos son más flexibles y pueden representar una variedad de tipos de datos.

Estos conceptos son fundamentales para trabajar de manera efectiva con TypeScript y aprovechar su sistema de tipos estáticos para crear aplicaciones robustas y mantenibles.
