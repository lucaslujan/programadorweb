console.log('Clase 16')

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

// var callback = function (error, response) {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     resultTotal = resultTotal.concat(response.results)
//     if (response.next) {
//       ajaxCall(response.next, callback)
//     } else {
//       console.log('Resultado de listado')
//       var resultTotalOrdered = orderByName(resultTotal)
//       showName(resultTotalOrdered)
//       console.log('----------Fin listado---------')
//     }
//   }
// }

// function showName (results) {
//   for (var i = 0; i < results.length; i++) {
//     var item = results[i]
//     console.log(item.name)
//   }
// }

// function orderByName (items) {
//   return items.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1
//     }
//     if (a.name < b.name) {
//       return -1
//     }
//     return 0
//   })
// }

// ajaxCall('https://swapi.co/api/species', callback)

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

// var callback = function (error, response) {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     var gender = genderMultiTranslate(response.gender, 'en')
//     console.log(gender)
//   }
// }

// var translates = [
//   {
//     key: 'male',
//     pt: 'Homem',
//     es: 'Hombre',
//     en: 'Male'
//   }
// ]

// function genderMultiTranslate (gender, lang) {
//   for (var i = 0; i < translates.length; i++) {
//     if (translates[i].key === gender) {
//       var translate = translates[i]
//       return translate[lang]
//     }
//   }
// }

// function genderTranslate (gender) {
//   switch (gender) {
//     case 'male':
//       return 'Hombre'
//       break
//     case 'female':
//       return 'Mujer'
//       break
//     case 'unknown':
//       return 'Desconocido'
//       break
//     default:
//       return 'Desconocido'
//       break
//   }
// }

// ajaxCall('https://swapi.co/api/people/1', callback)

// $('.deleteButton').click(function (event) {
//   console.log('Click')
//   var tr = $(this).parent('tr')
//   tr.fadeOut(300, function () {
//     tr.remove()
//   })
// })

// Traducciones pro

var translates = [
  {
    key: 'firstName',
    pt: 'Primero nombreciño',
    es: 'Primer nombre',
    en: 'First name'
  },
  {
    key: 'lastName',
    pt: 'Ultimo nombreciño',
    es: 'Apellido',
    en: 'Last name'
  }
]

function genderMultiTranslate (key, lang) {
  for (var i = 0; i < translates.length; i++) {
    if (translates[i].key === key) {
      var translate = translates[i]
      return translate[lang]
    }
  }
}

$('#select').change(function (event) {
  var value = event.target.value
  var firstNameTranslated = genderMultiTranslate('firstName', value)
  var lastNameTranslated = genderMultiTranslate('lastName', value)
  $('.inputField').empty()
  $('#firstName').append(firstNameTranslated)
  $('#lastName').append(lastNameTranslated)
})
