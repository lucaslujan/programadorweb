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

var parsedList = JSON.stringify(studentsList)

localStorage.setItem('savedList', parsedList)

function saveNameLocalStorage(studentName) {
  var temporalList = localStorage.getItem('savedList') || '[]'

  temporalList = JSON.parse(temporalList)

  temporalList.push(studentName)

  var parsedList = JSON.stringify(temporalList)

  localStorage.setItem('savedList', parsedList)
}

var userName = prompt('Ingrese su nombre')

saveNameLocalStorage(userName)
