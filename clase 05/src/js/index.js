console.log('Clase 05')

// typeof
/* nos devuelve que tipo de valor es la variable
typeof pedro === 'string'
true
== los dos son del mismo tipo?
=== los dos son del mismo tipo y tienen el mismo valor
metodos string
.lenght
.indexOf  me dice en que posición se encuentra un caracter o palabra específico, si devuelve -1 es que no lo encontró
var pedro = ('Hola')
pedro.indexOf(H)
0
.toUpperCase() / toLowerCase() , pasa a mayus, si no quiero perderlo debo guardarlo en una variable
nueva para no perderlo, porque no modifica la original
.replace()
var str = 'Hola Mariel'
var res = str.replace('Mariel', 'Guadalupe')
res = 'Hola Guadalupe'
pedro.trim saca los espacios en blanco en un texto.
.split
divide el string como yo quiero , por ejemplo:
var lala = ('Hola como estas?')
lala.string(' ') ---> me divide 'hola' 'como' 'estas' '?''
_----------------------------------
metodos de array
Array.isArray[]
.lenght 
.push() ------> agrega lo que yo le paso en el último lugar 
(si pedimos que nos devuelva algo, va a devolver el lenght )
.join = junta los valores de un array 
var = ['viento', 'lluvia']
var juntemosTodo = a.join() ----> juntemosTodo = 'viento, lluvia'
var user = ['Adrian', 'ferre']
var newUser = user.join('')
var newUser = "Adrian Ferré" 
--------------------------------------------------
splice ()
este metodo cambia el array original
queremos sacar el 
var numbers = [1,2,3,4,5,6,7]
var  deletedNumbers = numbers.splice(1,3) -----> desde donde y cuantos desde la posición inicial que indiqué
numbers = [1,5,6,7]
deletedNumbers = [2,3,4]
volver a agregarlos
numbers.splice(1,0,2,3,4) -----> desde la posición cero hasta 0 porque no queremos eliminar ninguno
y agregamos 2,3,4
numbers[1,2,3,4,5,6,7]
.slice devuelve elementos pero no los elimina
var fruits = [ banana, manzana, pera, frutilla]
var myBest = [1,2] -----_> devuelve un nuevo array con : [manzana,pera]
var numbers = [0,1,2,3,4,5]
var numbersCopy = numbers.slice()
var numbersCopy = [0,1,2,3,4,5] ----_> es una copia del primero, puedo usar este para evaluar lo que quiera asi no modifico el primero
numbersCopy.[0] ='Pedro'
var numbersCopy = ['Pedro',1,2,3,4,5]
var numbers = [0,1,2,3,4,5]
Entonces modifiqué la copia y no el original.
indexOf ----_> me devuelve la posición del elemento
*/
