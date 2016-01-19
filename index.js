var ms = require('ms')
var Promise = require('bluebird')

module.exports = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms(time))
  })
}
