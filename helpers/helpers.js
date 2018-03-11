var helpers = (function () {
  var _helpers = {}

  _helpers.hasNull = function (target) {
    for (var member in target) {
      if (target[member] == null) return true
    }
    return false
  }

  return _helpers
})()

module.exports = helpers
