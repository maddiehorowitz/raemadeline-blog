define('raemadeline/tests/helpers/start-app', ['exports', 'ember', 'raemadeline/app', 'raemadeline/config/environment'], function (exports, _ember, _raemadelineApp, _raemadelineConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _raemadelineConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _raemadelineApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});