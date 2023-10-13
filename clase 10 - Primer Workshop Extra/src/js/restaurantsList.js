var restaurantsList = (function () {
  var exposed = {}

  exposed.addRestaurant = function (name, address, tel) {
    if (!name) {
      return 'Debe completar el nombre!'
    } else if (searchByName(name) !== false) {
      return 'Ya existe un restaurante con ese nombre!'
    } else if (!address) {
      return 'Debe completar una dirección!'
    } else if (!tel) {
      return 'Debe completar un telefono!'
    } else if (!isValidTelephone(tel)) {
      return 'Debe completar con un telefono valido!'
    } else {
      var newRestaurant = {
        id: name,
        name: name,
        address: address,
        tel: tel
      }

      var restaurantsList = getLocalStorageList()

      restaurantsList.push(newRestaurant)

      setLocalStorageList(restaurantsList)
    }
  }

  exposed.searchRestaurant = function (name) {
    if (typeof name === 'string') {
      var index = searchByName(name)

      if (index === false) {
        var searchList = document.getElementById('searchList')

        searchList.innerHTML = ''
      } else {
        var restaurantsList = getLocalStorageList()

        var restaurantNode = createRestaurantNode(restaurantsList[index])

        var searchList = document.getElementById('searchList')

        searchList.innerHTML = ''

        searchList.appendChild(restaurantNode)
      }
    }
  }

  function searchByName (name) {
    var restaurantsList = getLocalStorageList()

    for (var i = 0; i < restaurantsList.length; i++) {
      var restaurant = restaurantsList[i]

      if (compareText.compareTextNoDiacritics(restaurant.name, name)) {
        return i
      }
    }

    return false
  }

  function isValidTelephone (tel) {
    var parsedTel = parseInt(tel, 10)
    if (!isNaN(parsedTel) && typeof parsedTel === 'number') {
      return true
    } else {
      return false
    }
  }

  function createRestaurantNode (restaurant) {
    var nameTextNode = document.createTextNode('Nombre: ' + restaurant.name)
    var telTextNode = document.createTextNode('Teléfono: ' + restaurant.tel)
    var addressTextNode = document.createTextNode('Dirección: ' + restaurant.address)

    var h4 = document.createElement('h4')
    var h5 = document.createElement('h5')
    var h6 = document.createElement('h6')

    h4.appendChild(nameTextNode)
    h5.appendChild(telTextNode)
    h6.appendChild(addressTextNode)

    var li = document.createElement('li')

    li.id = restaurant.id
    li.className = 'list-group-item'

    li.appendChild(h4)
    li.appendChild(h5)
    li.appendChild(h6)

    return li
  }

  function getLocalStorageList () {
    var restaurantsList = localStorage.getItem('restaurantsList')

    var parsedList = restaurantsList ? JSON.parse(restaurantsList) : []

    return parsedList
  }

  function setLocalStorageList (restaurantsList) {
    var stringList = JSON.stringify(restaurantsList)

    localStorage.setItem('restaurantsList', stringList)
  }

  return exposed
})()
