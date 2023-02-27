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
  - `array.pop()` elimina el ultimo del arreglo
  - `array.splice(desde,cantidad)` elimina la cantidad de elementos que le diga, desde el index que le dga
  - destructuring de arrays = se debe hacer con las pos posiciones
  ```
  const numeros = [1,3,5,7,9,11,13]
  const [first,second,third,,fifth,...resto] = numeros
  //second equivaldra a 3
  //fifth equivaldra a 9
  //resto equivaldra a un nuevo array con los sobrantes
  ```
  - `array.forEach((elemento)=>{}` no retorna nada
  - `array.map((elemento)=>{}` si retorna el elemento en su ultimo estado
### Funciones
  #### funcion declarativa
  - `function miFuncion(parametro){mi cod}`
  #### funcion de expresion
  - `const variable = function miFuncion(parametro){mi cod}`
  diferencias? la funcion de expresion no se declara en la primera lectura, gracias al hoisting, la funcion declarativa se lee y se registra
- funcion vs metodo:
  funcion = nombreFuncion()
  metodo = .miMetodo()
- los argumentos son datos que se le dan a la funcion.
- para declarar argumentos por default se le declara en la funcion `parametro = "opcional"`
- las propiedades y metodos se agregan como una pareja de un diccionario siempre, por lo que un metodo es `metodo : function(){}`
- las arrow functions tiene sintaxis = `(parametros)=>{}` y son mas cortas y bonitas de usar  
  - si es solo un parametro, no se necesitan los parentesis
  - cuando el cuerpo es solo una linea, el return es implicito y se puede prescindir de los parentesis
  - para un objeto, le podemos agregar setter y getter haciendo funciones dentro del obj pero en vez de usar function, usamos set o get
    ```
    set cancion(valor){
      this.propiedad = valor 
    }
    ```
### estructuras de control
- if 
  son los if normales de toda la vida
  pueden tener su respectivo `else{}` o `else if(){}`
- switch case
  Es el sswitch case de toda la vida, usa el `case` y el `default` y `break`
- El operador ternario en js tiene como sintaxis : `condicion ? siVerdadero : siFalso`
- for loop
  el for loop tiene 3 partes, el index inicializado, la condicon y la iteracion. Su ejecucion se puede ver modificado por un `break` que se sale de todo el loop, o por un `continue` que se salta hasta la siguiente iteracion
- while es el while de toda la vida
- Do while tiene la estructura: `do{}while();` y su diferencia es que hara siempre 1 vez el codigo dentro del bloque del do
- `miArray.forEach((varParaElemento,varParaIndex)=>{})` El propio forEach es un metodo de los arrays ideal para recorrer arreglos
- `miArray.map((varParaElemento,varParaIndex)=>{})` map crea un nuevo arreglo y lo retorna
- `for(varParaElemento of miArrayDeElementos){}` Esto es un for of y es una version recortada del for comun
- `for(varParaIndice in miArrayDeElementos){}` Esto es un for in e itera sobre arreglos

### metodos de array
- `.includes("verifica")` verifica que un elemento exista en un array
  - `.some(objeto => {return objeto.nombre === "olla"})` verifica que un elemento exista **en un arreglo de objetos** tambien se puede usar con arrays comunes añadiendo esta condicion al final
  - `findIndex(elemento => elemento === "Este es el que busco")` Este metodo usa la condicion que retorna para devolver el indice del elemento encontrado (-1 si no se encuentra)  _solo devuelve el primero encontrado_
  - `.reduce((acumulado,elementoActual)=> acumulado + elementoActual , 0)` Reduce toma una lista y la comprime a un solo valor. Toma dos parametros, siendo el primero una funcion que toma, a su vez, dos parametros que son el acumulado y el elemento actual. lo que retorne este bloque de codigo, lo guardara en acumulado. Acumulado, se inicia en el valor que se le pase en el segundo parametro de la funcion reduce.
  - `.filter(elemento => elemento > 5)` devuelve los elementos en un arreglo que segun la funcion, devuelva true
  - `.find(elemento =>  elemento > 5)`  devuelve el **primer elemento** que segun la funcion, devuelva true
  - `.every(elemento =>  elemento > 5)`  devuelve un booleano con base a que **todos los elementos** cumplan la funcion de la funcion
  - `.concat(array)`suma el array con el array pasado como argumento. 
    - `nuevoArray[...array,..."hola"]` Se puede lograr lo mismo con el spread operator (los tres puntos) ya que clona los elementos de un array y los pone. **Tener en cuenta** que la cadena hola se agregara letra por letra por tener el spread operator.
### DOM
  - Document object model
  - `document.getElementsByClass("nombre-de-la-clase")` seleccionar elementos por su clase
  - `document.getElementById("id-del-elemento")` busca el primer elemento que coincida con el id
  - `document.querySelector(".clase-padre #id-del-hijo")` busca el primer elemento que coincida con los selectores
  - `document.querySelectorAll(".clase-padre #id-del-hijo")` retorna todos los elemento que coincidan con los selectores
  -  para modificar el texto de algo, hay tres opciones:
    ```
    .innerText      // no encuentra si visibility esta en hidden 
    .textContent    // si lo encuentra
    .innerHTML      // se trae todo el html
    ```

  - se puede modificar una img cambiando su propiedad source
  - para cambiar el estilo de un elemento, se puede acceder a su propiedad style y luego a lo que queramos cambiar
  - tambien podemos usar classList con el cual podemos add/remove/toggle
  - `elemento.children` retorna la cantidad de hijos que tiene un elemento
  - `elementoPadre.removeChild(elementoPadre.children[2])` remueve el hijo que este en el indice especificado
  - `document.createElement("div")` crea un elemento
  - `elementoPadre.appendChild(elementoCreado)` agrega un elemento ya creado 

### eventos
  - `DOMContentLoaded` es el nombre del evento para cuando el html este listo
  #### Eventos con el mouse
    - `click` es el nombre del evento para cualquier click
    - `mouseenter` es el nombre del evento para el mouse por encima
    - `mouseout` es el nombre del evento para el mouse entra y sale
    - `dbclick` es para dos clicks
  #### Eventos con el teclado
    - `keydown` se presiona una tecla
    - `blur` se enfoca/escribe y luego se deja de escribir o se desenfoca
    - `copy` se copia
    - `paste` se pega
    - `input` cuando se cambia algo
  #### Evento submit
    - `submit` es el evento de cuando se envia
    - se puede utilizar `nombreVariableEvento.preventDefault()` para evitar que haga lo que deberia
  #### Eventos scroll
    - `scroll` cuando sea que se haga scroll
    - para acceder a la poscion en y, se usa `window.scrollY` que devuleve la cantidad de px
    - `getBoundingClientRect()` Esta obtiene altura, ancho y a cuanta distancia esta el elemento 
  #### Event bubbling
    - Es cuando se llama un evento y desencadena cosas que no esperabamos por ejemplo, agregar un event listener a un elemento padre y que un elemento hijo tambien lo use
    - `e.stopProoagation()` Este para la propagacion del elemento
    - podemos utilizar _delegation_ si lo que hacemos es: tomar el evento y obtener la lista de clases del target con `e.target.classList` y ya con esta lista de clases, podemos actuar en consecuencia   

### local storage
  - se usa el obj `localStorage` o `sessionEstorage` el cual perdura aunque reinicies el pc
  - `.setItem()`es un metodo que recibe 2 parametros que son la clave y valor de lo que se quiere guardar en local
  - todo lo que se guarda, son strings
  - `JSON.stringify` es capaz de convertir listas u objetos a un string
  - `.getItem()` recibe un parametro que es la clave, y devuelve null si no existe
  - `JSON.parse()` es una funcion que convierte un string a ya sea un arreglo u objeto
  - `.removeItem()` solo requiere la clave para eliminar lo almacenado
  - para actualizar se sobreescribe
  - `.clear()` es un metodo que limpia todo 

### fechas
  - son objetos, que se crean, istanciandolas como `new Date()`
  - si se les pasa un str para crear una fecha con el dia que le diremos, se sigue el formato _mm-dd-aaaa_
  - del objeto que creemos de fecha, podemos obtener año,mes,dia,hora,minutos etc con `.getFullYear` `.getMonth` `.getDay` `.getMinutes` `.getHours` 
  - `.getTime` obtiene los milisegundos transcurridos entre 1970 y ahora. Se puede usar `Date.now()` tambien
  - los metodos, tambien tienen su `set` para modificar la fecha
  
### prototypes
  - son funciones que crean objetos, reciben argumentos para sus propiedades y se usa this para referirse a si mismo
  - se instacia con `new`
  - para agregarun metodo, se debe acceder a el y solo ahi se agrega una funcionn: `MiClase.prototype.miMetodo = function(){}`
  - **DEBE** ser con `function` ya que esta busca en el objeto actuak mientras que una _arrow function_ busca en el objeto global
  -  se puede heradar, mandndo a llamar direcatametne a la clase, usando `.call` un metodo que recibe como primer parametro el valor de `this` y el resto, son parametros de la funcion: `MyClase.call(this,arg1,arg2)`
  -  `Object.create()` crea un obj apartir de otro,por lo que para heredar metodos, se
     -  accede al prototype del objeto que heredó
     -  se define e el prototipo como un onjeto que se crea, a partir del prototipo de la clase a heredad: `ClaseHija.prototype = Object.create(ClasePadre.prototype)`
### POO
- Es simplemente una mejora de la sintaxis de un prototype
- `class MyClass{}` de esta manera se crea una clase
- `constructor(){}` es lo que se usa como constructor de la clase que puede recibir parametros *notese que no se usa function*
- `myMethod(){}` esta es la manera en la que se agregan metodos
- Existen algo que se llama propiedades estáticas las cuales son propiedades que pertenecen a la clase, se llaman directamente a la clase se usa `estatic` antes del metodo o atributo de clase
- Para heredar se usa `extends` en la creacion de de la clase `Class SonClass extends ParentClass{}` Luego se Deberá usar el método `super()` para referirse al metodo de la clase padre incluyendo el constructor
- Se puede sobreescribir un método sí simplemente en la clase hija se escribe otro método que se llame exactamente igual
- Para privatizar una propiedad se le debe definir con un # hoy justo antes de su nombre `#miPropiedad`

### set, maps y symbols
- Todos son tipos de objetos por lo tanto se crean con new
#### sets
- los sets son listas de valores sin duplicados
- el metodo `.add` agrega el valor pasado como parametro
- `.size` devuelve su longitud
- `.has` devulve si tiene lo pasado en el parametro
- `.delete` para eliminar un elemento
- `.clear` lo vacia
- No tienen índex y si le preguntas por el índex te va a devolver el valor
- existe algo que se llama `WeakSet()` Al que solamente se le pueden agregar objetos
- Los widget no son operables
### maps
- Son objetos que almacenan de la manera clave de valor Solo que aquí la clave y el valor pueden ser cualquier tipo de dato
-  `.set` settea una pareja
-  `.has` devuelve si hay o no una clave
-  `.get` obtiene el valor de una clave
-  `.clear` lo limpia
-  Son iterables
-  Aquí también existen los weak  maps
-  No se puede acceder a su longitud
-  No son iterables
### symbols
- Estás creando variables únicas 
- Las propiedades que se agregarán objeto que son de tipo símbolos no son iterables
- `const variable = Symbol();`

### generadores
- Se crean agregando un * antes de la declaración  del nombre de una función
- En vez de `return` usa `yield`
- Cuando se usa el método next De la función generadora ésta devuelve 2 valores: `value` & `done` Y en este punto la función generadora se queda dormida para cuando se vuelva a llamar, seguir con el proximo yield