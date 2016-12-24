define('raemadeline/router', ['exports', 'ember', 'raemadeline/config/environment'], function (exports, _ember, _raemadelineConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _raemadelineConfigEnvironment['default'].locationType,
    rootURL: _raemadelineConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('books');
    this.route('concerts');
  });

  exports['default'] = Router;
});