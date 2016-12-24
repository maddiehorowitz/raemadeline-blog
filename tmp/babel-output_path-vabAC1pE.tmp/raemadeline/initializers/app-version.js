define('raemadeline/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'raemadeline/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _raemadelineConfigEnvironment) {
  var _config$APP = _raemadelineConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});