define('raemadeline/app', ['exports', 'ember', 'raemadeline/resolver', 'ember-load-initializers', 'raemadeline/config/environment'], function (exports, _ember, _raemadelineResolver, _emberLoadInitializers, _raemadelineConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _raemadelineConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _raemadelineConfigEnvironment['default'].podModulePrefix,
    Resolver: _raemadelineResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _raemadelineConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});