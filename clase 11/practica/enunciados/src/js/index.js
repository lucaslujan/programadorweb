console.log('Clase 11')

// Resolución tic tac

// var toggle = false

// $('.square').click(function (event) {
//   var id = event.target.id
//   var square = $('#' + id)
//   if (toggle) {
//     square.addClass('circle')
//     toggle = false
//   } else {
//     square.addClass('cross')
//     toggle = true
//   }
// })

$('#password').blur(function (event) {
  var id = event.target.id
  var inputPassword = $('#' + id)
  var value = inputPassword.val()
  console.log('Password super secreta: ', value)
  inputPassword.removeClass('bg-danger text-white')
  var passwordError = $('#passwordError')
  if (passwordError) {
    passwordError.remove()
  }
  if (value.length >= 6) {
    console.log('Oka')
  } else {
    inputPassword.addClass('bg-danger text-white')
    $('#passwordContainer').append('<p id="passwordError">La contraseña es muy corta!</p>')
  }
})

$('#email').blur(function (event) {
  var id = event.target.id
  var inputEmail = $('#' + id)
  var value = inputEmail.val()
  inputEmail.removeClass('bg-danger text-white')
  var emailError = $('#emailError')
  if (emailError) {
    emailError.remove()
  }

  let errorMessage = ''

  if (value.length <= 0) {
    errorMessage = 'Campo vacio'
  } else if (value.indexOf('@') === -1) {
    errorMessage = 'No tiene arroba'
  } else if (value.indexOf('.') === -1) {
    errorMessage = 'No tiene punto'
  }

  if (errorMessage) {
    inputEmail.addClass('bg-danger text-white')
    $('#emailContainer').append('<p id="emailError">' + errorMessage + '</p>')
  }
})
