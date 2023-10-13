## Crea una función que permita comparar dos palabras sin importar si tienen mayúsculas, minúsculas o tilde

Paso a paso:

1. Crear una función `compareTextNoDiacritics` que reciba como parámetro `text1`, `text2` y realice los siguientes pasos:
   1. Usar la función `removeDiacritics` del ejercicio hecho en clase para convertir `text1` y guardar el resultado en una variable `text1Converted`.
   2. Usar la función `removeDiacritics` del ejercicio hecho en clase para convertir `text2` y guardar el resultado en una variable `text2Converted`.
   3. Comparar las variables `text1Converted` y `text2Converted` y devolver `true` en caso de que sean iguales.

## Crea una función que permita buscar un nombre en un array de objetos sin importar si tienen mayúsculas, minúsculas o tilde

- Datos iniciales:

```js 
var objectList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
]
```

Paso a paso:


1. Crear una función `searchObjectList` que reciba como parámetros `studentName`, un array `objectList` (usar el de ejemplo) y que realice los siguientes pasos:
   1. Crear una variable `result` y asignarle el valor `false`.
   2. Recorra el array completo y por cada elemento guarde el valor en `studentObject` y realice los siguientes pasos:
      1. Use la función `compareTextNoDiacritics` que recibe como parámetros `studentName`, `studentObject.firstName`, en caso de que devuelva `true` guarda el indice en la variable `result`.
      2. Si `result` distinto de `false` corta la ejecución usando la sentencia `break`, sino continua.
   3. Cuando termina de recorrer el array devuelve el valor de `result`.