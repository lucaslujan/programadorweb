var showUlLists = (function () {
  var exposed = {}

  exposed.createStudentsList = function (students) {
    var ul = document.createElement('ul')

    ul.id = 'mainList'

    for (var i = 0; i < students.length; i++) {
      var student = students[i]
      var li = _createStudentNode(student, i)
      ul.appendChild(li)
    }
    return ul
  }

  function _createStudentNode (studentName, i) {
    var studentTextNode = document.createTextNode(studentName)

    var li = document.createElement('li')

    li.id = i

    li.appendChild(studentTextNode)

    return li
  }

  return exposed
})()
