var tableManager = (function () {
  var exposed = {}

  exposed.clearTable = function () {
    $('#mainContainer').empty()
  }

  exposed.addPeople = function (people, add, language) {
    $('#mainContainer').fadeOut(200, function () {
      var header = createHeader(add)

      $('#mainContainer').append(header)

      var tableBody = $('#tableBody')

      if (Array.isArray(people) && tableBody) {
        for (var i = 0; i < people.length; i++) {
          var person = people[i]

          var personRow = createPersonRow(i + 1, person, add, language)

          tableBody.append(personRow)
        }
      }

      $('#sortByName').click(function (add) {
        var sortedPeople = people.sort(function (a, b) {
          var nameA = a.name.toUpperCase()
          var nameB = b.name.toUpperCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }

          return 0
        })
        exposed.addPeople(sortedPeople, add, language)
      })

      $('#mainContainer').fadeIn(function () {
        if (add) {
          $('.actionButton').click(function (event) {
            var id = event.target.id

            if (id) {
              if (!localstorageManager.searchPerson(id)) {
                for (var i = 0; i < people.length; i++) {
                  var person = people[i]
                  if (id === person.name) {
                    localstorageManager.savePersonLocal(person)
                    $(this).parent('tr').remove()
                  }
                }
              } else {
                alert('Ya existe ese personaje en la lista')
              }
            }
          })
        } else {
          $('.actionButton').click(function (event) {
            var id = event.target.id
            if (id) {
              localstorageManager.deletePersonLocal(id)
              $(this).parent('tr').remove()
            }
          })
        }
      })

      translate.translatePage(language)
    })
  }

  function createPersonRow (id, person, add, language) {
    if (person) {
      return (
        '<tr><th scope="row">' +
        id +
        '</th><td>' +
        person.name +
        '</td><td class="' +
        genderColor(person.gender) +
        '" translateId="' +
        person.gender +
        '"></td><td>' +
        person.height +
        ' cm</td><td>' +
        person.mass +
        ' kg</td><td translateId="' +
        person.eye_color +
        '"></td><td class="text-center actionButton" id="' +
        person.name +
        '"><i class="fa ' +
        (add ? 'fa-plus-square-o' : 'fa-trash-o') +
        '" aria-hidden="true" id="' +
        person.name +
        '"></i></td></tr>'
      )
    }
  }

  function createHeader (add) {
    return (
      '<table class="table table-striped table-dark"><thead><tr><th scope="col">#</th><th scope="col" class="sortButton" id="sortByName" translateId="firstName"></th><th scope="col" translateId="gender">Género</th><th scope="col" translateId="height"></th><th scope="col" translateId="weight"></th><th scope="col" translateId="eyeColor"></th><th scope="col" class="text-center" translateId="' +
      (add ? 'add' : 'delete') +
      '"></th></tr></thead><tbody id="tableBody"></tbody></table>'
    )
  }

  function genderColor (gender) {
    switch (gender) {
      case 'male':
        return 'text-primary'
        break
      case 'female':
        return 'rose'
        break
      default:
        return ''
        break
    }
  }

  return exposed
})()
