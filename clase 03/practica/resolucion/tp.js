var operation = prompt('Ingrese una operación a realizar', 'Ej: Sum, Res, Div, Mul')

var value1 = prompt('Ingrese el primer valor de la ' + operation)

var value2

do {
  value2 = prompt('Ingrese el segundo valor de la ' + operation)
} while (value2 === '0' && operation === 'Div')

var result = makeOperation(operation, value1, value2)

alert('El resultado de la ' + operation + ' es: ' + result)

function makeOperation(operation, value1, value2) {
  var parsedValue1 = parseFloat(value1, 10)
  var parsedValue2 = parseFloat(value2, 10)
  switch (operation) {
    case 'Sum':
      return parsedValue1 + parsedValue2
      break
    case 'Res':
      return parsedValue1 - parsedValue2
      break
    case 'Mul':
      return parsedValue1 * parsedValue2
      break
    case 'Div':
      return parsedValue1 / parsedValue2
      break
    default:
      return 'Operación desconocida'
      break
  }
}
