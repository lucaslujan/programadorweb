$(document).ready(function () {
  console.log('Clase 12 - Mini Workshop')

  list.init()

  var addFirstNameButton = $('#addFirstNameButton').click(function () {
    var firstNameInput = $('#addFirstName')
    var value = firstNameInput.val()

    list.addName(value)
  })
})
