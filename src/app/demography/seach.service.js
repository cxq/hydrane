(function () {
  'use strict';

  angular
    .module('hydrane.demography')
    .factory('searchService', searchService);

  /** @ngInject */
  function searchService() {
    return {
      params : {
        metric: 'ALL',
        continent: 'ALL',
        limit: 5,
        isSearchDone: false
      }
    };
  }

})();
