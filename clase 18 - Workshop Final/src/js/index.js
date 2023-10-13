console.log('Workshop final')

var defaultLanguage = 'es'

$(document).ready(function () {
  translate.translatePage(defaultLanguage)

  $('#navbarSavedPeopleButton').click(function () {
    tableManager.clearTable()
    var savedList = localstorageManager.getSavedList()
    tableManager.addPeople(savedList, false, defaultLanguage)
  })

  $('#navbarAllPeopleButton').click(function () {
    var morePages = true
    var totalResults = []
    var url = 'https://swapi.co/api/people'

    tableManager.clearTable()

    var cbk = function (error, response) {
      if (error) {
        morePages = false
      } else {
        totalResults = totalResults.concat(response.results)
        if (response.next) {
          url = response.next
          ajax.getPeople(url, cbk)
        } else {
          tableManager.addPeople(totalResults, true, defaultLanguage)
          morePages = false
        }
      }
    }

    ajax.getPeople(url, cbk)
  })

  $('#searchPerson').click(function () {
    var value = $('#inputSearch').val()

    tableManager.clearTable()

    ajax.searchPerson(value, function (error, response) {
      if (error) {
        console.log('Error', error)
      } else {
        tableManager.addPeople(response.results, true, defaultLanguage)
      }
    })
  })

  $('#selectLanguage').change(function (event) {
    var language = event.target.value
    defaultLanguage = language
    translate.translatePage(defaultLanguage)
  })
})
