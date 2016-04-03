(function() {
  'use strict';

  angular
    .module('hydrane.layout')
    .directive('mainNavbar', mainNavbar);

  /** @ngInject */
  function mainNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/layout/navbar/navbar.html',
      controller: 'SearchController',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
