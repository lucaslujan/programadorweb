function user(firstName, lastName, age, address) {
  this.id = Date.now()
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.address = address
}

user.prototype.fullName = function() {
  var fullName = this.firstName + ', ' + this.lastName
  return fullName
}

user.prototype.isLegalAge = function() {
  var isLegalAge = this.age >= 18
  return isLegalAge
}

var newUser = new user('Adrián', 'Ferré', 29, 'Calle Siempreviva 742')

console.log('El nombre completo del usuario es ' + newUser.fullName())

console.log('Mayoria de edad ' + newUser.isLegalAge())
