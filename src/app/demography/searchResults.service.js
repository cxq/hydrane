(function () {
  'use strict';

  angular
    .module('hydrane.demography')
    .factory('searchResultsService', searchResultsService);

  /** @ngInject */
  function searchResultsService(demographyService, searchService) {
    return {
      update: update,
      data: []
    };

    function update() {
      this.data = getFiltereredResults();
    }

    function getFiltereredResults() {
      var continents = getResultsByContinent(demographyService.getCountryList(), searchService.params.continent);
      var metrics = getResultByMetric(continents);

      return metrics.slice(0,searchService.params.limit);
    }

    function getResultsByContinent(results, continent) {
      if (continent === 'ALL') {
        return results;
      }

      return results.filter(function (country) {
        return country.continent === continent;
      });
    }

    function getResultByMetric(results) {
      //TODO
      return results;
    }
  }

})();
