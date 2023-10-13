console.log('Clase 13')

// $('#name').keydown(function (event) {
//   if (event.which == 13) {
//     event.preventDefault()
//   }
//   console.log('Adentro del input', event.which)
// })

// $(document).keydown(function (event) {
//   event.preventDefault()
//   var keyDown = event.which

//   switch (keyDown) {
//     case 37:
//       console.log('Flecha izq')
//       break
//     case 38:
//       console.log('Flecha arriba')
//       break
//     case 39:
//       console.log('Flecha der')
//       break
//     case 40:
//       console.log('Flecha abajo')
//       break
//     default:
//       console.log('Otra tecla')
//       break
//   }
// })

// $('#name').keydown(function (event) {
//   event.preventDefault()
//   if (event.which === 75) {
//     console.log('Empezo a apretar')
//   }
// })

// $('#name').keyup(function (event) {
//   event.preventDefault()
//   if (event.which === 75) {
//     console.log('Termino de apretar')
//   }
// })

// $('#name').keypress(function () {
//   console.log('Apreto tecla')
// })

// $('#square1').hide(3000, function () {
//   $('#square2').hide(3000, function () {
//     console.log('Se termino de ocultar')
//   })
// })

// $('#square1').show(3000, function () {
//   $('#square2').show(3000, function () {
//     console.log('Se termino de ocultar')
//   })
// })

// $('#square1').toggle(3000, function () {
//   $('#square2').toggle(3000, function () {
//     console.log('Se termino de ocultar')
//   })
// })

// $(document).click(function () {
//   $('#square1').toggle(3000, function () {
//     $('#square2').toggle(3000, function () {
//       console.log('Se termino de ocultar')
//     })
//   })
// })

// var showMessageTotal = function () {
//   showMessage1()
//   showMessage2()
// }

// function showMessage1 () {
//   console.log('Mensaje 1')
// }

// function showMessage2 () {
//   console.log('Mensaje 2')
// }

// $('#square2').toggle(3000, showMessageTotal)

// $('#square1').fadeIn(4000, function () {
//   console.log('Termino')
// })

// $(document).scroll(function () {
//   var scrollTop = $(window).scrollTop()
//   if (scrollTop > 100) {
//     $('#square1').fadeIn(1000, function () {
//       console.log('Termino')
//     })
//   }
// })

// $(document).scroll(function () {
//   var square1Top = $('#square1').position().top
//   var scrollTop = $(window).scrollTop()
//   if (scrollTop > square1Top) {
//     $('#square2').fadeIn(1000, function () {
//       console.log('Termino')
//     })
//   }
// })

// $('#square2').slideToggle(1000, function () {
//   console.log('Termino')
// })

// $('#square1').click(function () {
//   $('#list').slideToggle(1000)
// })

$('.classTitle').empty()

$('.classTitle').append('Pato')
