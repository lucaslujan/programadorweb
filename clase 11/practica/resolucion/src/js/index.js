console.log('Clase 11')

var counter = 1

$(document).ready(function () {
  $('.square').click(function (event) {
    var id = event.target.id
    if (counter % 2) {
      $('#' + id + '').addClass('cross')
    } else {
      $('#' + id + '').addClass('circle')
    }
    counter++
  })
})
