var localstorageManager = (function () {
  var exposed = {}

  exposed.getSavedList = function () {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    return temporalList
  }

  exposed.searchPerson = function (id) {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    for (var i = 0; i < temporalList.length; i++) {
      var person = temporalList[i]

      if (id === person.name) {
        return true
      }
    }
    return false
  }

  exposed.savePersonLocal = function (person) {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    temporalList.push(person)

    var parsedList = JSON.stringify(temporalList)

    localStorage.setItem('savedList', parsedList)
  }

  exposed.deletePersonLocal = function (id) {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    for (var i = 0; i < temporalList.length; i++) {
      var person = temporalList[i]

      if (id === person.name) {
        temporalList.splice(i, 1)

        var parsedList = JSON.stringify(temporalList)

        localStorage.setItem('savedList', parsedList)
      }
    }
  }

  return exposed
})()
