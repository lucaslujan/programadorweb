var list = (function () {
  var exposed = {}

  exposed.addName = function (name) {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    var index = temporalList.indexOf(name)

    if (index === -1) {
      /* Función que agrega al DOM */
      var mainList = $('#mainList')
      mainList.append('<li class="list-group-item" id="' + name + '">' + name + '</li>')

      /* Función que agrega al localStorage */
      temporalList.push(name)

      var parsedList = JSON.stringify(temporalList)

      localStorage.setItem('savedList', parsedList)

      /* Función que elimina */

      $('#' + name).click(function (event) {
        var id = event.target.id
        var element = $('#' + name)
        if (element) {
          element.remove()
        }
        var temporalList = localStorage.getItem('savedList')

        temporalList = temporalList ? JSON.parse(temporalList) : []

        var index = temporalList.indexOf(name)

        if (index !== -1) {
          temporalList.splice(index, 1)

          var parsedList = JSON.stringify(temporalList)

          localStorage.setItem('savedList', parsedList)
        }
      })
    }
  }

  exposed.init = function () {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    for (var i = 0; i < temporalList.length; i++) {
      const name = temporalList[i]
      /* Función que agrega al DOM */
      var mainList = $('#mainList')
      mainList.append('<li class="list-group-item" id="' + name + '">' + name + '</li>')

      /* Función que elimina */

      $('#' + name).click(function (event) {
        var id = event.target.id
        var element = $('#' + name)
        if (element) {
          element.remove()
        }
        var temporalList = localStorage.getItem('savedList')

        temporalList = temporalList ? JSON.parse(temporalList) : []

        var index = temporalList.indexOf(name)

        if (index !== -1) {
          temporalList.splice(index, 1)

          var parsedList = JSON.stringify(temporalList)

          localStorage.setItem('savedList', parsedList)
        }
      })
    }
  }

  return exposed
})()
