var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

function removeDiacritics(studentName) {
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

function searchStudent(studentName, studentsList) {
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

function searchStudentPro(studentName, studentsList) {
  var studentNameConverted = removeDiacritics(studentName)

  var searchResult = searchStudent(studentNameConverted, studentsList)

  return searchResult
}

var userName = prompt('Ingresá tu nombre')

var searchResult = searchStudentPro(userName, studentsList)

if (searchResult !== false) {
  alert('El nombre ' + userName + ' esta en la lista en la posición ' + (searchResult + 1))
} else {
  alert('El nombre ' + userName + 'NO esta en la lista')
}
