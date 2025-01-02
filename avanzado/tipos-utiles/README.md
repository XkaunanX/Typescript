# TypeScript - Conceptos Avanzados

## Decoradores

Los decoradores en TypeScript son una característica avanzada que permite modificar clases, métodos, propiedades o parámetros de manera declarativa. Se utilizan comúnmente en frameworks y bibliotecas para proporcionar metadatos y comportamientos adicionales a las clases y sus miembros.

### Decoradores de Clases

Los decoradores de clases permiten modificar o añadir comportamiento a una clase en su declaración. Son útiles para metaprogramación y se usan a menudo en frameworks como Angular.

### Decoradores de Métodos

Los decoradores de métodos permiten interceptar y modificar el comportamiento de los métodos dentro de una clase. Se utilizan para la validación, el monitoreo de rendimiento, o el ajuste de comportamiento antes o después de la ejecución del método.

### Decoradores de Propiedades

Los decoradores de propiedades permiten modificar o añadir características a las propiedades de una clase. Son útiles cuando se necesita realizar acciones específicas relacionadas con el acceso o la modificación de una propiedad.

## Genéricos

Los genéricos permiten escribir funciones, clases y interfaces que trabajan con diferentes tipos de datos sin sacrificar la seguridad de los tipos. Se utilizan para crear componentes reutilizables que pueden trabajar con cualquier tipo, mientras mantienen la verificación de tipo en tiempo de compilación.

### Genéricos Básicos

Los genéricos básicos permiten crear funciones o clases que aceptan tipos dinámicos. Los tipos genéricos se definen mediante una variable de tipo que se sustituye por un tipo específico cuando se usa la función o clase.

### Constraints

Las restricciones (constraints) en los genéricos permiten limitar los tipos que pueden ser utilizados. Se usan para especificar que un tipo genérico debe cumplir con una condición o interfaz particular.

### Tipos Útiles

TypeScript proporciona una serie de tipos útiles que se pueden usar con genéricos para mejorar la flexibilidad y la seguridad del código. Estos incluyen tipos como `Partial`, `Readonly`, y `Record`, que permiten trabajar con objetos y estructuras de datos de manera más eficaz.

## Módulos

Los módulos en TypeScript permiten organizar el código en partes más pequeñas y reutilizables. Se utilizan para dividir el código en archivos separados que pueden ser exportados e importados según sea necesario, mejorando la mantenibilidad y la claridad del código.

### Exportar

La palabra clave `export` permite que una función, clase, variable o interfaz se haga disponible para otros módulos. Esto facilita la reutilización del código y la separación de preocupaciones en un proyecto.

### Importar

La palabra clave `import` permite traer las funciones, clases, variables o interfaces exportadas desde otros módulos. Esto permite acceder a funcionalidades definidas en otros archivos, manteniendo el código modular y limpio.

### Namespace

Los `namespaces` en TypeScript se utilizan para organizar el código en contenedores lógicos. Aunque su uso ha disminuido con la introducción de los módulos, siguen siendo útiles para agrupar funciones y variables relacionadas dentro de un ámbito.

## Tipos Avanzados

TypeScript ofrece una variedad de tipos avanzados que permiten crear soluciones más sofisticadas y flexibles para problemas complejos.

### Tipos de Intersección

Los tipos de intersección permiten combinar varios tipos en uno solo. Esto se utiliza para crear un nuevo tipo que tenga las características de varios tipos diferentes.

### Guardias de Tipo

Las guardias de tipo permiten determinar el tipo de una variable en tiempo de ejecución. Son útiles para realizar comprobaciones de tipo y asegurarse de que el tipo de una variable sea el esperado antes de operar sobre ella.

### Tipos de Unión

Los tipos de unión permiten a una variable tomar uno de varios tipos. Se usan cuando un valor puede ser uno de varios tipos posibles, ofreciendo mayor flexibilidad en el código.

### Tipos Condicionales

Los tipos condicionales permiten definir un tipo que depende de una condición. Son útiles para crear tipos que cambian según el tipo de entrada.

### Palabras Clave `infer`

La palabra clave `infer` permite a TypeScript inferir el tipo de una variable dentro de una estructura condicional. Esto se utiliza en combinación con los tipos condicionales para hacer que TypeScript deduzca el tipo de manera automática.

### Tipos Mapeados

Los tipos mapeados permiten transformar un tipo en otro tipo, creando nuevos tipos basados en el tipo original. Son útiles para modificar las propiedades de un tipo de manera sistemática y dinámica.

Estos conceptos avanzados proporcionan herramientas poderosas para desarrollar aplicaciones más flexibles, seguras y fáciles de mantener en TypeScript. Al comprender y aplicar estos conceptos, los desarrolladores pueden mejorar su capacidad para escribir código eficiente y reutilizable en aplicaciones más complejas.
