define('raemadeline/tests/routes/concerts.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/concerts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/concerts.js should pass jshint.\nroutes/concerts.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/concerts.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});