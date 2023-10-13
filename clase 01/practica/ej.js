// Pedir nombre mediante prompt y disparar un alert con algún texto más ->

var firstName

firstName = prompt('Escribí tu nombre:', 'Ej: Juan')

var message1 = 'Tu nombre es: ' + firstName + ' !'

alert(message1)

// Pedir un número y sumarlo a otro que este en una variable ->

var number1 = 5

var number2 = prompt('Escribí un número:', 'Ej: 8')

var add1 = number1 + parseFloat(number2, 10)

alert('La suma del número guardado y el que ingresaste es: ' + add1 + ' !')

// Pedir un número y restarlo a otro que este en una variable ->

var number3 = prompt('Escribí un número:', 'Ej: 8')

var sub = number1 - parseFloat(number3, 10)

alert('La resta del número guardado y el que ingresaste es: ' + sub + ' !')

// Pedir un número, luego otro y ambos sumarlos ->

var number4 = prompt('Escribí un número:', 'Ej: 8')

var number5 = prompt('Escribí un número:', 'Ej: 8')

var resultado = parseFloat(number4, 10) + parseFloat(number5, 10)

alert('La suma de los dos números que ingresaste es: ' + resultado + ' !')

alert('Completaste el ejercicio !')
