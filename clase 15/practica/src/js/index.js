console.log('Clase 15')

// Todos los planetas

function ajaxCall (url, cbk) {
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

var nextUrl = 'https://swapi.co/api/planets'
var totalResponse = []

var cbk = function (error, response) {
  if (error) {
    console.log('Hubo un error status ' + error.status, error.responseText)
  } else {
    totalResponse = totalResponse.concat(response.results)
    if (response.next) {
      nextUrl = response.next
      ajaxCall(nextUrl, cbk)
    } else {
      showOnConsole(totalResponse)
    }
  }
}

function showOnConsole (totalResponse) {
  for (var i = 0; i < totalResponse.length; i++) {
    console.log(totalResponse[i].name)
  }
}

ajaxCall(nextUrl, cbk)

// Un planeta en particular

var value = prompt('Ingrese un nombre')

function ajaxCall (value, cbk) {
  $.ajax({
    url: 'https://swapi.co/api/planets/?search=' + value,
    method: 'GET'
  })
    .done(function (response) {
      cbk(null, response)
    })
    .fail(function (error) {
      cbk(error)
    })
}

ajaxCall(value, function (error, response) {
  if (error) {
    console.log('Hubo un error status ' + error.status, error.responseText)
  } else {
    console.log(response)
  }
})
