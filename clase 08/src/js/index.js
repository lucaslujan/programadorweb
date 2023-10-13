console.log('Clase 08')

var list = []

// var addNameButton = document.getElementById('addNameButton')

// addNameButton.onclick = function () {
//   var inputValue = document.getElementById('firstNameInput').value
//   if (inputValue.length < 6) {
//     console.log('Contraseña muy corta')
//   } else {
//     console.log('Contraseña ok')
//   }
// }

// var input = document.getElementById('firstNameInput')

// input.onchange = function (event) {
//   var value = event.target.value

//   var index = value.indexOf('@')

//   if (index !== -1) {
//     console.log('Tiene arroba')
//   } else {
//     console.log('No tiene arroba')
//   }
// }

var addNameButton = document.getElementById('addNameButton')

addNameButton.onclick = function () {
  var inputValue = document.getElementById('firstNameInput').value
  list.push(inputValue)

  var inputTextNode = document.createTextNode(inputValue)

  var p = document.createElement('p')

  p.appendChild(inputTextNode)

  var container = document.getElementById('container')

  container.appendChild(p)
}
