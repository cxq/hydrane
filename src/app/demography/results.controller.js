(function () {
  'use strict';

  angular
    .module('hydrane.demography')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController(searchResultsService) {
    var vm = this;

    vm.chartConfig = {
      options: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        }
      },
      series: [{
        name: 'Demography in 2016',
        colorByPoint: true,
        data: [
          searchResultsService.data
        ]
      }],
      title: {
        text: ''
      },

      loading: false
    };
  }
})();
