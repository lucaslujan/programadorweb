var ajax = (function () {
  var exposed = {}

  exposed.getPeople = function (url, cbk) {
    $.ajax({
      url: url,
      method: 'GET'
    })
      .done(function (response) {
        cbk(null, response)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  exposed.searchPerson = function (value, cbk) {
    $.ajax({
      url: 'https://swapi.co/api/people/?search=' + value,
      method: 'GET'
    })
      .done(function (response) {
        cbk(null, response)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  return exposed
})()
