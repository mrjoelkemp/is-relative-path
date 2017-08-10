var isAbsolute = require('path').isAbsolute;

/**
 * @param  {String}  path
 * @return {Boolean}
 */
module.exports = function isRelative(path) {
  return !isAbsolute(path);
};
