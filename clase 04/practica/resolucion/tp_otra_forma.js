/******** Trabajo Practico - Peliculas y actores************/

function Movie() {
  ;(this.id = Date.now()), (this.title = '')
  this.year = ''
  this.actor = []
  this.director = ''
}

Movie.prototype.getTitle = function() {
  return this.title
}
Movie.prototype.setTitle = function(title) {
  this.title = title
}

Movie.prototype.getYear = function() {
  return this.year
}
Movie.prototype.setYear = function(year) {
  this.year = year
}

Movie.prototype.getDirector = function() {
  return this.director
}
Movie.prototype.setDirector = function(director) {
  this.director = director
}

Movie.prototype.getActor = function(index) {
  return this.actor[index]
}
Movie.prototype.setActor = function(actor) {
  this.actor.push(actor)
}

Movie.prototype.showMovie = function() {
  alert(
    ' Pelicula: ' +
      this.title +
      '\n Estreno: ' +
      this.year +
      '\n Director: ' +
      this.director +
      '\n Actores: ' +
      this.getActor(0) +
      ', ' +
      this.getActor(1)
  )
}

function createMovie(listMovies) {
  for (var index = 0; index < 3; index++) {
    var movie = new Movie()

    movie.setTitle(prompt('Ingrese el titulo de la pelicula'))
    movie.setYear(prompt('Ingrese el año de la pelicula'))
    movie.setDirector(prompt('Ingrese el director de la pelicula'))
    movie.setActor(prompt('Ingrese el primer actor de la pelicula'))
    movie.setActor(prompt('Ingrese el segundo actor de la pelicula'))

    listMovies.push(movie)
  }
}

function showAll(listMovies) {
  for (var index = 0; index < listMovies.length; index++) {
    var movie = listMovies[index]
    movie.showMovie()
  }
}

var listMovies = []
createMovie(listMovies)
showAll(listMovies)
