console.log('Clase 14')

$(document).ready(function () {
  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop()
    $('#background1').css('top', -(scrollTop * 0.25) + 'px')
    $('#background2').css('top', -(scrollTop * 0.75) + 'px')
    $('#background3').css('top', -(scrollTop * 2) + 'px')
  })
})

// $(document).ready(function () {
//   $('#date').blur(function () {
//     var date = $('#date').val()
//     var today = moment()
//     var actualMonth = today.month()
//     var actualDay = today.date()

//     var formatedDate = moment(date)
//     var formatedMonth = formatedDate.month()
//     var formatedDay = formatedDate.date()

//     // var diff = moment(today).diff(formatedDate)
//     if (actualDay === formatedDay && actualMonth === formatedMonth) {
//       console.log('Es tu cumpleaños')
//     } else {
//       console.log('Día cualquiera')
//     }
//   })
// })

var today = moment()

var christmas = moment('20171225')

var diff = christmas.diff(today, 'days')

console.log(diff)
