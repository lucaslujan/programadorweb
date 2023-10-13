console.log('Workshop - Listado de restaurantes - Init')

var addRestaurantButton = document.getElementById('addRestaurantButton')

var searchResturantButton = document.getElementById('searchResturantButton')

addRestaurantButton.onclick = function () {
  var name = document.getElementById('name').value
  var address = document.getElementById('address').value
  var telephone = document.getElementById('telephone').value

  var error = restaurantsList.addRestaurant(name, address, telephone)

  if (error) {
    alert(error)
  }
}

searchResturantButton.onclick = function () {
  var searchResturant = document.getElementById('searchResturant').value

  var error = restaurantsList.searchRestaurant(searchResturant)

  if (error) {
    alert(error)
  }
}
