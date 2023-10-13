var studentsList = (function () {
  var exposed = {}

  exposed.init = function () {
    var mainList = $('#mainList')
    var studentsList = _getLocalStorageList()

    for (var i = 0; i < studentsList.length; i++) {
      var studentNode = _createStudentNode(studentsList[i])

      mainList.append(studentNode)

      const dni = studentsList[i].dni

      $('#' + dni).addClass('clickeable')

      $('#' + dni).click(function () {
        _deleteStudent(dni)
      })
    }
  }

  exposed.addStudent = function (firstName, lastName, dni, email) {
    var isValidDni = _validateDni(dni)

    var isValidEmail = _validateEmail(email)

    if (!firstName) {
      return 'Debe completar el nombre!'
    } else if (!lastName) {
      return 'Debe completar el apellido!'
    } else if (!isValidDni) {
      return 'Número de DNI invalido!'
    } else if (!isValidEmail) {
      return 'E-mail invalido!'
    } else if (_searchDni(dni) !== false) {
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

      var studentsList = _getLocalStorageList()

      studentsList.push(newStudent)

      _setLocalStorageList(studentsList)

      var studentNode = _createStudentNode(newStudent)

      var mainList = $('#mainList')

      mainList.append(studentNode)

      $('#' + dni).addClass('clickeable')

      $('#' + dni).click(function () {
        _deleteStudent(dni)
      })
    }
  }

  exposed.searchStudent = function (studentFirstName) {
    if (typeof studentFirstName === 'string') {
      var index = _searchFirstName(studentFirstName)

      var searchList = $('#searchList')

      searchList.empty()
      if (index !== false) {
        var studentsList = _getLocalStorageList()

        var studentNode = _createStudentNode(studentsList[index])

        searchList.append(studentNode)
      }
    }
  }

  function _searchFirstName (firstName) {
    var studentsList = _getLocalStorageList()

    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i]

      if (compareText.compareTextNoDiacritics(student.firstName, firstName)) {
        return i
      }
    }

    return false
  }

  function _searchDni (dni) {
    var studentsList = _getLocalStorageList()

    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i]
      if (student.dni === dni) {
        return i
      }
    }

    return false
  }

  function _createStudentNode (student) {
    var li =
      '<li id="' +
      student.dni +
      '" class="list-group-item"><h4>Nombre: ' +
      student.fullName +
      '</h4><h5>DNI: ' +
      student.dni +
      '</h5><h6>E-mail: ' +
      student.dni +
      '</h6></li>'

    return li
  }

  function _getLocalStorageList () {
    var studentsList = localStorage.getItem('studentsList')

    var parsedList = studentsList ? JSON.parse(studentsList) : []

    return parsedList
  }

  function _setLocalStorageList (studentsList) {
    var stringList = JSON.stringify(studentsList)

    localStorage.setItem('studentsList', stringList)
  }

  function _validateEmail (email) {
    if (typeof email === 'string') {
      var hasArroba = email.indexOf('@') !== -1
      var hasDot = email.indexOf('.') !== -1
      if (hasArroba && hasDot) {
        return true
      }
    }
    return false
  }

  function _validateDni (dni) {
    var dniParsed = parseInt(dni, 10)
    if (dniParsed && dniParsed > 0 && dniParsed < 99999999) {
      return true
    } else {
      return false
    }
  }

  function _deleteStudent (dni) {
    var index = _searchDni(dni)

    var studentsList = _getLocalStorageList()

    studentsList.splice(index, 1)

    _setLocalStorageList(studentsList)

    var studentNode = $('#' + dni)

    studentNode.remove()
  }

  return exposed
})()
