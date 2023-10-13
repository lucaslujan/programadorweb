## Crea una función que permita eliminar un nombre de una lista en el localStorage

- La función tiene que poder eliminar un nombre en una lista tipo array almacenada en el localStorage, se debe usar las funciones de la clase anterior para poder buscar en la lista. Se provee una lista inicial que podría estar cargada o no, la función tiene que poder verificarlo y no romper si la lista no existe.


- Datos iniciales opcionales:

```js 
var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']
```

- Paso a paso para pre cargar lista:

0. Guardar una lista inicial en el localStorage siguiendo los siguientes pasos:
   1. Usar el método `JSON.stringify`, pasar como parámetro la lista `studentsList` (de datos iniciales) y guardar el resultado en una variable `parsedList`.
   2. Usar el método `localStorage.setItem` y pasar como parámetros la key `'savedList'` y `parsedList`.

- Paso a paso:

1. Crear una función `removeNameLocalStorage` que reciba como parámetro `studentName` y realice los siguientes pasos:
   1. Usar el método `localStorage.getItem`, pasar como parámetro la key `'savedList'` y guardar el resultado en la variable `temporalList`, en caso de no recibir nada asignarle el valor `[]` a `temporalList`.
   2. Usar el método `JSON.parse` pasar como parámetro `temporalList` y guardar el resultado en la variable `temporalList`.
   3. Usar la función `searchStudentPro` de la clase 05 para encontrar la posición del estudiante en la lista y guardar el valor en la variable `studentIndex`.
   4. Si `studentIndex` es distinto de `false` usar la función `splice` para eliminar el elemento del array `temporalList`, sino no hacer nada y seguir con los otros pasos.
   5. Usar el método `JSON.stringify`, pasar como parámetro la lista `temporalList` y guardar el resultado en una variable `parsedList`.
   6. Usar el método `localStorage.setItem` y pasar como parámetros la key `'savedList'` y `parsedList`.




[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp)

[JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)

[localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

[splice](https://www.w3schools.com/jsref/jsref_splice.asp)