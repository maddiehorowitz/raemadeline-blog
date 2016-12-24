define('raemadeline/tests/test-helper', ['exports', 'raemadeline/tests/helpers/resolver', 'ember-qunit'], function (exports, _raemadelineTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_raemadelineTestsHelpersResolver['default']);
});