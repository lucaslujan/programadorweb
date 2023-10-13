askMovieData()

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
