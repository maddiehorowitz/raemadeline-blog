define('raemadeline/helpers/app-version', ['exports', 'ember', 'raemadeline/config/environment'], function (exports, _ember, _raemadelineConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _raemadelineConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});