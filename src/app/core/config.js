(function () {
  'use strict';

  angular
    .module('hydrane.core')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
