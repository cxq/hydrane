(function() {
  'use strict';

  angular
    .module('hydrane.demography')
    .controller('DemographyController', DemographyController);

  /** @ngInject */
  function DemographyController(searchService) {
    var vm = this;
    vm.searchParams = searchService.params;
  }
})();
