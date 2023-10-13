console.log('Clase 06')

/*
LocalStorage
guarda información en mi navegador que solo pertenece a la pagina donde estoy navegando,
session storage se pierde cuando cierro la pestaña, el local storage se mantiene cuando vuelvo a esa pagina
localStorage.setItem(key (nombre descriptivo) ,value )
setItem -----> manda el dato
getItem ----> le pasamos la key
*/
// localStorage.setItem('token', 'UserName, Password')
// localStorage.getItem('token')
/*JSON*/
/*
Con JSON podemos guardar información en nuestro local storage y recibir,
pero ordenado, ya que de la forma anterior se guardaba sin rotular que era que, es decir , si la contraseña es
1234, capaz se interpreta como otro dato.
son todos strings
var jsonUser = JSON.stringify(user) -----------> devuelve los valores ordenados
*/
/*
var array = [1,2,3,'pepe']
var arrayStringify = JSON.stringify(array)
arrayStringify <------------- CONVERTIDA A OBJETO JSON
localStorage.setItem('algun nombre', arrayStringify )
var savedSomeName = localStorage.getItem('algun nombre')
savedSomeName -----------> lo guardamos en javaScript pero como todo un string , es decir que no lo puedo manejar
(asi tal cual como viene de json todavia hay que convertirlo a javascript)
var someNameObject = JSON.parse(savedSomeName)
someNameObject -----------> acá ya SI lo convertimos en un objeto javaScript
PARA REMOVER ALGO DEL LocalStorage
localStorage.removeItem(2)--------> hay que poner la key que queremos remover
*/
/*
ejercicio
var name = 'Hola' || 'Juan'
por default name sería hola
si el primero es verdadero , solo devuelve el primero, si es falso, ahi recién pasa al segundo.
el && todos tienen que ser verdaderos para que se cumpla la condición, no llega a la segunda si la primera ya es falsa.
user123={
}
var name = user123 && user123.firstName --------> como ya declaré user123, va a pasar a user123.firstName y va a preguntar si tiene un firstName
*/
