# Crear un modulo que exponga las siguientes funciones:

- Una función que permita mostrar un array de alumnos en el DOM en forma de lista, mostrando el nombre, apellido y DNI. El nombre y apellido en un tag `<h1>`y DNI en un `<p>`, los tres tienen que estar dentro de un `<li>` identificado con el id del alumno.

- Una función que permite elminar un alumno de una lista en el DOM usando el numero de id del alumno.


```js
var studentsObjectsList = [
  { firstName: 'Adrián', lastName: 'Ferré' , dni: 54353353 },
  { firstName: 'Mateo', lastName: 'Molina', dni: 54533343 },
  { firstName: 'Maria', lastName: 'Fernandez',dni: 54353512 }
]
```

Paso a paso: 

1. Crear un modulo (funcion autoinvocada sin nombre) y guardarlo en una variable `studentsListApp`.
2. Dentro del modulo crear un objeto `exposed` vacio `{}`, en este objeto vamos a guardar las funciones expuestas.
   2. Crear una primera función `createStudent` que reciba como parametros `firstName`, `lastName` y `dni`, y que cree un nodo `<li>` con los valores recibidos, de la siguiente manera:
      1. Crear un textNode `fullName` y guardar el valor del nombre y apellido recibidos.
      2. Crear un nodo `<h1>` y hacerle un append del `fullName`.
      3. Crear un textNode `dniText` y guardar el valor de `dni`.
      4. Crear un nodo `<p>` y hacerle un append del `dniText`.
      5. Crear un nodo `<li>`y hacerle un append del nodo `<h1>` y otro append del nodo `<p>`.
      6. Devolver con un return el nodo `<li>`.
   3. Crear una segunda funcion `showList` que reciba como parametros `list` y que muetre en el DOM la lista, haciendo los siguientes pasos:
      1. Verifique si recibe un array, en caso contrario no hace nada.
      2. Busque la lista principal usando `getElementById` y guardandola en una variable `mainList`.
      3. Recorra el array y por cada estudiante llame a la función `createStudent`, guardando el valor en una variable auxiliar `student`.
      3. Hacer una append de cada `student` en la `mainList`.
   4. Crear una tercera función `deleteStudent` que permita eliminar un studiandte dandole un id, de la siguiente manera:
      1. Validar que el id recibido sea un string, en caso contrario no hacer nada.
      2. Buscar el nodo padre, en este caso la lista y gardarlo en una variable `mainList`.
      3. Buscar el nodo a eliminar usando `getElementById` y guardarlo en una variable student.
      4. Usar el método `removeChild` en `mainList` para eliminar el nodo hijo `student`.
3. Exponer la función `showList` creando una propiedad con el mismo nombre en `exposed`.
3. Exponer la función `deleteStudent` creando una propiedad con el mismo nombre en `exposed`.
4. Devolver el objeto `exposed`.

[Listas en HTML](https://www.w3schools.com/html/html_lists.asp)

[getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)

[appendChild](https://www.w3schools.com/jsref/met_node_appendchild.asp)

[removeChild](https://www.w3schools.com/jsref/met_node_removechild.asp)


