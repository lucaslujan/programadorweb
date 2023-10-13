var studentsList = (function () {
  var exposed = {}

  exposed.init = function () {
    var mainList = document.getElementById('mainList')
    var studentsList = getLocalStorageList()

    for (var i = 0; i < studentsList.length; i++) {
      var studentNode = createStudentNode(studentsList[i])
      mainList.appendChild(studentNode)
    }
  }

  exposed.addStudent = function (firstName, lastName, dni, email) {
    var isValidDni = validateDni(dni)

    var isValidEmail = validateEmail(email)

    if (!firstName) {
      return 'Debe completar el nombre!'
    } else if (!lastName) {
      return 'Debe completar el apellido!'
    } else if (!isValidDni) {
      return 'Número de DNI invalido!'
    } else if (!isValidEmail) {
      return 'E-mail invalido!'
    } else if (searchDni(dni) !== false) {
      return 'Ya existe un alumno con ese DNI'
    } else {
      var newStudent = {
        id: dni,
        fullName: firstName + ' ' + lastName,
        firstName: firstName,
        lastName: lastName,
        dni: dni,
        email: email
      }

      var studentsList = getLocalStorageList()

      studentsList.push(newStudent)

      setLocalStorageList(studentsList)

      var studentNode = createStudentNode(newStudent)

      var mainList = document.getElementById('mainList')

      mainList.appendChild(studentNode)
    }
  }

  exposed.deleteStudent = function (dni) {
    if (typeof dni === 'string') {
      var index = searchDni(dni)
      if (index === false) {
        return 'El DNI no existe'
      } else {
        var studentsList = getLocalStorageList()

        studentsList.splice(index, 1)

        setLocalStorageList(studentsList)

        var mainList = document.getElementById('mainList')
        var studentNode = document.getElementById(dni)

        mainList.removeChild(studentNode)
      }
    }
  }

  exposed.searchStudent = function (studentFirstName) {
    if (typeof studentFirstName === 'string') {
      var index = searchFirstName(studentFirstName)
      console.log(index)
      if (index === false) {
        var searchList = document.getElementById('searchList')

        searchList.innerHTML = ''
      } else {
        var studentsList = getLocalStorageList()

        var studentNode = createStudentNode(studentsList[index])

        var searchList = document.getElementById('searchList')

        searchList.innerHTML = ''

        searchList.appendChild(studentNode)
      }
    }
  }

  function searchFirstName (firstName) {
    var studentsList = getLocalStorageList()

    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i]

      if (compareText.compareTextNoDiacritics(student.firstName, firstName)) {
        return i
      }
    }

    return false
  }

  function searchDni (dni) {
    var studentsList = getLocalStorageList()

    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i]
      if (student.dni === dni) {
        return i
      }
    }

    return false
  }

  function createStudentNode (student) {
    var fullNameTextNode = document.createTextNode('Nombre: ' + student.fullName)
    var dniTextNode = document.createTextNode('DNI: ' + student.dni)
    var emailTextNode = document.createTextNode('E-mail: ' + student.email)

    var h4 = document.createElement('h4')
    var h5 = document.createElement('h5')
    var h6 = document.createElement('h6')

    h4.appendChild(fullNameTextNode)
    h5.appendChild(dniTextNode)
    h6.appendChild(emailTextNode)

    var li = document.createElement('li')

    li.id = student.id
    li.className = 'list-group-item'

    li.appendChild(h4)
    li.appendChild(h5)
    li.appendChild(h6)

    return li
  }

  function getLocalStorageList () {
    var studentsList = localStorage.getItem('studentsList')

    var parsedList = studentsList ? JSON.parse(studentsList) : []

    return parsedList
  }

  function setLocalStorageList (studentsList) {
    var stringList = JSON.stringify(studentsList)

    localStorage.setItem('studentsList', stringList)
  }

  function validateEmail (email) {
    if (typeof email === 'string') {
      var hasArroba = email.indexOf('@') !== -1
      var hasDot = email.indexOf('.') !== -1
      if (hasArroba && hasDot) {
        return true
      }
    }
    return false
  }

  function validateDni (dni) {
    var dniParsed = parseInt(dni, 10)
    if (dniParsed && dniParsed > 0 && dniParsed < 99999999) {
      return true
    } else {
      return false
    }
  }

  return exposed
})()
