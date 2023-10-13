// Declaración del objeto película

function Movie(title, year, director) {
  this.id = Date.now()
  this.title = title
  this.year = year
  this.director = director
  this.actors = []
}

// Setters y Getters

Movie.prototype.setTitle = function(title) {
  this.title = title
}

Movie.prototype.setYear = function(year) {
  this.year = year
}

Movie.prototype.setDirector = function(director) {
  this.director = director
}

Movie.prototype.setActor = function(actor) {
  this.actors.push(actor)
}

Movie.prototype.getTitle = function(title) {
  return this.title
}

Movie.prototype.getYear = function(year) {
  return this.year
}

Movie.prototype.getDirector = function(director) {
  return this.director
}

Movie.prototype.getActors = function(actor) {
  return this.actors
}

// Uso del objeto película

var movies = []

askMovieData()

askMovieData()

askMovieData()

console.log('Mi array de películas es ->', movies)

// Función para pedir datos de una película

function askMovieData() {
  var title = prompt('Ingrese el nombre de una película')
  var year = prompt('Ingrese el año de ' + title)
  var director = prompt('Ingrese el director de ' + title)
  var actor1 = prompt('Ingrese un actor de ' + title)
  var actor2 = prompt('Ingrese otro actor de ' + title)
  var movie = new Movie(title, year, director)
  movie.setActor(actor1)
  movie.setActor(actor2)
  movies.push(movie)
}
