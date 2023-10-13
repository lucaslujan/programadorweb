// Traducciones pro

var translate = (function () {
  var exposed = {}

  exposed.translatePage = function (language) {
    $('[translateId]').empty()
    $('[translateId]').each(function () {
      var key = $(this).attr('translateId')
      var translate = translateString(key, language)
      $(this).text(translate)
    })
  }

  exposed.translateString = function (key, language) {
    return translateString(key, language)
  }

  function translateString (key, language) {
    for (var i = 0; i < translates.length; i++) {
      if (translates[i].key === key) {
        var translate = translates[i]
        return translate[language]
      }
    }
    return key
  }

  return exposed
})()

var translates = [
  {
    key: 'mainTitle',
    es: 'Interfaz de API Star Wars ',
    en: 'Star Wars API interface'
  },
  {
    key: 'savedCaracters',
    es: 'Personajes guardados',
    en: 'Saved caracters'
  },
  {
    key: 'allCaracters',
    es: 'Todos los personajes',
    en: 'All caracters'
  },
  {
    key: 'searchCaracter',
    es: 'Buscar personaje',
    en: 'Search caracter'
  },
  {
    key: 'firstName',
    es: 'Nombre',
    en: 'Name'
  },
  {
    key: 'gender',
    es: 'Género',
    en: 'Gender'
  },
  {
    key: 'height',
    es: 'Altura',
    en: 'Height'
  },
  {
    key: 'weight',
    es: 'Peso',
    en: 'Weight'
  },
  {
    key: 'eyeColor',
    es: 'Color de ojos',
    en: 'Eye color'
  },
  {
    key: 'delete',
    es: 'Borrar',
    en: 'Delete'
  },
  {
    key: 'male',
    es: 'Hombre',
    en: 'Male'
  },
  {
    key: 'female',
    es: 'Mujer',
    en: 'Female'
  },
  {
    key: 'hermaphrodite',
    es: 'Hermafrodita',
    en: 'Hermaphrodite'
  },
  {
    key: 'n/a',
    es: 'No aplica',
    en: 'Not apply'
  },
  {
    key: 'none',
    es: 'Ninguno',
    en: 'None'
  },
  {
    key: 'blue',
    es: 'Azul',
    en: 'Blue'
  },
  {
    key: 'yellow',
    es: 'Amarillo',
    en: 'Yellow'
  },
  {
    key: 'red',
    es: 'Rojo',
    en: 'Red'
  },
  {
    key: 'brown',
    es: 'Marrón',
    en: 'Brown'
  },
  {
    key: 'blue-gray',
    es: 'Gris claro',
    en: 'Blue gray'
  },
  {
    key: 'orange',
    es: 'Naranja',
    en: 'Orange'
  },
  {
    key: 'black',
    es: 'Negro',
    en: 'Black'
  },
  {
    key: 'hazel',
    es: 'Avellana',
    en: 'Hazel'
  },
  {
    key: 'pink',
    es: 'Rosa',
    en: 'Pink'
  },
  {
    key: 'unknown',
    es: 'Desconocido',
    en: 'Unknown'
  },
  {
    key: 'red, blue',
    es: 'Rojo y azul',
    en: 'Red & blue'
  },
  {
    key: 'gold',
    es: 'Dorado',
    en: 'Gold'
  },
  {
    key: 'green, yellow',
    es: 'Verde y amarillo',
    en: 'Green & yellow'
  },
  {
    key: 'white',
    es: 'Blanco',
    en: 'White'
  },
  {
    key: 'dark',
    es: 'Oscuro',
    en: 'Dark'
  }
]
