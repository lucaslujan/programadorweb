console.log('Clase 13')

$(document).ready(function () {
  $('#addEmailButton').click(function () {
    var email = $('#email').val()
    var error = validateEmail(email)
    if (error) {
      $('#errorDialog').slideDown(300)
      $('#errorTitle').empty()
      $('#errorTitle').append(error)
    }
  })
  $('#okErrorButton').click(function () {
    $('#errorDialog').slideUp(500)
  })
})

function validateEmail (email) {
  if (!email) {
    return 'E-mail vacio'
  } else if (email.indexOf('@') === -1) {
    return 'No tiene arroba'
  } else if (email.indexOf('.') === -1) {
    return 'No tiene punto'
  }
}
