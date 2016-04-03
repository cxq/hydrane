(function() {
  'use strict';

  angular
    .module('hydrane.demography')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($routeProvider) {
    $routeProvider
      .when('/demography', {
        templateUrl: 'app/demography/demography.html',
        controller: 'DemographyController',
        controllerAs: 'demography',
        resolve: {
          countries: function(demographyService){
            return demographyService.fetchCountries();
          }
        }
      });
  }

})();
