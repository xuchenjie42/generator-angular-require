'use strict';

var fs = require('fs');
var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('angular-require:service', function () {
  beforeEach(function (done) {
    helpers
      .run(require.resolve('../service'))
      .withArguments('foo')
      .on('end', done);
  });

  it('generates a new service', function () {
    assert.file('test/spec/services/fooSpec.js');
    assert.fileContent(
      path.join('app/scripts/services/foo.js'),
      /service\('foo'/
    );
  });
});