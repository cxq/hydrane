(function () {
  'use strict';

  angular
    .module('hydrane.core')
    .run(runBlock)
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($routeProvider) {
    $routeProvider.when('/', {
      redirectTo: function () {
        return "/demography";
      }
    });
  }

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock core end');
  }

})();
