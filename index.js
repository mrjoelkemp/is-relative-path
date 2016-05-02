/**
 * @param  {String}  filename
 * @return {Boolean}
 */
module.exports = function (filename) {
  if (typeof filename !== 'string') {
    throw new TypeError([
      '`filename` should be an `String`,',
      'but got `' + (typeof filename) + '`: ' + filename,
    ].join(' '));
  }

  return filename[0] === '.';
};
