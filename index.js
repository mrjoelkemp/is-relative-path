var path = require('path');

/**
 * @param  {String}  filename
 * @return {Boolean}
 */
module.exports = function (filename) {
  return !path.isAbsolute(filename) && filename[0] === '.';
};
