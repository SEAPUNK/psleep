var ms = require('ms')

module.exports = function (time) {
  var millis = (typeof time === 'string') ? ms(time) : time
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, millis)
  })
}
