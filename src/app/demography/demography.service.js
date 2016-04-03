(function () {
  'use strict';

  angular
    .module('hydrane.demography')
    .factory('demographyService', demographyService);

  /** @ngInject */
  function demographyService($log, $http) {
    var apiHost = 'http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane';
    var countryList = [];

    return {
      apiHost: apiHost,
      fetchCountries: fetchCountries,
      getCountryList: getCountryList,
      getContinentList: getContinentList
    };

    function fetchCountries() {
      return $http.get(apiHost)
        .then(fetchCountriesComplete)
        .catch(fetchCountriesFailed);

      function fetchCountriesComplete(response) {
        var geonames = response.data.geonames;

        setCountryList(geonames);
        return geonames;
      }

      function fetchCountriesFailed(error) {
        $log.error('XHR Failed for fetchCountriesFailed.\n' + angular.toJson(error.data, true));
      }
    }

    function setCountryList(geonames) {
      countryList = geonames;
    }

    function getCountryList() {
      return countryList;
    }

    function getContinentList() {
      return countryList.map(function(country){
        return country.continent;
      });
    }
  }
})();
