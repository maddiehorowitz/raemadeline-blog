define('raemadeline/tests/helpers/resolver', ['exports', 'raemadeline/resolver', 'raemadeline/config/environment'], function (exports, _raemadelineResolver, _raemadelineConfigEnvironment) {

  var resolver = _raemadelineResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _raemadelineConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _raemadelineConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});