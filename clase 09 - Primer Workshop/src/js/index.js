console.log('Workshop - Listado de alumnos - Init')

var addStudentButton = document.getElementById('addStudentButton')

var deleteStudentButton = document.getElementById('deleteStudentButton')

var searchStudentButton = document.getElementById('searchStudentButton')

addStudentButton.onclick = function () {
  var firstName = document.getElementById('firstName').value
  var lastName = document.getElementById('lastName').value
  var dni = document.getElementById('dni').value
  var email = document.getElementById('email').value

  var error = studentsList.addStudent(firstName, lastName, dni, email)

  if (error) {
    alert(error)
  }
}

deleteStudentButton.onclick = function () {
  var deleteDni = document.getElementById('deleteDni').value

  var error = studentsList.deleteStudent(deleteDni)

  if (error) {
    alert(error)
  }
}

searchStudentButton.onclick = function () {
  var searchFirstName = document.getElementById('searchFirstName').value

  var error = studentsList.searchStudent(searchFirstName)

  if (error) {
    alert(error)
  }
}

studentsList.init()
