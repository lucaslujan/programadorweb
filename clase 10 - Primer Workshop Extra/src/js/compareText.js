var compareText = (function () {
  var exposed = {}

  exposed.compareTextNoDiacritics = function (text1, text2) {
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

  return exposed
})()
