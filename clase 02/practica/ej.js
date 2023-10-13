/**
 * Crear un array con todos los dias de la semana
 * Recorrerlos y mostrar cuando sea domingo o sábado un mensaje en consola.
 */

var daysWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

console.log('Usando for e if:')

for (var i = 0; i < daysWeek.length; i++) {
  var day = daysWeek[i]

  if (day === 'Sábado' || day === 'Domingo') {
    console.log('El ' + day + ' es un día de fin de semana')
  }
}

console.log('--------------------')

console.log('Usando for y switch:')

for (var j = 0; j < daysWeek.length; j++) {
  var day = daysWeek[j]

  switch (day) {
    case 'Sábado':
    case 'Domingo':
      console.log('El ' + day + ' es un día de fin de semana')
      break
  }
}

console.log('--------------------')

console.log('Usando while y switch:')

var k = 0
while (k < daysWeek.length) {
  var day = daysWeek[k]

  switch (day) {
    case 'Sábado':
    case 'Domingo':
      console.log('El ' + day + ' es un día de fin de semana')
      break
  }
  k++
}
