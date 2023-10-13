// # Mejorar el modulo de la lista de alumnos

// - Crear un formulario que me permita cargar nombre, apellido y agregarlo a una lista mediante un botón de `Agregar`.
// - Crear un formulario que mediante el ingreso de un nombre de la lista lo borre, tanto del array como del DOM.
// - Agregar un botón que permita ordenar la lista por nombre, usando `sort`.

// [sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)

var studentsListApp = (function () {
  var exposed = {}

  var studentsList = []

  exposed.addStudent = function (firstName, lastName, dni) {
    // Busco mi lista principal en el DOM por id
    var mainList = document.getElementById('mainList')

    var studentObject = {
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      index: studentsList.length
    }

    studentsList.push(studentObject)

    // Creo un elemento HTML con los datos del alumno
    var li = createStudentLi(firstName, lastName, dni)

    // Agrego el elemento HTML en mi lista general que busque por id antes
    mainList.appendChild(li)
  }

  exposed.deleteStudent = function (firstName) {
    if (typeof firstName === 'string') {
      // Primero consigo la lista padre
      var mainList = document.getElementById('mainList')

      // Busco el estudiante
      var studentObject = studentsList.find(function (student) {
        return student.firstName === firstName
      })
      if (studentObject) {
        // Borro el elemento del array
        studentsList.splice(studentObject.index, 1)
        // Luego consigo el hijo a borrar
        var student = document.getElementById(studentObject.dni)
        // Borro de la lista padre el hijo
        mainList.removeChild(student)
      }
    }
  }

  // Creo una función que me devuelva solo un alumno
  function createStudentLi (firstName, lastName, dni) {
    // Creo mis tags HTML
    var li = document.createElement('li')
    var h1 = document.createElement('h6')
    var p = document.createElement('p')

    // Creo los textos para poner adentro de mis tags HTML
    var fullNameTextNode = document.createTextNode(firstName + ' ' + lastName)
    var dniTextNode = document.createTextNode('DNI: ' + dni)

    // Agrego primero los textos en mis tags HTML
    h1.appendChild(fullNameTextNode)
    p.appendChild(dniTextNode)

    // Por último agrego el h1 y el p en el tag li
    li.appendChild(h1)
    li.appendChild(p)
    li.id = dni

    li.className = 'list-group-item'

    // Devulelvo el tag li
    return li
  }

  return exposed
})()

var addStudentButton = document.getElementById('addStudentButton')

addStudentButton.onclick = function () {
  var firstName = document.getElementById('firstNameInput').value
  var lastName = document.getElementById('lastNameInput').value
  var dni = document.getElementById('dniInput').value
  studentsListApp.addStudent(firstName, lastName, dni)
}

var deleteStudentButton = document.getElementById('deleteStudentButton')

deleteStudentButton.onclick = function () {
  var firstName = document.getElementById('firstNameDeleteInput').value
  studentsListApp.deleteStudent(firstName)
}
