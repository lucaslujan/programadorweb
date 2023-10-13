console.log('Clase 13')

var index = 1

$(document).keydown(function (event) {
  switch (event.which) {
    case 37:
      showIndex()
      resIndex()
      break

    case 39: // right
      showIndex()
      addIndex()
      break

    default:
      return // exit this handler for other keys
  }
  event.preventDefault() // prevent the default action (scroll / move caret)
})

function showIndex () {
  $('.imageFrame').fadeOut(500, function () {
    $('#photo' + index).fadeIn(500)
  })
}

function addIndex () {
  if (index < 3) {
    index++
  }
}

function resIndex () {
  if (index > 1) {
    index--
  }
}
