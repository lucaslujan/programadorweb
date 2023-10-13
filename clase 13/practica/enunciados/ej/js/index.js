console.log('Clase 13')

// $(document).ready(function () {
//   $('#addEmailButton').click(function () {
//     var value = $('#email').val()
//     var errorMessage = ''
//     $('#errorTitle').empty()
//     if (!value) {
//       errorMessage = 'Campo vacio'
//     } else if (value.indexOf('@') === -1) {
//       errorMessage = 'No tiene arroba'
//     } else if (value.indexOf('.') === -1) {
//       errorMessage = 'No tiene punto'
//     }
//     if (errorMessage) {
//       console.log('Hay error', errorMessage)
//       $('#errorDialog').fadeIn(1000)
//       $('#errorTitle').append(errorMessage)
//       $('#okErrorButton').click(function () {
//         $('#errorDialog').fadeOut(1000)
//       })
//     }
//   })
// })

$(document).ready(function () {
  var index = 1

  var total = 3

  $(document).keydown(function (event) {
    var keyDown = event.which
    console.log(index)
    switch (keyDown) {
      case 37:
        if (index > 1) {
          $('.imageFrame').fadeOut(1000, function () {
            $('#photo' + index).fadeIn(1000)
          })
          index--
          console.log('Izquierda')
        }

        break
      case 39:
        if (index < total) {
          $('.imageFrame').fadeOut(1000, function () {
            $('#photo' + index).fadeIn(1000)
          })
          index++
          console.log('Derecha')
        }

        break
      default:
        break
    }
  })
})
