## variable var
Las variables var tienen reglas como:

- no tienen problema con el tipo de dato
- se pueden iniciar varias a la vez, separandolas por coma
- los nombres de las variables, no se pueden usar numeros 
- se les da nombre siguiendo el camelCase
- 
## variable let
Las variables let tienen reglas como:

- las mismas que var, pero se diferencian en su scope
## variable const
Las variables const tienen reglas como:

- se deben inicializar con valor
- no se pueden reasignar
  
### Los Strings
- son texto
- metodos:
  - indexof() dice donde esta
  - includes() dice si esta o no 
  - concat() une strings o con + o solo se encierra en una backtick - y variables dentro de ${}
  - trimstart() trimend() o solo trim recorta espacios de incio y finales
  -  replace() cambia algo por algo
  -  slice() saca una porcion del texto
  -  repeat()  _r e p i t e_  
  -  split() divide por el caracter que se halla dado y devuelve una lista
  -  toUpperCase() -> a mayusculas
  -  toLowerCase() -> a mayusculas
### Los numeros
  - son un tipo de dato
  - se diferencian con otros tipos de datos por su color en consola
  - existen el objeto math que tiene funciones math que estan mas enfocadas a operaciones matematicas
  - el orden de las operaciones es * y / primero y + y - luego
  - variable++ primero toma la var y luego suma
  - ++variable primero suma
  - metodos:
    - parseInt() convierte a un numero
    - parseFloat() convierte a un numero con decimales
    - isIntegrer() verifica que sea o no entero

### operadores
  - < menor que
  - \> mayor que    
  - != diferente
  - !== estrictamente diferente
  - == igual
  - === estrictamente igual
  - null no hay nada
  - undefined no se ha definido
  
### objetos
  - un object literal son los que se definen literalmente con un = {}
  - existe la sintaxys de punto obj.propiedad
  - existe la sintaxys de corchete obj["propiedad"]
  - se puede agregar una propiedad si nos referimos a una propiedad inexistente y dandole un valor
  - con delete se borran propiedades
  - se puede obtener una propiedad mediante la destructuracion de obj: `const {precio} = producto;`
  - se pueden crear objetos dentro de otro
  - para destructurar la informacion de un obj anidado se llama primero el objeto y luego con `:{}` se accede a la propiedad que necesitamos `const {informacion:{medidas}} = producto;` _Esto nos crea una variable medidas_
  - podemos modificar sus propiedades a pesar de ser definido como const
  - se puede congelar con `Object.freeze(objeto);` _Esto no deja que see pueda modificar las propiedades_
  - Se puede sellar, para que no se agregen o quiten propiedades con `Object.seal(objeto);`
  - para verificar si un objeto esta sellado o congelado, se usa `Object.isSeal(obj);` 
  - se pueden unir dos objetos, asignandole uno a otro con `Object.assing(obj1,obj2);`
  - se pueden unir dos objetos copiando cada uno y sumandolos con el spread operator: `const obj3 = {...obj1,...obj2}
  - `this` se refiere al objeto global de ese momento, por lo tanto, si nos referimos a una propiedad dentro de un objeto, debemos llamarle `this.propiedad;`
  - las _fabricas_ o objects _constructors_ son una funcion que recibe parametros y los asigna a una propiedad de la funcion
    ```
    function Producto (nombre,precio){
      this.nombre = nombre;
      this.precio = precio;
    } 
    const prod1 = new Producto("Televisor",500)
    ```
  - `Objects.keys()` obtiene llaves
  - `Objects.values()` obtiene valores
  - `Objects.entries()` obtiene las parejas

### Arreglos
  - se crean con `[]`
  - no tienen que ser todos de un tipo
  - Es muy util mostralos con `console.table()`
  - se les puede sellar o congelar (son objetos)
  - `arreglo.push()` agregar al final
  - `arreglo.unshift()` agregar al principio
  - se puede obtener un resultado similar de las funciones anteriores creando un nuevo arreglo y sumando el objeto con el spread operator
  ```
  const carrito = []
  let resultado = [...carrito,prod1]    //push
  let resultado = [prod2,...resultado]  //unshift
  ``` 