for (var i = 0; i < 3; i++) {
  var pepe = prompt('Ingrese un día de la semana', 'Ej: Lunes')
  var message = verifyDay(pepe)
  alert(message)
}

function verifyDay(dayOfTheWeek) {
  switch (dayOfTheWeek) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      return 'Es un día hábil'
      break
    case 'Sábado':
    case 'Domingo':
      return 'Es fin de semana'
      break
    default:
      return 'Día incorrecto'
      break
  }
}
