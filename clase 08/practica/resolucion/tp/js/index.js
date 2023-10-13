// askMovieData()

// askMovieData()

// askMovieData()

function askMovieData () {
  var title = prompt('Ingrese el nombre de una película')
  var year = prompt('Ingrese el año de ' + title)
  var director = prompt('Ingrese el director de ' + title)
  var actor1 = prompt('Ingrese un actor de ' + title)
  var actor2 = prompt('Ingrese otro actor de ' + title)
  moduleIMDB.addMovie(title, year, director, [ actor1, actor2 ])
}

var addButton = document.getElementById('addButton')

addButton.onclick = function () {
  var title = document.getElementById('title').value
  var year = document.getElementById('year').value
  var director = document.getElementById('director').value
  var actor1 = document.getElementById('actor1').value
  var actor2 = document.getElementById('actor2').value
  moduleIMDB.addMovie(title, year, director, [ actor1, actor2 ])
}
