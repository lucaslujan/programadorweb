console.log('Clase 15')
// function ajaxCall (url, cbk) {
//   $.ajax({
//     url: url,
//     method: 'GET'
//   })
//     .done(function (response) {
//       cbk(null, response)
//     })
//     .fail(function (error) {
//       cbk(error)
//     })
// }

// var resultTotal = []
// var counter = 0

// var callback = function (error, response) {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     counter = counter + response.results.length
//     console.log('Encontrado ' + counter + ' de ' + response.count)
//     resultTotal = resultTotal.concat(response.results)
//     if (response.next) {
//       callUrl = response.next
//       ajaxCall(callUrl, callback)
//     } else {
//       console.log('Termino de buscar')
//       console.log(resultTotal)
//     }
//   }
// }

// var callUrl = 'https://swapi.co/api/starships'
// console.log('Empiezo a buscar')
// ajaxCall(callUrl, callback)

// var text = prompt('Ingrese un texto')

// ajaxCall('https://swapi.co/api/starships/?search=' + text, function (error, result) {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     console.log(result)
//   }
// })

// Solución ejercicio

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

var resultTotal = []

var callback = function (error, response) {
  if (error) {
    console.log('Error', error)
  } else {
    resultTotal = resultTotal.concat(response.results)
    if (response.next) {
      ajaxCall(response.next, callback)
    } else {
      console.log('Resultado de listado')
      showName(resultTotal)
      console.log('----------Fin listado---------')
    }
  }
}

function showName (results) {
  for (var i = 0; i < results.length; i++) {
    var item = results[i]
    console.log(item.name)
  }
}

ajaxCall('https://swapi.co/api/planets', callback)

var text = prompt('Ingrese un texto')

var resultTotal2 = []

var callback2 = function (error, response) {
  if (error) {
    console.log('Error', error)
  } else {
    resultTotal2 = resultTotal2.concat(response.results)
    if (response.next) {
      ajaxCall(response.next, callback2)
    } else {
      console.log('Resultado de búsqueda')
      showName(resultTotal2)
      console.log('----------Fin búsqueda---------')
    }
  }
}

ajaxCall('https://swapi.co/api/planets/?search=' + text, callback2)
