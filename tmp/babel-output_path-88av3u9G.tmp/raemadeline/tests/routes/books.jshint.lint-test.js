define('raemadeline/tests/routes/books.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/books.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/books.js should pass jshint.\nroutes/books.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});