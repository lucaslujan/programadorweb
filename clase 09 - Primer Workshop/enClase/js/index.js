var addStudentButton = document.getElementById('addStudentButton')
var deleteStudentButton = document.getElementById('deleteStudentButton')

studentsModule.init()

addStudentButton.onclick = function () {
  var firstName = document.getElementById('firstName').value
  var lastName = document.getElementById('lastName').value
  var dni = document.getElementById('dni').value
  var email = document.getElementById('email').value

  studentsModule.addStudent(firstName, lastName, dni, email)
}

deleteStudentButton.onclick = function () {
  var dni = document.getElementById('deleteDni').value
  studentsModule.deleteStudent(dni)
}
