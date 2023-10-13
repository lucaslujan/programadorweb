# Ejercicios

## Crear una función que reciba como parámetro un nombre de un alumno y que devuelva el nombre sin tilde y en mayúsculas

- Paso a paso:

1. Crear una función `removeDiacritics` que reciba como parámetro `studentName` y realice los siguientes pasos:
    1. Verifique que `studentName` sea un string, en caso contrario devolver false usando `typeof`.
    2. Usar el método `toUpperCase` para cambiar el string a mayúsculas y guardar el resultado en una variable `studentNameUpperCase`.
    3. Usar el método `replace` para reemplazar las vocales con tilde `Á É Í Ó Ú` por las vocales sin tilde `A E I O U` y guardar el resultado en una variable `studentNameUpperCaseNoDiacritics`. En este punto tener en cuenta que cada palabra tiene como máximo un tilde, por lo cual con usar el método una vez por cada vocal nos aseguramos que no quede ninguno. Hay reemplazar de a una vocal a la vez y luego sobre el resultado reemplazar la siguiente.
    4. Devolver el valor de la variable `studentNameUpperCaseNoDiacritics`.

[typeof](https://www.w3schools.com/js/js_datatypes.asp)

[Método replace](https://www.w3schools.com/jsref/jsref_replace.asp)

[Método toUpperCase](https://www.w3schools.com/jsref/jsref_touppercase.asp)

## Crear una función que me permita saber si un nombre de un alumno se encuentra en un array de alumnos, en caso de encontrarlo devolver la posición del alumno en el array.

- Paso a paso:

1. Crear una función `searchStudent` que reciba como parámetros un string `studentName`, un array `studentsList` y que realice los siguientes pasos:
   1. Verifique que `studentName` sea un string, en caso contrario devolver false usando `typeof`.
   2. Verifique que `studentsList` sea un array, en caso contrario devolver `false` usando el método `Array.isArray`.
   3. Buscar el string `studentName` en el array `studentsList` y devolver la posición del elemento si lo encontró y `false` en caso contrario, usando el método `indexOf`.

[typeof](https://www.w3schools.com/js/js_datatypes.asp)

[Método isArray](https://www.w3schools.com/jsref/jsref_isarray.asp)

[Método indexOf](https://www.w3schools.com/jsref/jsref_indexof_array.asp)

## Crear un función que permita encontrar un alumno en un array sin importar si el alumno tiene mayúsculas, minúsculas o tilde, en caso de encontrarlo devolver la posición del alumno en el array.

- Paso a paso:

1. Crear una función `searchStudentPro` que reciba como parámetros un string `studentName`, un array `studentsList` y que realice los siguientes pasos:
    1. Usar la función `removeDiacritics` para convertir `studentName` y guardar el resultado en la variable `studentNameConverted`.
    2. Usar la función `searchStudent`, pasar como parámetros la variable `studentNameConverted`, `studentsList` y guardar el resultado en una variable `searchResult`.
    3. Devolver el resultado de la variable `searchResult`


## Pedir al usuario que ingrese su nombre y buscarlo en un array de alumnos, sin importar si el usuario lo escribió en mayúsculas, minúsculas o con tilde, en caso de encontrarlo devolver la posición del alumno en el array.

- Datos iniciales:

```js 
var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']
```

- Paso a paso:

1. Pedir al usuario que ingrese un nombre usando el método `prompt` y guardando el dato en una variable `userName`.
3. Usar la función `searchStudentPro`, pasar como parámetros la variable `userName`, `studentsList` (de datos iniciales) y guardar el resultado en una variable `searchResult`.
4. Mostrar un mensaje de alerta diciendo si el usuario estaba en la lista o no.