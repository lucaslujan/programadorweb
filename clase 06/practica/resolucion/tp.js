var studentsList = [
  'CARLOS',
  'GERONIMO'
  // 'NICOLAS',
  // 'LUCAS',
  // 'MARIA',
  // 'FEDERICO',
  // 'ANTONIO',
  // 'LORNA',
  // 'JULIAN',
  // 'DIEGO',
  // 'DANIELA',
  // 'JUAN',
  // 'MATEO',
  // 'BARBARA',
  // 'AGUSTIN',
  // 'MARIO',
  // 'MARIEL',
  // 'ANA',
  // 'FLORENCIA'
]

// if (temporalList) {
//   temporalList = JSON.parse(temporalList)
// } else {
//   temporalList = []
// }

// Carga inicial

var parsedList = JSON.stringify(studentsList)

localStorage.setItem('savedList', parsedList)

// Función

function removeNameLocalStorage (studentName) {
  var temporalList = localStorage.getItem('savedList')

  temporalList = temporalList ? JSON.parse(temporalList) : []

  var search = searchStudentPro(studentName, temporalList)

  if (search !== false) {
    temporalList.splice(search, 1)
  }

  var parsedList = JSON.stringify(temporalList)

  localStorage.setItem('savedList', parsedList)
}

var userName = prompt('Ingrese su nombre')

saveNameLocalStorage(userName)

// Función clase 05

function removeDiacritics (studentName) {
  if (typeof studentName !== 'string') {
    return false
  }

  var studentNameUpperCase = studentName.toUpperCase()

  var studentNameUpperCaseNoDiacritics = studentNameUpperCase.replace('Á', 'A')
  studentNameUpperCaseNoDiacritics = studentNameUpperCaseNoDiacritics.replace('É', 'E')
  studentNameUpperCaseNoDiacritics = studentNameUpperCaseNoDiacritics.replace('Í', 'I')
  studentNameUpperCaseNoDiacritics = studentNameUpperCaseNoDiacritics.replace('Ó', 'O')
  studentNameUpperCaseNoDiacritics = studentNameUpperCaseNoDiacritics.replace('Ú', 'U')

  return studentNameUpperCaseNoDiacritics
}

function searchStudent (studentName, studentsList) {
  if (typeof studentName !== 'string') {
    return false
  }

  if (!Array.isArray(studentsList)) {
    return false
  }
  var index = studentsList.indexOf(studentName)

  if (index !== -1) {
    return index
  } else {
    return false
  }
}

function searchStudentPro (studentName, studentsList) {
  var studentNameConverted = removeDiacritics(studentName)

  var searchResult = searchStudent(studentNameConverted, studentsList)

  return searchResult
}
