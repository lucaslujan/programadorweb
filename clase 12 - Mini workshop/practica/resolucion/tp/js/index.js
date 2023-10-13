console.log('Workshop - Listado de alumnos - Init')

var addStudentButton = $('#addStudentButton')

var deleteStudentButton = $('#deleteStudentButton')

var searchStudentButton = $('#searchStudentButton')

addStudentButton.click(function () {
  var firstName = document.getElementById('firstName').value
  var lastName = document.getElementById('lastName').value
  var dni = document.getElementById('dni').value
  var email = document.getElementById('email').value

  var error = studentsList.addStudent(firstName, lastName, dni, email)

  if (error) {
    alert(error)
  }
})

searchStudentButton.click(function () {
  var searchFirstName = document.getElementById('searchFirstName').value

  var error = studentsList.searchStudent(searchFirstName)

  if (error) {
    alert(error)
  }
})

studentsList.init()
