var studentsModule = (function () {
  var exposed = {}

  exposed.addStudent = function (firstName, lastName, dni, email) {
    var student = {
      id: dni,
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      email: email
    }

    var studentNode = _createStudentNode(student)

    _saveStudentLocal(student)

    var mainList = document.getElementById('mainList')

    mainList.appendChild(studentNode)
  }

  exposed.deleteStudent = function (dni) {
    var mainList = document.getElementById('mainList')

    var studentNode = document.getElementById(dni)

    mainList.removeChild(studentNode)

    _deleteStudentLocal(dni)
  }

  exposed.init = function () {
    console.log('Init')
    var mainList = document.getElementById('mainList')

    var savedList = localStorage.getItem('studentsList')

    var parsedList = savedList ? JSON.parse(savedList) : []

    for (var i = 0; i < parsedList.length; i++) {
      var student = parsedList[i]
      var studentNode = _createStudentNode(student)
      mainList.appendChild(studentNode)
    }
  }

  function _deleteStudentLocal (dni) {
    var savedList = localStorage.getItem('studentsList')

    var parsedList = savedList ? JSON.parse(savedList) : []

    for (var i = 0; i < parsedList.length; i++) {
      var student = parsedList[i]

      if (dni === student.dni) {
        parsedList.splice(i, 1)
        break
      }
    }

    var stringList = JSON.stringify(parsedList)

    localStorage.setItem('studentsList', stringList)
  }

  function _saveStudentLocal (student) {
    var savedList = localStorage.getItem('studentsList')

    var parsedList = savedList ? JSON.parse(savedList) : []

    parsedList.push(student)

    var stringList = JSON.stringify(parsedList)

    localStorage.setItem('studentsList', stringList)
  }

  function _createStudentNode (student) {
    var firstNameTextNode = document.createTextNode(student.firstName)
    var lastNameTextNode = document.createTextNode(student.lastName)
    var dniTextNode = document.createTextNode(student.dni)
    var emailTextNode = document.createTextNode(student.email)

    var h4 = document.createElement('h4')
    var h5 = document.createElement('h5')
    var h6 = document.createElement('h6')
    var p = document.createElement('p')
    var li = document.createElement('li')

    h4.appendChild(firstNameTextNode)
    h5.appendChild(lastNameTextNode)
    h6.appendChild(dniTextNode)
    p.appendChild(emailTextNode)

    li.appendChild(h4)
    li.appendChild(h5)
    li.appendChild(h6)
    li.appendChild(p)

    li.className = 'list-group-item'
    li.id = student.id

    return li
  }

  return exposed
})()
