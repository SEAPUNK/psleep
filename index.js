var ms = require('ms')
var Promise = require('bluebird')

module.exports = function (time) {
  var millis = (typeof time === 'string') ? ms(time) : time
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, millis)
  })
}
