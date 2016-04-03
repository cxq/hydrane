(function () {
  'use strict';

  angular
    .module('hydrane.demography')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController(demographyService, searchService, searchResultsService) {
    var vm = this;

    vm.search = search;
    vm.continentSelectList = continentList();
    vm.resultLimitSelectList = [5, 10, 15, 20];
    vm.metricSelectList= ['ALL', 'areaInSqKm', 'population'];

    vm.searchParams = searchService.params;

    function search() {
      searchService.params.isSearchDone = true;
      searchResultsService.update();
    }

    function continentList() {
      var continents = ['ALL'];

      return continents.concat(demographyService.getContinentList());
    }
  }
})();
