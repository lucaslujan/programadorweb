var objectList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
]

var userName = prompt('Ingrese un nombre', 'Ej: Juan')

searchObjectList(userName, objectList)

function searchObjectList (studentName, objectList) {
  var result = false

  for (var i = 0; i < objectList.length; i++) {
    var studentObject = objectList[i]

    var isEqual = compareTextNoDiacritics(studentName, studentObject.firstName)

    if (isEqual) {
      result = true
      break
    }
  }

  return result
}

function compareTextNoDiacritics (text1, text2) {
  var text1Converted = removeDiacritics(text1)
  var text2Converted = removeDiacritics(text2)
  var result = text1Converted === text2Converted
  return result
}

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
