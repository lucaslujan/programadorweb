console.log('Clase 03')
// showMessage('Juan', 29)

// function showMessage(firstName) {
//   console.log('Hola ' + firstName)
// }

// var resultSum = sum(1, 2)

// console.log('Estoy afuera de la función suma es --> ' + resultSum)

// var resultProd = prod(1, 2)

// console.log('Estoy afuera de la función producto es --> ' + resultProd)

// function sum(value1, value2) {
//   var parsedValue1 = paseNumber(value1)
//   var parsedValue2 = paseNumber(value2)
//   var result = parsedValue1 + parsedValue2
//   return result
// }

// var numero = 2

// var cuadrado = calcCuadrado(numero)

// console.log('El resultado del cuadrado de ' + numero + ' es --> ' + cuadrado)

// function calcCuadrado(value1) {
//   var result = prod(value1, value1)
//   return result
// }

// function prod(value1, value2) {
//   var parsedValue1 = paseNumber(value1)
//   var parsedValue2 = paseNumber(value2)
//   var result = parsedValue1 * parsedValue2
//   return result
// }

// function paseNumber(value1) {
//   var parsedValue1 = parseFloat(value1, 10)
//   return parsedValue1
// }

// showMessage('Diego')

// showMessage('Mariel')

// showMessage('Lucas')

// function showMessage(firstName) {
//   alert('Hola ' + firstName + ' como andas?')
// }

/* SCOPE GLOBAL */

// console.log('---------')

// var APPNAME = 'MY APP'

// function showAppName() {
//   /* SCOPE LOCAL */
//   var functionName = 'Show app name'
//   console.log(APPNAME)
//   console.log(functionName)
// }

// function showMessage() {
//   /* SCOPE LOCAL */
//   var functionName = 'Show message'
//   console.log(APPNAME)
//   console.log(functionName)
// }

// showAppName()

// showMessage()

// showAppName()

// var APPNAME = 'MY APP'

// function newConsole() {
//   /* SCOPE LOCAL showAppName */
//   var log = function(text) {
//     alert(text)
//   }
//   return {
//     log: log
//   }
// }

// var newConsoleLog = newConsole()

// newConsoleLog.log('Juan')
// var app = (function() {
//   var sum = function(value1, value2) {
//     var parsedValue1 = paseNumber(value1)
//     var parsedValue2 = paseNumber(value2)
//     return parsedValue1 + parsedValue2
//   }

//   var showMessage = function(firstName) {
//     console.log('Hola ' + firstName)
//   }

//   function paseNumber(value1) {
//     var parsedValue1 = parseFloat(value1, 10)
//     return parsedValue1
//   }

//   return {
//     sum: sum,
//     showMessage: showMessage
//   }
// })()

// var result = app.sum(2, 7)

// console.log(result)

// app.showMessage('Carlos')
