var moduleIMDB = (function () {
  var exposed = {}

  // Array donde voy a guardar las películas

  var movies = []

  // Declaración del objeto película

  function Movie (title, year, director) {
    this.id = Date.now()
    this.title = title
    this.year = year
    this.director = director
    this.actors = []
  }

  // Setters y Getters

  Movie.prototype.setTitle = function (title) {
    this.title = title
  }

  Movie.prototype.setYear = function (year) {
    this.year = year
  }

  Movie.prototype.setDirector = function (director) {
    this.director = director
  }

  Movie.prototype.setActor = function (actor) {
    this.actors.push(actor)
  }

  Movie.prototype.getTitle = function () {
    return this.title
  }

  Movie.prototype.getYear = function () {
    return this.year
  }

  Movie.prototype.getDirector = function () {
    return this.director
  }

  Movie.prototype.getActors = function () {
    return this.actors
  }

  Movie.prototype.getId = function () {
    return this.id
  }

  // Voy a crear un nodo de HTML li
  function _createMovieNode (movie) {
    // Creo los nodos de texto usando los métodos Getters de Movie
    var titleTextNode = document.createTextNode(movie.getTitle())
    var yearTextNode = document.createTextNode(movie.getYear())
    var directorTextNode = document.createTextNode(movie.getDirector())

    // Actores es un array así que tengo que construir un string que los contenga
    var actors = movie.getActors()
    var actorsText = ''
    console.log(actors)
    for (var i = 0; i < actors.length; i++) {
      actorsText = actorsText + actors[i] + ' ' // Esto es para tener todos los actores separados por un espacio
    }
    console.log(actorsText)
    // Creo el nodo de texto con los actores que separe con espacios
    var actorsTextNode = document.createTextNode(actorsText)

    // Creo un elemento HTML por cada texto y agrego los texto en cada uno
    var titleH1 = document.createElement('h1')
    titleH1.appendChild(titleTextNode)

    var yearH2 = document.createElement('h2')
    yearH2.appendChild(yearTextNode)

    var directorH3 = document.createElement('h3')
    directorH3.appendChild(directorTextNode)

    var actorsH4 = document.createElement('h4')
    actorsH4.appendChild(actorsTextNode)

    // Creo el li de la lista para agregarle todos los textos
    var li = document.createElement('li')
    li.appendChild(titleH1)
    li.appendChild(yearH2)
    li.appendChild(directorH3)
    li.appendChild(actorsH4)

    // Agrego la clase para que se vea bien
    li.className = 'list-group-item'

    // Agrego el id para poder eliminar despues
    li.id = movie.getId()

    return li
  }

  // Este método agrega las películas tanto en el DOM como en el array principal
  exposed.addMovie = function (title, year, director, actors) {
    // Busco la lista en el HTML
    var mainList = document.getElementById('mainList')

    // Creo un objeto película
    var movie = new Movie(title, year, director)

    // Agrego los actores a mi objeto película
    for (var i = 0; i < actors.length; i++) {
      movie.setActor(actors[i])
    }

    // Creo un nodo de HTML con el objeto película
    var movieNode = _createMovieNode(movie)

    // Agrego el nodo en el HTML
    mainList.appendChild(movieNode)

    // Agrego el objeto película en el array
    movies.push(movie)
  }

  exposed.removeMovie = function (id) {
    // Valido que el id sea valido sino no sigo
    if (typeof id === 'string') {
      // Busco la lista que es el padre y el nodo que quiero eliminar hijo
      var mainList = document.getElementById('mainList')
      var nodeById = document.getElementById(id)

      // Elimino la película en el DOM
      mainList.removeChild(nodeById)

      var index = false

      // Parseo el Id porque en el array tiene formato number
      var parsedId = parseInt(id, 10)
      // Busco la película en el array
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].id === parsedId) {
          index = i
          break
        }
      }

      // Borro la película del array
      if (index !== false) {
        movies.splice(index, 1)
      }
    }
  }

  exposed.showMovies = function () {
    var mainList = document.getElementById('mainList')
    // Recorro el array de películas y creo un nodo por cada una que agreo a la lista en el HTML
    for (var i = 0; i < movies.length; i++) {
      var movie = movies[i]
      var movieNode = _createMovieNode(movie)
      mainList.appendChild(movieNode)
    }
  }

  return exposed
})()
