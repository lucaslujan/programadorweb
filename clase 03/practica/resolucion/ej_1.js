var firstName = prompt('Ingresá tu nombre', 'Ej: Juan')

var lastName = prompt('Ingresá tu apellido', 'Ej: Perez')

showFullName(firstName, lastName)

function showFullName(firstName, lastName) {
  var fullName = firstName + ', ' + lastName
  var message = 'Hola ' + fullName
  console.log(message)
}
