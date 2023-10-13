var list = (function () {
  var exposed = {}

  exposed.addFirstName = function (firstName) {
    if (firstName) {
      $('#mainList')
        .append('<li class="list-group-item" id="' + firstName + '">' + firstName + '</li>')
        .click(function (event) {
          deleteFirstName(event.target.id)
        })

      var temporalList = localStorage.getItem('savedList')

      temporalList = temporalList ? JSON.parse(temporalList) : []

      temporalList.push(firstName)

      var parsedList = JSON.stringify(temporalList)

      localStorage.setItem('savedList', parsedList)
    }
  }

  function deleteFirstName (firstName) {
    if (firstName) {
      $('#' + firstName + '').remove()
      var temporalList = localStorage.getItem('savedList')

      temporalList = temporalList ? JSON.parse(temporalList) : []

      var index = temporalList.indexOf(firstName)

      if (index !== -1) {
        temporalList.splice(index, 1)
        var parsedList = JSON.stringify(temporalList)

        localStorage.setItem('savedList', parsedList)
      }
    }
  }

  exposed.init = function () {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    for (var i = 0; i < temporalList.length; i++) {
      var firstName = temporalList[i]

      $('#mainList')
        .append('<li class="list-group-item" id="' + firstName + '">' + firstName + '</li>')
        .click(function (event) {
          deleteFirstName(event.target.id)
        })
    }
  }

  return exposed
})()
