console.log('Clase 12 - Mini Workshop')

$(document).ready(function () {
  list.init()

  $('#addFirstNameButton').click(function () {
    var firstName = $('#addFirstName').val()
    list.addFirstName(firstName)
  })
})
