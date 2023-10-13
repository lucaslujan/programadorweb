var studentsListApp = (function () {
  var exposed = {}

  // Creo una funcion que recorrar un array y lo agregue a mi lista principal
  exposed.showList = function (lista) {
    // Busco mi lista principal en el DOM por id
    var mainList = document.getElementById('mainList')

    // Verifico que sea un array, sino no hago nada
    if (Array.isArray(lista)) {
      // Recorro el array que me dan como parámetro
      for (var i = 0; i < lista.length; i++) {
        var student = lista[i]

        // Por cada elemento del array creo un elemento HTML con los datos del alumno
        var li = createStudentLi(student.firstName, student.lastName, student.dni)

        // Agrego cada elemento HTML en mi lista general que busque por id antes
        mainList.appendChild(li)
      }
    }
  }

  exposed.deleteStudent = function (id) {
    if (typeof id === 'string') {
      // Primero consigo la lista padre
      var mainList = document.getElementById('mainList')
      // Luego consigo el hijo a borrar
      var student = document.getElementById(id)
      // Borro de la lista padre el hijo
      mainList.removeChild(student)
    }
  }

  // Creo una función que me devuelva solo un alumno
  function createStudentLi (firstName, lastName, dni) {
    // Creo mis tags HTML
    var li = document.createElement('li')
    var h1 = document.createElement('h1')
    var p = document.createElement('p')

    // Creo los textos para poner adentro de mis tags HTML
    var fullNameTextNode = document.createTextNode(firstName + ' ' + lastName)
    var dniTextNode = document.createTextNode('DNI: ' + dni)

    // Agrego primero los textos en mis tags HTML
    h1.appendChild(fullNameTextNode)
    p.appendChild(dniTextNode)

    // Por último agrego el h1 y el p en el tag li
    li.appendChild(h1)
    li.appendChild(p)
    li.id = dni

    // li.className = 'list-group-item'

    // Devulelvo el tag li
    return li
  }

  return exposed
})()
