/**
 * Deberá poder ingresar un día de la semana
 * Deberá poder compararlo con todos los dias de la semana
 * Deberá evaluar si es un día de semana y fin de semana mediante un mensaje similar a 'El día es hábil' sino 'El dia es fin de semana';
 * En caso de encontrar el día utilizar la sentencia break y terminar el for
 */

var daySelected = prompt('Ingrese un dia de la semana (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo)')

switch (daySelected) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('El ' + daySelected + ' es un día hábil')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('El ' + daySelected + ' es un día de fin de semana')
    break
  default:
    console.log('El ' + daySelected + ' no es un día')
    break
}
