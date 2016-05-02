var assert = require('assert');
var isRelative = require('../');

describe('is-relative-path', function () {
  it('returns true if the given path is relative', function () {
    assert.ok(isRelative('../'));
    assert.ok(isRelative('../foo.js'));
    assert.ok(isRelative('../../foo.js'));
    assert.ok(isRelative('./foo.js'));
    assert.ok(isRelative('./foo'));
    assert.ok(isRelative('./'));
    assert.ok(isRelative('../../../../'));
  });

  it('returns false if the given path is not relative', function () {
    assert.ok(!isRelative('/'));
    assert.ok(!isRelative('/foo.js'));
    assert.ok(!isRelative('foo.js'));
    assert.ok(!isRelative('foo'));
    assert.ok(!isRelative('foo/bar/car/baz.js'));
  });

  it('throws on empty input', function () {
    assert.throws(function () {
      isRelative();
    }, function (err) { return (err instanceof TypeError); });
  });

  it('throws on invalid input', function () {
    assert.throws(function () {
      isRelative(2);
    }, function (err) { return (err instanceof TypeError); });
  });
});
