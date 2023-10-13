var studentsObjectsList = [
  { firstName: 'Adrián', lastName: 'Ferré', dni: 54353353 },
  { firstName: 'Mateo', lastName: 'Molina', dni: 54533343 },
  { firstName: 'Maria', lastName: 'Fernandez', dni: 54353512 }
]
console.log('Init')

var studentsListApp = (function () {
  var exposed = {}

  exposed.deleteElementById = function (id) {
    if (typeof id === 'string') {
      var mainList = document.getElementById('mainList')
      var student = document.getElementById(id)
      mainList.removeChild(student)
    }
  }

  exposed.showList = function (list) {
    if (Array.isArray(list)) {
      var container = document.getElementById('container')
      var nodoOl = document.createElement('ol')
      nodoOl.id = 'mainList'
      for (var i = 0; i < list.length; i++) {
        var student = list[i]
        var nodoStudent = _createStudent(student.firstName, student.lastName, student.dni, i)
        nodoOl.appendChild(nodoStudent)
      }
      container.appendChild(nodoOl)
    }
  }

  function _createStudent (firstName, lastName, dni, id) {
    var fullName = firstName + ' ' + lastName
    var fullNameTextNode = document.createTextNode(fullName)

    var nodoH1 = document.createElement('h1')

    nodoH1.appendChild(fullNameTextNode)

    var dniTextNode = document.createTextNode(dni)

    var nodoP = document.createElement('p')

    nodoP.appendChild(dniTextNode)

    var nodoLi = document.createElement('li')

    nodoLi.id = id

    nodoLi.appendChild(nodoH1)

    nodoLi.appendChild(nodoP)

    return nodoLi
  }

  return exposed
})()
