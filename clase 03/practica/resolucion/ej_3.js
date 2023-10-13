do {
  var password = prompt('Ingrese una contraseña de seis letras o más')
  var passwordOk = verifyPasswordLength(password)
} while (!passwordOk)

alert('Contraseña valida!')

function verifyPasswordLength(password) {
  var passwordLength = password.length

  var isValid = passwordLength >= 6

  return isValid
}
